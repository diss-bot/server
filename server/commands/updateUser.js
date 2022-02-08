'use strict'

const User = require('../models/userModel');

module.exports = {
  name: 'LOL',
  description: 'Initializes LeagueOfLegends stat tracking',
  async execute(message, body) {
    try {
      let userToUpdate = await User.findByIdAndUpdate('Captimus_Prime9557', {
        $set: {
          games: {
            LeagueOfLegends: {
              kills: 10,
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
