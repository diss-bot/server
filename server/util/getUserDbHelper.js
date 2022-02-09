'use strict';

const User = require('../models/userModel.js');

module.exports = async (discordID) => {
  let user = await User.find({ _id: discordID });
  return user[0];
}