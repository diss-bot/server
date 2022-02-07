'use strict';
require('dotenv').config();

const { Client, Intents, Guild } = require('discord.js');
const dissBotIntents = new Intents();

dissBotIntents.add('GUILDS', 'GUILD_MESSAGES', 'GUILD_PRESENCES');
const client = new Client({ intents: dissBotIntents });

const server = require('./server/server.js');
const roaster = require('./messageFunctions/roaster.js');
const memer = require('./messageFunctions/memeMaker.js');
const dataGetter = require('./statFunctions/dataGetter.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// message is going to be the bread and butter, we need to break it down into different files / functions in order to make it easy to manage

client.on('presenceUpdate', (oldPres, newPres) => {
  console.log(newPres);
});

client.on('messageCreate', async (message) => {
  const splitMess = message.content.split(' ');
  // console.log(message);
  // console.log(splitMess);
  // console.log(message.author.username + message.author.discriminator);
  if (splitMess[0] === '$diss') {
    const command = splitMess[1];

    // console.log(command);
    if (!command) {
      await message.reply('Please use one of the following commands: roast, meme, game');
    }

    else if (command === 'signup') {
      await server.createUser(message);
    }

    else if (command === 'meme') {
      await memer(message);
    }

    else if (command === 'game') {
      await dataGetter(message);
    }
  }
});

client.login(process.env.DIS_TOKEN);