'use strict'

const User = require('../models/userModel');
const prompter = require('discordjs-prompter');
const Discord = require('discord.js');

// .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

module.exports = async function (msg, body) {
  const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Some title')
    // .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
    .setDescription('Some description here')
    .addFields(
      { name: 'Regular field title', value: 'Some value here' },
      { name: '\u200B', value: '\u200B' },
      { name: 'Inline field title', value: 'Some value here', inline: true },
      { name: 'Inline field title', value: 'Some value here', inline: true },
    )
    .addField('Inline field title', 'Some value here', true)
    .setTimestamp()
  console.log(exampleEmbed);
  await msg.reply(exampleEmbed);

  // try {
  //       User.create({ name: response.first() })
  //         .then(() => {
  //           return `${newUser.name} has been created`
  //         });
  //     } catch (e) {
  //       console.log(e);
  //     }
};