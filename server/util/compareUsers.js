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
    userArray.push({ gameName: game, discordId: user });
  })

  for (let user of userArray) {
    if (user.discordId) {
      let userFromDb = await getUserDbHelper(user.discordId); // getting puuid from database using the discordId, which is unique
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

      user.data = await getStatsHelper(user); // retrieves stats from latest match, which will be used to diss / update db
      finalArr.push(user);
      await updateDbStatsHelper(user);
    }
  }

  finalArr.sort((userOne, userTwo) => (userOne.data.kda > userTwo.data.kda) ? -1 : 1);

  let [winner, secondPlace, thirdPlace, fourthPlace] = finalArr;
  console.log(winner.name);

  return `${winner.name} is better than that scrub ${secondPlace.name}`
}