'use strict'

let data = require('../../data/embed.json');
let helpData = require('../../data/help.json');

module.exports = {
  name: 'HELP',
  description: 'Provides clean and concise instructions for interacting with diss-bot',
  async execute(message, userInput, Discord) {
    const embed = new Discord.MessageEmbed()
      .setTitle(`${helpData.title}`)
      .setColor(`${data.color}`)
      .setThumbnail(`${data.thumbnail}`)
      .setDescription(`${helpData.description}`)
      .addFields(
        helpData.fields.map(obj => ({ name: `${obj.name}`, value: `${obj.value}` }))

    );
    message.channel.send({ embeds: [embed] });
    // } catch (e) {
    //   message.channel.send(`You typed something in wrong.. I don't know what but I didn't like it`);
    // }
  }
};