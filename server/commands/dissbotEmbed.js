'use strict'

module.exports = {
  name: 'HELP',
  description: 'Provides clean and concise instructions for interacting with diss-bot',
  async execute(message, userInput, Discord) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Embed!')
      .setColor('#304281')
      .setDescription('Embed')
      .addFields(
        { name: 'Rule 1', value: 'cool' },
        { name: 'Rule 2', value: 'superCool' }
      )
    console.log(embed);
    message.channel.send({ embeds: [embed] });
    // } catch (e) {
    //   message.channel.send(`You typed something in wrong.. I don't know what but I didn't like it`);
    // }
  }
};