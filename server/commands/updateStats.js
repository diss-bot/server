'use strict';

const getStatsHelper = require('../util/getStatsHelper.js');
const getPuuidHelper = require('../util/getPuuidHelper.js');

module.exports = {
  name: 'STATS',
  description: 'Gets latest stats from last game',
  async execute(message, game) {
    let requestObj = {
      gameName: game,
      puuid: await getPuuidHelper(message.msgAuthor)
    }
    let data = await getStatsHelper(requestObj)
    let { kills, deaths, assists, kda, win, matchId } = data
    message.channel.send(`${kills} ${deaths} ${assists} ${kda} ${win} ${matchId}`);
  },
};