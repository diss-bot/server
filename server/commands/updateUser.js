'use strict'

const User = require('../models/userModel');

module.exports = {
  name: 'REGISTER',
  description: 'Initializes desired game stat tracking',
  async execute(message, updates) {
    try {
      let userToUpdate = await User.findByIdAndUpdate(updates.author, {
        $set: {
          games: {
            LeagueOfLegends: {
              summonerName: updates.inGameName,
            }
          }
        }
      });
      message.reply(`${userToUpdate._id} was updated`);
    } catch (e) {
      message.channel.send(`You typed something in wrong.. I don't know what but I didn't like it`);
    }
  }
};
