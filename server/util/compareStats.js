'use strict';

const getStatsHelper = require('./getStatsHelper.js');
const getUserDbHelper = require('./getUserDbHelper.js');
const updateDbStatsHelper = require('./updateDbStatsHelper.js');
let data = require('../../public/embed.json');
let roasts = require('../../public/roast.json');

const numGen = require('./numGen.js');
console.log('numGen', numGen());

let roastNum = numGen();

let compare01 = roasts.compare01[roastNum];
let compare02 = roasts.compare02[roastNum];
console.log('comp01', compare01);
console.log('comp02', compare02);

module.exports = async (message, game, usersToCompare) => {
  let finalArr = [];
  let userArray = [{
    gameName: game,
    discordId: message.msgAuthor,
  }];

  Object.values(usersToCompare).forEach(user => {
    userArray.push({ gameName: game, discordId: user, puuid: '' });
  })

  for (let user of userArray) {
    if (user.discordId) {
      let userFromDb = await getUserDbHelper(user.discordId); // getting puuid from database using the discordId, which is unique
      user.puuid = userFromDb.puuid;
      user.name = userFromDb.name;
      user.stats = {
        lolKDA: {
          kills: userFromDb.games.LeagueOfLegends.kills,
          deaths: userFromDb.games.LeagueOfLegends.deaths,
          assists: userFromDb.games.LeagueOfLegends.assists,
        },
        valKDA: {
          kills: userFromDb.games.Valorant.kills,
          deaths: userFromDb.games.Valorant.deaths,
          assists: userFromDb.games.Valorant.assists,
        }
      }
      user.matchesPlayed = {
        lolMatchesPlayed: userFromDb.games.LeagueOfLegends.matchesPlayed,
        valMatchesPlayed: userFromDb.games.Valorant.matchesPlayed,
        tftMatchesPlayed: userFromDb.games.TeamFightTactics.matchesPlayed,
      }
      user.latestMatches = {
        lolLatestMatch: userFromDb.games.LeagueOfLegends.latestMatchId,
        valLatestMatch: userFromDb.games.Valorant.latestMatchId,
        tftLatestMatch: userFromDb.games.TeamFightTactics.latestMatchId,
      }
      user.data = await getStatsHelper(user); // retrieves stats from latest match, which will be used to diss / update db
      finalArr.push(user);
      console.log(finalArr);
      await updateDbStatsHelper(user);
    }
  }

  finalArr.sort((userOne, userTwo) => (userOne.data.kda > userTwo.data.kda) ? -1 : 1);

  let [winner, secondPlace, thirdPlace, fourthPlace] = finalArr;
  // console.log('WINNER HERE', winner.name);
  // console.log('second HERE', secondPlace.name);

  // return `${winner.name} is better than that scrub ${secondPlace.name}`
  
      const embed = new Discord.MessageEmbed()
      .setTitle(`${winner.name} V.S. ${secondPlace.name}`)
      .setColor(`${data.color}`)
      .setThumbnail(`${data.thumbnail}`)
        .setDescription(`Let's see who played better.`)
        .addFields(
          { name: `Results:`, value: `${winner.name}${compare01}${secondPlace.name}${compare02}` }
          );
        console.log('embed', embed);
      message.channel.send({ embeds: [embed] });
      // } catch (e) {
      //   message.channel.send(`You typed something in wrong.. I don't know what but I didn't like it`);
      // }

 return embed;
}