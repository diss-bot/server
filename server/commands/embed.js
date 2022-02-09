'use strict'



module.exports = {
  name: 'HELP',
  description: 'Provides clean and concise instructions for interacting with diss-bot',
  async execute(message, userInput, Discord) {
    const embed = new Discord.MessageEmbed()
      .setTitle(data.title)
      .setColor(data.color)
      .setThumbnail(data.color)
      .setDescription(data.description)
      .addFields(
        data.fields.map(obj => ({ name: obj.name, value: obj.value }))

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