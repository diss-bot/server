'use strict'

const User = require('../models/userModel');

module.exports = async function (message, body) {
  try {
    let newUser = await User.create({ ...body });
    message.reply(`${newUser.name} was created`);
  } catch (e) {
    console.log(e);
  }
};