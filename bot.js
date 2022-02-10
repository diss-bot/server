'use strict';
require('dotenv').config();

// imports discord.js library and sets bot intents to be able to read / write messages and interact with user presence
const Discord = require('discord.js');
const dissBotIntents = new Discord.Intents();
dissBotIntents.add('GUILDS', 'GUILD_MESSAGES', 'GUILD_PRESENCES');
const client = new Discord.Client({ intents: dissBotIntents });

// connects to MongoDB containing all the Users' data
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

// creates Discord Collection to hold all commands for diss-bot
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./server/commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./server/commands/${file}`);
  client.commands.set(command.name, command);
}
console.log(client.commands);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const prefix = '$diss';

client.on('messageCreate', async (message) => {
  message.msgAuthor = message.author.id;
  // breaks message content to parse what the user is telling the bot to do
  const messageContentArray = message.content.split(' ');
  // returns if the bot is making the command to avoid infinite loops, or if the message does not start with the correct prefix '$diss'
  if (!message.content.startsWith(prefix) || message.author.bot) return; 
  // the word directly after the prefix '$diss' becomes the command
  const command = messageContentArray.splice(0, 2)[1].toUpperCase();
  // and the words following that are used as user input
  const userInput = messageContentArray;

  if (!command) await message.reply('Please use one of the following commands: roast, meme, game');

  else if (command === 'SIGNUP') {
    client.commands.get('SIGNUP').execute(message);
  }

  else if (command === 'HELP') {
    client.commands.get('HELP').execute(message, userInput, Discord);
  }

  else if (command === 'TEST') {
    client.commands.get('TEST').execute(message, userInput, Discord);
  }

  else if (command === 'ROAST') {
    let game = userInput[0];
    let userToRoast = userInput[1].slice(3, userInput[1].length - 1);
    client.commands.get('ROAST').execute(message, game, userToRoast);
  }

  else if (command === 'REGISTER') {
    let registerInfo = {
      game: userInput[0],
      inGameName: userInput[1],
      tagline: userInput[2], // used to register for puuid using Valorant API
    };
    client.commands.get('REGISTER').execute(message, registerInfo);
  }

  else if (command === 'VS') {
    let game = userInput[0];
    let userOne, userTwo, userThree;
    if (userInput[1]) userOne = userInput[1].slice(3, userInput[1].length - 1);
    if (userInput[2]) userTwo = userInput[2].slice(3, userInput[1].length - 1);
    if (userInput[3]) userThree = userInput[3].slice(3, userInput[1].length - 1);
    let users = { userOne, userTwo, userThree };
    client.commands.get('VS').execute(message, game, users);
  }

  else if (command === 'GAME') {
    client.commands.get('GAME').execute(message, userInput[0]);
  }
});

client.login(process.env.DIS_TOKEN);