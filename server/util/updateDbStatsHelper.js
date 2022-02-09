'use strict';

const User = require('../models/userModel.js');

module.exports = async function (userStatsObject) {
  let { gameName, data } = userStatsObject;

  if (gameName.toUpperCase() === 'LOL') {
    let { kills, deaths, assists, kda, win, matchId } = data;
    if (userStatsObject.latestMatches.lolLatestMatch === matchId) console.log('WE DID IT'); // needs to be return to prevent dupe data
    let winNum = win ? 1 : 0;
    await User.findByIdAndUpdate(userStatsObject.discordId, {
      $inc: {
        "games.LeagueOfLegends.kills": kills,
        "games.LeagueOfLegends.deaths": deaths,
        "games.LeagueOfLegends.assists": assists,
        "games.LeagueOfLegends.win": winNum,
      },
      $set: {
        "games.LeagueOfLegends.latestMatchId": matchId,
        // "games.LeagueOfLegends.KDA": matchId,
      },
    });
    console.log(`${userStatsObject.discordId}'s stats have been updated`);
  } else if (gameName.toUpperCase() === 'TFT') {
    // let { placement, win, assists, kda, win, matchId } = data;

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