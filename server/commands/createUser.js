'use strict';

const User = require('../models/userModel');

module.exports = {
  name: 'SIGNUP',
  description: 'Creates new user in database',
  async execute(message) {
    try {
      console.log(message);
      let newUser = await User.create({ _id: message.msgAuthor, name: message.author.username });
      message.channel.send(`${newUser.name} was created`);
    } catch (e) {
      message.channel.send(`Forgot you made an account? And I forgot to care, get outta here!`);
    }
  },
};