'use strict';
require('dotenv').config();

// imports discord.js library and sets bot intents to be able to read / write messages and interact with user presence
const Discord = require('discord.js');
const dissBotIntents = new Discord.Intents();
dissBotIntents.add('GUILDS', 'GUILD_MESSAGES', 'GUILD_PRESENCES');
const client = new Discord.Client({ intents: dissBotIntents });

// use this to create and use an embed
const embedMaker = require('./data/embedMaker.js');

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

const prefix = '$diss ';

client.on('messageCreate', async (message) => {
  message.msgAuthor = message.author.id;
  if (message.content === prefix.trim()) {
    message.channel.send({ embeds: [embedMaker(`That's my name, don't wear it out...`)] })
  }
  // breaks message content to parse what the user is telling the bot to do
  const messageContentArray = message.content.split(' ');
  // returns if the bot is making the command to avoid infinite loops, or if the message does not start with the correct prefix '$diss'
  if (!message.content.startsWith(prefix) || message.author.bot) return; 
  // the word directly after the prefix '$diss' becomes the command
  if (messageContentArray.length < 2) {
    let embed = embedMaker(`You're too lazy to type in a command? Come on, help me out here...`);
    message.channel.send({ embeds: [embed] });
    return;
  }
  const command = messageContentArray.splice(0, 2)[1].toUpperCase();
  // and the words following that are used as user input
  const userInput = messageContentArray;

  if (command === 'HELP') {
    client.commands.get('HELP').execute(message, userInput, Discord);
  }

  else if (command === 'VS') {
    let game = userInput[0];
    let userOne, userTwo, userThree;
    if (userInput[4]) {
      let embed = embedMaker(`Woah now, I know you don't have THAT many friends, try running it with just 3 and see if that works.`)
      message.channel.send({ embeds: [embed] });
      return;
    }
    if (userInput[1]) userOne = userInput[1].slice(3, userInput[1].length - 1);
    if (userInput[2]) userTwo = userInput[2].slice(3, userInput[1].length - 1);
    if (userInput[3]) userThree = userInput[3].slice(3, userInput[1].length - 1);
    let users = { userOne, userTwo, userThree };
    client.commands.get('VS').execute(message, game, users);
  }

  else if (command === 'ROAST') {
    let game = userInput[0];
    if (!game || !userInput[1]) {
      let embed = embedMaker(`What game and name, weirdo... try entering "$diss roast lol < @discord nickname >"`)
      message.channel.send({ embeds: [embed] });
      return;
    }
    let userToRoast = userInput[1].slice(3, userInput[1].length - 1);
    client.commands.get('ROAST').execute(message, game, userToRoast);
  }

  else if (command === 'SIGNUP') {
    client.commands.get('SIGNUP').execute(message);
  }

  else if (command === 'REGISTER') {
    let userName = nameParser(userInput);
    let parsedTagline = taglineParser(userInput);
    let registerInfo = {
      game: userInput[0],
      inGameName: userName,
      tagline: parsedTagline, // used to register for puuid using Valorant API
    };
    client.commands.get('REGISTER').execute(message, registerInfo);
  }

  else {
    let embed = embedMaker(`You didn't even try to use a correct command did you?`);
    message.channel.send({ embeds: [embed] })
  }
});

function nameParser(inputArray) {
  let userName = inputArray.find(elm => elm.startsWith('<') && elm.endsWith('>')) ||
    inputArray.slice(inputArray.indexOf(inputArray.find(elm => elm.startsWith('<'))), inputArray.indexOf(inputArray.find(elm => elm.endsWith('>'))) + 1).join(' ');
  return userName.slice(1, userName.length - 1);
}

function taglineParser(inputArray) {
  let tagline = inputArray.find(elm => elm.startsWith('[') && elm.endsWith(']')) ||
    inputArray.slice(inputArray.indexOf(inputArray.find(elm => elm.startsWith('['))), inputArray.indexOf(inputArray.find(elm => elm.endsWith(']'))) + 1).join(' ');
  return tagline.slice(1, tagline.length - 1);
}

client.login(process.env.DIS_TOKEN);