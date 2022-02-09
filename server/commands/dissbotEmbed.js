'use strict'

module.exports = {
  name: 'HELP',
  description: 'Provides clean and concise instructions for interacting with diss-bot',
  async execute(message, userInput, Discord) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Wow, you need help? Really?')
      .setColor('#9DF7E5')
      .setThumbnail('https://raw.githubusercontent.com/diss-bot/d-b-md/main/logo/diss-bot_face.png')
      .setDescription('I guess these are the commands you can use to talk to me...')
      .addFields(
        { name: '$diss signup', value: 'Use this so I can start tracking your stats and making fun of you.' },
        { name: '$diss register {game title} {in-game username}', value: 'lol' },
        { name: '$diss game ', value: `I'll tell you how bad you or your friends did in your last match.` },
        { name: '$diss help', value: 'If I really need to explain what this does, you need more help than I can give...' },

      );
    console.log(embed);
    message.channel.send({ embeds: [embed] });
    // } catch (e) {
    //   message.channel.send(`You typed something in wrong.. I don't know what but I didn't like it`);
    // }
  }
};