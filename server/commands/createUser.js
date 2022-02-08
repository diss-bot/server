'use strict'

const User = require('../models/userModel');

module.exports = {
  name: 'SIGNUP',
  description: 'Creates new user in database',
  async execute(message, body) {
    try {
      let newUser = await User.create({ ...body });
      message.channel.send(`${newUser._id} was created`);
    } catch (e) {
      message.channel.send(`Forgot you made an account? And I forgot to care, get outta here!`);
    }
  }
}