'use strict';

const Discord = require('discord.js');

module.exports = (errorMsg) => {
  let embed = new Discord.MessageEmbed()
    .setColor('#DD403A')
    .setTitle('🔺 WARNING: You Are A Dunce 🔺')
    .setThumbnail('https://raw.githubusercontent.com/diss-bot/d-b-md/main/logo/diss-bot_face_error.jpg')
    .setFields(
      { name: 'ErrorMessage', value: errorMsg, inline: true }
    )
  return embed;
}