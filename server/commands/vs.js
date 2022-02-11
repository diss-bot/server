'use strict';

const compareUsers = require('../util/compareUsers.js');
module.exports = {
  name: 'VS',
  description: 'Compare yourself, and up to 3 other diss-bot users.',
  async execute(message, game, users) {
    try {
      let diss = await compareUsers(message, game, users);
      message.channel.send({ embeds: [diss] });
    } catch (e) {
      message.channel.send(e.message);
    }
  },
};