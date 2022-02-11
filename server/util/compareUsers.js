'use strict';

const Discord = require('discord.js');
const getStatsHelper = require('./getStatsHelper.js');
const getUserDbHelper = require('./getUserDbHelper.js');
const updateDbStatsHelper = require('./updateDbStatsHelper.js');

const embedMaker = require('../../data/embedMaker.js');

let data = require('../../data/embed.json');
let roast = require('../../data/roast.js');
let allowedGamesArray = ['lol', 'tft'];

module.exports = async (message, game, usersToCompare) => {
  try {
    if (!usersToCompare.userOne) return embedMaker(`You need to stop playing with yourself and get some friends, try using "$diss vs < game > < @discord nickname >" bozo!`);

    let finalArr = [];
    let userArray = [{
      gameName: game,
      discordId: message.msgAuthor,
    }];

    Object.values(usersToCompare).forEach(user => {
      userArray.push({ gameName: game, discordId: user });
    })

    for (let user of userArray) {
      if (!allowedGamesArray.includes(user.gameName)) return embedMaker('What the heck is that? Try one of the games I actually support like League of Legends or TeamFightTactics');
      if (user.discordId) {
        let userFromDb = await getUserDbHelper(user.discordId); // getting puuid from database using the discordId, which is unique
        if (!userFromDb) return embedMaker(`You don't exist in my database, try the "$diss help" command to figure yourself out.`);
        if (!userFromDb.puuid) return embedMaker(`You need to register so I can track your stats... and insult you accordingly. Try "$diss help" for more info.`);
        user.puuid = userFromDb.puuid;
        user.name = userFromDb.name;

        let { lolK, lolD, lolA } = userFromDb.games.LeagueOfLegends; // League Of Legends kills, deaths, and assists from the user in MongoDB
        let { valK, valD, valA } = userFromDb.games.Valorant; // Valorant kills, deaths, and assists from the user in MongoDB
        let { tftEliminations, tftPlacements, tftWins } = userFromDb.games.TeamFightTactics // TeamFightTactics eliminations, placements, and wins

        user.stats = {
          lolKDA: { kills: lolK, deaths: lolD, assists: lolA, },
          valKDA: { kills: valK, deaths: valD, assists: valA, },
          tftSTATS: { elims: tftEliminations, placements: tftPlacements, win: tftWins, },
        }

        user.matchesPlayed = {
          lolMatchesPlayed: userFromDb.games.LeagueOfLegends.lolMatchesPlayed,
          valMatchesPlayed: userFromDb.games.Valorant.valMatchesPlayed,
          tftMatchesPlayed: userFromDb.games.TeamFightTactics.tftMatchesPlayed,
        }

        user.latestMatches = {
          lolLatestMatch: userFromDb.games.LeagueOfLegends.lolLatestMatchId,
          valLatestMatch: userFromDb.games.Valorant.valLatestMatchId,
          tftLatestMatch: userFromDb.games.TeamFightTactics.tftLatestMatchId,
        }

        user.data = await getStatsHelper(user); // retrieves stats from latest match, which will be used to diss / update database
        if (!user.data) return embedMaker(`Somebody is lying about how much they game, I couldn't find any info on ${user.name}`);
        finalArr.push(user);
        await updateDbStatsHelper(user);
      }
    }

    finalArr.sort((userOne, userTwo) => (userOne.data.decider > userTwo.data.decider) ? -1 : 1);

    let title = finalArr.reduce((string, player, idx) => {
      if (idx === 0) {
        return `${player.name}`;
      } else {
        return `${string} vs ${player.name}`
      }
    }, '');

    let result = roast(`compare${finalArr.length}Players`, finalArr);

    const embed = new Discord.MessageEmbed()
      .setTitle(`🏆  ${title}  🏆`)
      .setColor(`${data.color}`)
      .setThumbnail(`${data.thumbnail}`)
      .setDescription(`Let's see who played better.`)
      .addFields(
        { name: 'Results:', value: result }
      );
    return embed;
  } catch (e) {
    console.log(e);
  }
}