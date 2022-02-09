'use strict';

const getStatsHelper = require('./getStatsHelper.js');
const getUserDbHelper = require('./getUserDbHelper.js');
const updateDbStatsHelper = require('./updateDbStatsHelper.js');

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
      user.stats = {
        lolKDA: {
          kills: userFromDb.games.LeagueOfLegends.kills,
          assists: userFromDb.games.LeagueOfLegends.asists,
          deaths: userFromDb.games.LeagueOfLegends.deaths
        },
          valKDA: {
          kills: userFromDb.games.Valorant.kills,
          assists: userFromDb.games.Valorant.asists,
          deaths: userFromDb.games.Valorant.deaths
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
      await updateDbStatsHelper(user);
    }
    // finalArr.push(user);
    // console.log(finalArr);
  }


  // finalArr.
  // if (player1Stats.kda > player2Stats.kda) {
  //   return `${user1} whooped ${user2}'s ass!`;
  // } else if (player2Stats.kda > player1Stats.kda) {
  //   return `${user2} whooped ${user1}'s ass!`;
  // } else {
  //   return `I guess you're both losers`;
  // }
}