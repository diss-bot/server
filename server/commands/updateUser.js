'use strict'

const User = require('../models/userModel');

module.exports = {
  name: 'REGISTER',
  description: 'Initializes desired game stat tracking',
  async execute(message, updates) {
    try {
      let userToUpdate = await User.find({_id: `Captimus_Prime9557`});
      // message.reply(`${userToUpdate._id} was updated`);
      console.log(`this is stuff`, userToUpdate);
    } catch (e) {
      message.channel.send(`You typed something in wrong. I don't know what but it was probably wrong.`);
      console.log(e);
    }
  }
};


//.schema.obj.games