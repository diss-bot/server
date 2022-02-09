'use strict';

const User = require('../models/userModel');

module.exports = {
  name: 'SIGNUP',
  description: 'Creates new user in database',
  async execute(message) {
    try {
      let newUser = await User.create({ _id: message.msgAuthor });
      message.channel.send(`${newUser._id} was created`);
    } catch (e) {
      message.channel.send(`Forgot you made an account? And I forgot to care, get outta here!`);
    }
  },
};