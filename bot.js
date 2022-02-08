'use strict';
require('dotenv').config();

const { Client, Intents } = require('discord.js');
const dissBotIntents = new Intents();
dissBotIntents.add('GUILDS', 'GUILD_MESSAGES', 'GUILD_PRESENCES');
const client = new Client({ intents: dissBotIntents });

const server = require('./server/server.js');
const memer = require('./messageFunctions/memeMaker.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('presenceUpdate', (oldPres, newPres) => {
  // console.log(newPres);
});

const prefix = '$diss';

client.on('messageCreate', async (message) => {
  const splitMess = message.content.split(' ');
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  console.log(message);
  const command = splitMess[1].toLowerCase();

    // console.log(command);
    if (!command) {
      await message.reply('Please use one of the following commands: roast, meme, game');
    }

    else if (command === 'signup') {
      let newUser = {
        name: `${message.author.username}${message.author.discriminator}`,
      }
      await server.createUser(message, newUser);
    }

    else if (command === 'LoL') {
      //   let updateuser = {
      //       ,
      // }
      await server.updateuser(message, updateUser);
    }

    else if (command === 'meme') {
      await memer(message);
    }

    else if (command === 'game') {
      await dataGetter(message);
    }
});

client.login(process.env.DIS_TOKEN);