'use strict'

let data = require('../../public/embed.json');

module.exports = {
  name: 'TEST',
  description: 'testing',
  async execute(message, userInput, Discord) {
    const embed = new Discord.MessageEmbed()
    .setTitle(`${data.title}`)
    .setColor(`${data.color}`)
    .setThumbnail(`${data.thumbnail}`)
      .setDescription('a description')
      .addFields(
        helpData.fields.map(obj => ({ name: `${Object.keys(obj)}`, value: `${Object.values(obj)}` }))

        );
      console.log(embed);
    message.channel.send({ embeds: [embed] });
    // } catch (e) {
    //   message.channel.send(`You typed something in wrong.. I don't know what but I didn't like it`);
    // }
  }
};

// Object.keys(objectName)
// Object.values(objectName)