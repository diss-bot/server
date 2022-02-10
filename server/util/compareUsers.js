'use strict';

const Discord = require('discord.js');
const getStatsHelper = require('./getStatsHelper.js');
const getUserDbHelper = require('./getUserDbHelper.js');
const updateDbStatsHelper = require('./updateDbStatsHelper.js');

let data = require('../../public/embed.json');

let roast = require('../../public/roast.js');

const numGen = require('./numGen.js');

module.exports = async (message, game, usersToCompare) => {
  try {

    let roastNum = numGen();
    // let compare01 = roasts.compare01[roastNum];
    // let compare02 = roasts.compare02[roastNum];
    // console.log('comp01', compare01);
    // console.log('comp02', compare02);

    let finalArr = [];
    let userArray = [{
      gameName: game,
      discordId: message.msgAuthor,
    }];

    Object.values(usersToCompare).forEach(user => {
      userArray.push({ gameName: game, discordId: user });
    })

    for (let user of userArray) {
      if (user.discordId) {
        let userFromDb = await getUserDbHelper(user.discordId); // getting puuid from database using the discordId, which is unique
        if (!userFromDb) return new Error(`You don't exist in my database, try the "$diss help" command to figure yourself out.`);
        if (!userFromDb.puuid) return new Error(`You need to register so I can track your stats... and insult you accordingly. Try "$diss help" for more info.`);
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
        finalArr.push(user);
        await updateDbStatsHelper(user);
      }
    }

    finalArr.sort((userOne, userTwo) => (userOne.data.decider > userTwo.data.decider) ? -1 : 1);

    let [winner, secondPlace, thirdPlace, fourthPlace] = finalArr;

    let title = finalArr.reduce((string, player, idx) => {
      if (idx === 0) {
        let roastNum = numGen();
        let compareplayers = roasts.genericRoasts[roastNum];
        return `${player.name}`;
      };
      if (idx === 1) {
        let roastNum = numGen();
        let compareplayers = roasts.compare2Players[roastNum];
        return ???
      };
      if (idx === 2) {
        let roastNum = numGen();
        let compareplayers = roasts.compare3Players[roastNum];
        return ???
      };
      if (idx === 3) {
        let roastNum = numGen();
        let compareplayers = roasts.compare4Players[roastNum];
        return ???
      };
      // } else {
      //   return `${string} vs ${player.name}`
      // }
    }, '');

    let result = roast('leagueRoasts', 4, finalArr);

    const embed = new Discord.MessageEmbed()
      .setTitle(title)
      .setColor(`${data.color}`)
      .setThumbnail(`${data.thumbnail}`)
      .setDescription(`Let's see who played better.`)
      .addFields(
        { name: 'Results:', value: result }
      );
    return embed;
  } catch (e) {
    console.log('in HERE AGAIN');
    return (e.message);
  }
}