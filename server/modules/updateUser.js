'use strict'

const User = require('../models/userModel');

module.exports = async function (message, body) {
  try {
    let userToUpdate = await User.findOneAndUpdate('CaptimusPRIM3', {
      $set: {
        games: {
        LeagueOfLegends: {
          kills: 1,
          }
        }
      }
    });
    console.log(userToUpdate);
    message.reply(`${userToUpdate.name} was updated`);
  } catch (e) {
    console.log(e);
  }
};