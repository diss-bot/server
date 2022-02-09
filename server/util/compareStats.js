'use strict';

const getStatsHelper = require('./getStatsHelper.js');
const getPuuidHelper = require('./getPuuidHelper.js');
const updateDbStatsHelper = require('./updateDbStatsHelper.js');

module.exports = async (user, game, usersToCompare) => {
  let finalArr = [];
  let userArray = [{
    gameName: game,
    discordId: user,
  }];

  Object.values(usersToCompare).forEach(user => {
    userArray.push({ gameName: game, discordId: user, puuid: '' });
  })

  for (let user of userArray) {
    user.puuid = await getPuuidHelper(user.discordId); // getting puuid from database using the discordId, which is unique
    user.data = await getStatsHelper(user); // retrieves stats from latest match, which will be used to diss / update db
    await updateDbStatsHelper(user);
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