'use strict';

const compareUsers = require('../util/compareUsers.js');
module.exports = {
  name: 'VS',
  description: 'Compare yourself, and up to 3 other diss-bot users.',
  async execute(message, game, users) {
    try {
      console.log('USERS RIGHT HERE', users);
      let value = await compareUsers(message, game, users);
      if (value instanceof Error) {
        message.channel.send(embed.message);
        return;
      } else {
        message.channel.send({ embeds: [value] });
      }
    } catch (e) {
      message.channel.send(e.message);
    }
  },
};