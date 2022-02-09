'use strict';

const getStatsHelper = require('./getStatsHelper.js');

module.exports = async (user, usersToCompare) => {
  let userArray = [{
    gameName: 'lol',
    discordName: user,
  }];

  Object.entries(usersToCompare).forEach(user => {
    userArray.push(user);
  })

  console.log(userArray);
  // let requestObjOne = {
  //   gameName: 'lol',
  //   discordName: user,
  // }
  // let userData = await getStatsHelper(requestObjOne)
  // finalArr.push(userData);
  // console.log(finalArr);
  // let requestObjTwo = {
  //   gameName: 'lol',
  //   discordName: user2,
  // }

  // let player1Stats = await getStatsHelper(requestObjOne);
  // let player2Stats = await getStatsHelper(requestObjTwo);

  // if (player1Stats.kda > player2Stats.kda) {
  //   return `${user1} whooped ${user2}'s ass!`;
  // } else if (player2Stats.kda > player1Stats.kda) {
  //   return `${user2} whooped ${user1}'s ass!`;
  // } else {
  //   return `I guess you're both losers`;
  // }
}