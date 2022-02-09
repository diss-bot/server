'use strict';

const User = require('../models/userModel.js');

module.exports = async (discordID) => {
  let user = await User.find({ _id: discordID });
  let puuid = user[0].puuid;
  return puuid
}