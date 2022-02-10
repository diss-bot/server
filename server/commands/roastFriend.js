'use strict';

const getStatsHelper = require('../util/getStatsHelper.js');
const getUserDbHelper = require('../util/getUserDbHelper.js');

module.exports = {
  name: 'ROAST',
  description: 'Gets latest stats for diss-bot users',
  async execute(message, game, userToRoast) {
    let user = await getUserDbHelper(userToRoast);
    let requestObj = {
      gameName: game,
      puuid: user.puuid,
    }
    let data = await getStatsHelper(requestObj)
    if (game.toUpperCase() === 'LOL') {
      let {kills, deaths, assists, kda, win} = data;
      message.channel.send(`${kills} ${deaths} ${assists} ${kda} ${win}`);
    }
    else if (game.toUpperCase() === 'TFT') {
      console.log(data);
      let {placement, players_eliminated, win} = data;
      message.channel.send(`${placement} ${players_eliminated} ${win}`);
    }
    else {
      message.channel.send(`You're trying to roast somebody but you typed it in wrong? Come on you scrub.`)
    }
  },
};