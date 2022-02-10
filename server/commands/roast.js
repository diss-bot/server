'use strict';

const compareStats = require('../util/compareStats.js');
module.exports = {
  name: 'ROAST',
  description: 'Retrieve user data and roast the loser',
  async execute(message, game, users) {
    try {
      let embed = await compareStats(message, game, users);
      message.channel.send({ embeds: [embed] });
    } catch (e) {
      console.log(e);
      message.channel.send('Ensure you input the correct name, you dunce');
    }
  },
};