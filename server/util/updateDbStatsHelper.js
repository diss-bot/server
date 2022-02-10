'use strict';

const User = require('../models/userModel.js');

module.exports = async function (userStatsObject) {
  let { gameName, data, stats } = userStatsObject;
  let { lolKDA } = stats;

  if (gameName.toUpperCase() === 'LOL') {
// needs to be return to prevent dupe data
let { kills, deaths, assists, win, matchId } = data; // this comes off the LAST match that the user played

    if (userStatsObject.latestMatches.lolLatestMatch === matchId) console.log('RETURN HERE INSTEAD'); // needs to be return to prevent dupe data

    let winNum = win ? 1 : 0;
    console.log(lolKDA);
    let kda = kdaCalc((lolKDA.kills + kills), (lolKDA.deaths + deaths), (lolKDA.assists + assists));
    console.log(kda);

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
    console.log(`${userStatsObject.discordId}'s stats have been updated in the database`);
  } else if (gameName.toUpperCase() === 'TFT') {
    console.log(data);
    // let { eliminations, placement, win } = data;

    await User.findByIdAndUpdate(userStatsObject.discordId, {
      $inc: {
        "games.TeamFightTactics.tftPlacements": placement,
        "games.TeamFightTactics.ftfWin": winNum,
        "games.TeamFightTactics.tftEliminations": eliminations,
        "games.TeamFightTactics.tftMatchesPlayed": 1,
      },
      $set: {
        "games.TeamFightTactics.tftLatestMatchId": matchId,
      },
    });

    console.log('in here TFT');

    // await User.findByIdAndUpdate(message.msgAuthor, {
    //   $set: {
    //     "games.TeamFightTactics.summonerName": inGameName, "puuid": userPuuid
    //   },
    // });
    // message.channel.send(`${message.author.username}'s in game name for TFT has been updated.. prepare to get dissed.`)
  } else if (gameName.toUpperCase() === 'VAL') {
    let { kills, deaths, assists, kda, win, matchId } = data;

    console.log('in here VAL');

    // await User.findByIdAndUpdate(message.msgAuthor, {
    //   $set: {
    //     "games.Valorant.gamerName": inGameName, "games.Valorant.tagline": tagline, "puuid": userPuuid
    //   },
    // });
    // message.channel.send(`${message.author.username}'s in game name for Valorant has been updated.. prepare to get dissed.`)
  } else {
    throw new Error('Incorrect game, try one of the ones I actually support like League, TFT, or Valorant')
  }
}

function kdaCalc(kills, deaths, assists) {
  console.log('CHECK RIGHT HERE', kills, deaths, assists);
  return (kills + assists) / deaths;
}