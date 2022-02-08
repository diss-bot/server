'use strict';

const getMatch = require('../server/modules/util/getMatch.js');
const getGameInfo = require('../server/modules/util/getGameInfo.js');
const User = require('../server/models/userModel');


module.exports = async (user1, user2) => {

  let player1 = await User.find({ _id: user1 }).puuid; 
  let player2 = await User.findById({ _id: user2 }).puuid;
  
  let player1Match = getMatch(player1);
  let player2Match = getMatch(player2);

  let player1Stats;
  let player2Stats;

  if (player1Match === player2Match) {
    let playersStats = getGameInfo(player1Match, player1, player2);
    player1Stats = playersStats.user1;
    player2Stats = playersStats.user2;
  } else {
    player1Stats = getGameInfo(player1Match, player1);
    player2Stats = getGameInfo(player2Match, player2);
  }

  let player1KDA = (player1Stats.kills += player1Stats.assists) / player1Stats.deaths;
  let player2KDA = (player2Stats.kills += player2Stats.assists) / player2Stats.deaths;

  if (player1KDA > player2KDA) {
    return `${user1} whooped ${user2}s ass!`;
  } else if (player2KDA > player1KDA) {
    return `${user2} whooped ${user1}s ass!`;
  } else {
    return `I guess you're both losers`;
  }
};