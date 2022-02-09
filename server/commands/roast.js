'use strict';

const compareUsers = require('../util/compareStats.js');
module.exports = {
  name: 'ROAST',
  description: 'Retrieve user data and roast the loser',
  async execute(message, users) {
    try {
      let winner = await compareUsers(users.user1, users.user2);
      message.channel.send(`${winner}`);
    } catch (e) {
      message.channel.send('Ensure you input the correct name, you dunce');
    }
  },
};