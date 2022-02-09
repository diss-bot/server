'use strict';

const User = require('../models/userModel');
const statGetter = require('../util/getLatestStats.js');

module.exports = {
  name: 'STATS',
  description: 'Gets latest stats from last game',
  async execute(message, game) {
    let requestObj = {
      gameName: game,
      puuid: puuid,
    }
    let data = await statGetter(requestObj)
    return data;
  },
};