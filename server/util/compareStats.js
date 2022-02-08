'use strict';

const getMatch = require('./getMatches.js');
const getGameInfo = require('./getGameInfo.js');
const User = require('../models/userModel');

module.exports = async (user1, user2) => {

  // let player1 = await User.find({ _id: user1 }).puuid; 
  // let player2 = await User.find({ _id: user2 }).puuid;

  let player1 = 'waUA09FZ8Hws_94oJX4ATQ2S_DLkvWbRysm3VEeIFGX_J9yZBElDGSpCs-iauaFJEEIqJed0voMVKw';
  let player2 = 'zKHrb2YkSPJHIzjC_3pLefOQjTSNlGZ7blOmCAstwAy7BOkrMRKKkQMHbRmoHImNSqbKZ7xRdJM4Hw';

  let player1Match = await getMatch(player1);
  let player2Match = await getMatch(player2);
  console.log('matches', player1Match, player2Match);
  let player1Stats;
  let player2Stats;

  let puuidArray = [player1, player2];

  if (player1Match === player2Match) {
    // let playersStats = await getGameInfo(player1Match, puuidArray);
    // player1Stats = playersStats.user1;
    // player2Stats = playersStats.user2;
    // console.log(player1Stats, player2Stats);
  } else {
    player1Stats = await getGameInfo(player1Match, player1);
    player2Stats = await getGameInfo(player2Match, player2);
    console.log(player1Stats, player2Stats);
  }

  let player1KDA = (player1Stats[0] += player1Stats[2]) / player1Stats[1];
  let player2KDA = (player2Stats[0] += player2Stats[2]) / player2Stats[1];

  console.log(player1KDA, player2KDA);
  if (player1KDA > player2KDA) {
    return `${user1} whooped ${user2}s ass!`;
  } else if (player2KDA > player1KDA) {
    return `${user2} whooped ${user1}s ass!`;
  } else {
    return `I guess you're both losers`;
  }
}