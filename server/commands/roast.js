'use strict';

const compareUsers = require('../util/compareUsers.js');
module.exports = {
  name: 'ROAST',
  description: 'Retrieve user data and roast the loser',
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