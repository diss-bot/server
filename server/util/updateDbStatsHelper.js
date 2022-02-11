'use strict';

const User = require('../models/userModel.js');

module.exports = async function (userStatsObject) {
  let { gameName, data, stats } = userStatsObject;
  let { lolKDA, tftSTATS } = stats;

  if (gameName.toUpperCase() === 'LOL') {

    let { kills, deaths, assists, win, matchId } = data; // this comes off the LAST match that the user played

    if (userStatsObject.latestMatches.lolLatestMatch === matchId) return; // needs to be return to prevent dupe data

    let winNum = win ? 1 : 0;
    let kda = kdaCalc((lolKDA.kills + kills), (lolKDA.deaths + deaths), (lolKDA.assists + assists));

    await User.findByIdAndUpdate(userStatsObject.discordId, {
      $inc: { // these values will be incremented by the latest match values
        "games.LeagueOfLegends.lolK": kills,
        "games.LeagueOfLegends.lolD": deaths,
        "games.LeagueOfLegends.lolA": assists,
        "games.LeagueOfLegends.lolWin": winNum,
        "games.LeagueOfLegends.lolMatchesPlayed": 1,
      },
      $set: {
        "games.LeagueOfLegends.lolLatestMatchId": matchId,
        "games.LeagueOfLegends.lolKDA": kda,
      },
    });
    console.log(`${userStatsObject.discordId}'s LeagueOfLegends stats have been updated in the database`);

  } else if (gameName.toUpperCase() === 'TFT') {

    let { players_eliminated, placement, win, matchId } = data;

    if (userStatsObject.latestMatches.tftLatestMatch === matchId) return; // needs to be return to prevent dupe data

    console.log('RIGHT HERE M8', userStatsObject);
    let avgPlacement = avgPlacementCalc((tftSTATS.placements + placement), (userStatsObject.matchesPlayed.tftMatchesPlayed + 1));

    await User.findByIdAndUpdate(userStatsObject.discordId, {
      $inc: { // these values will be incremented by the latest match values
        "games.TeamFightTactics.tftPlacements": placement,
        "games.TeamFightTactics.ftfWin": win,
        "games.TeamFightTactics.tftEliminations": players_eliminated,
        "games.TeamFightTactics.tftMatchesPlayed": 1,
      },
      $set: { // these values will be set with entirely new values
        "games.TeamFightTactics.tftLatestMatchId": matchId, // this is tracking the last game you played and updated, to compare and avoid players padding stats
        "games.TeamFightTactics.tftAvgPlacement": avgPlacement, // this is calculated on line 39, and is totalPlacements / totalGames to return average game placement
      },
    });
    console.log(`${userStatsObject.discordId}'s TeamFightTactics stats have been updated in the database`);

    // } else if (gameName.toUpperCase() === 'VAL') { // this code block would have been used if we received a developer key from Riot Games in time
  } else {
    return;
  }
}

// helper functions to use when updating stats in MongoDB

function avgPlacementCalc(totalPlacements, totalGames) {
  return totalPlacements / totalGames;
}

function kdaCalc(kills, deaths, assists) {
  return (kills + assists) / deaths;
}