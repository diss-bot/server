'use strict';

const getStatsHelper = require('./getStatsHelper.js');
const getPuuidHelper = require('./getPuuidHelper.js');

module.exports = async (user, game, usersToCompare) => {
  let finalArr = [];
  let userArray = [{
    gameName: game,
    discordId: user,
    puuid: '',
  }];

  Object.values(usersToCompare).forEach(user => {
    userArray.push({ gameName: game, discordId: user, puuid: '' });
  })

  for (let user of userArray) {
    user.puuid = await getPuuidHelper(user.discordId);
    let data = await getStatsHelper(user);
    finalArr.push(data);
    console.log(finalArr);
  }

  // if (player1Stats.kda > player2Stats.kda) {
  //   return `${user1} whooped ${user2}'s ass!`;
  // } else if (player2Stats.kda > player1Stats.kda) {
  //   return `${user2} whooped ${user1}'s ass!`;
  // } else {
  //   return `I guess you're both losers`;
  // }
}