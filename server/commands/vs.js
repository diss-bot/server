'use strict';

const compareUsers = require('../util/compareUsers.js');
module.exports = {
  name: 'VS',
  description: 'Compare yourself, and up to 3 other diss-bot users.',
  async execute(message, game, users) {
    try {
      let embed = await compareUsers(message, game, users);
      if (embed instanceof Error) {
        message.channel.send(embed.message);
        return;
      } else {
        message.channel.send({ embeds: [embed] });
      }
    } catch (e) {
      message.channel.send(e.message);
    }
  },
};