'use strict';

const compareUsers = require('../../statFunctions/compareStats.js');
module.exports = {
  name: 'ROAST',
  description: 'Retrieve user data and roast the loser',
  async execute(message, opponentsName) {
    try {
      let winner = compareUsers(message.author.username, opponentsName);
      message.channel.send(`${winner}`);
    } catch (e) {
      message.channel.send('Ensure you input the correct name, you dunce');
    }
  },
};