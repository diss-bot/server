'use strict';

const getMatch = require('./League/getLolMatches.js');
const getGameInfo = require('./League/getLolGameInfo.js');
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
    console.log('RIGHT HERE', player1Stats, player2Stats);
  }

  if (player1Stats[3] > player2Stats[3]) {
    return `${user1} whooped ${user2}'s ass!`;
  } else if (player2Stats[3] > player1Stats[3]) {
    return `${user2} whooped ${user1}'s ass!`;
  } else {
    return `I guess you're both losers`;
  }
}