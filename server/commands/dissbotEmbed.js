'use strict'

let data = require('../../public/help.json');
let helpData = require('../../public/help.json');

module.exports = {
  name: 'HELP',
  description: 'Provides clean and concise instructions for interacting with diss-bot',
  async execute(message, userInput, Discord) {
    const embed = new Discord.MessageEmbed()
      .setTitle(data.title)
      .setColor(data.color)
      .setThumbnail(data.color)
      .setDescription(helpData.description)
      .addFields(
        helpData.fields.map(obj => ({ name: obj.name, value: obj.value }))
        // { name: data.fields[0].name, value: data.fields[0].value },
        // { name: data.fields[1].name, value: data.fields[1].value },
        // { name: data.fields[2].name, value: data.fields[2].value },
        // { name: data.fields[3].name, value: data.fields[3].value },

      );
    console.log(embed);
    message.channel.send({ embeds: [embed] });
    // } catch (e) {
    //   message.channel.send(`You typed something in wrong.. I don't know what but I didn't like it`);
    // }
  }
};