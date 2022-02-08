'use strict'

const User = require('../models/userModel');

module.exports = async function (message, body) {
  try {
    let userToUpdate = await User.findOneAndUpdate('CaptimusPRIM3', {
      games: {
        LeagueOfLegends: {
          kills: 1,
        }
      }
    }, { new: true });
    message.reply(`${userToUpdate} was updated`);
  } catch (e) {
    console.log(e);
  }
};