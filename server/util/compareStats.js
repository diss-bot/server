'use strict';

const statGetter = require('./getLatestStats.js');

module.exports = async (user1, user2) => {
  let requestObjOne = {
    gameName: 'lol',
    discordName: user1,
  }
  let requestObjTwo = {
    gameName: 'lol',
    discordName: user2,
  }

  let player1Stats = await statGetter(requestObjOne);
  let player2Stats = await statGetter(requestObjTwo);

  if (player1Stats[3] > player2Stats[3]) {
    return `${user1} whooped ${user2}'s ass!`;
  } else if (player2Stats[3] > player1Stats[3]) {
    return `${user2} whooped ${user1}'s ass!`;
  } else {
    return `I guess you're both losers`;
  }
}