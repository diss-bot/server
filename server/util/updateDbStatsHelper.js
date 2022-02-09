'use strict';

const User = require('../models/userModel.js');

module.exports = async function (userStatsObject) {
  let userToUpdate = await User.find({ _id: userStatsObject.discordId });
  console.log('USER TO UPDATE HERE', userToUpdate);
}