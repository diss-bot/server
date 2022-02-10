'use strict';

const Discord = require('discord.js');
const getStatsHelper = require('../util/getStatsHelper.js');
const getUserDbHelper = require('../util/getUserDbHelper.js');

let embedData = require('../../public/embed.json');
let roasts = require('../../public/roast.js');
let numGen = require('../util/numGen');

module.exports = {
  name: 'ROAST',
  description: 'Gets latest stats for diss-bot users',
  async execute(message, game, userToRoast) {
    let user = await getUserDbHelper(userToRoast);
    let requestObj = {
      gameName: game,
      puuid: user.puuid,
    }
    let data = await getStatsHelper(requestObj)
    if (game.toUpperCase() === 'LOL') {
      let {kills, deaths, assists, kda, win} = data;
      // message.channel.send(`${kills} ${deaths} ${assists} ${kda} ${win}`);
      
      if (kda < 1) {
        let roast = roasts(`leagueRoasts`)
      } else if (win === false) {
        let roast = roasts(`teamLoss`)
      } else {
        let roast = roasts(`wins`)
      };

      const embed = new Discord.MessageEmbed()
      .setTitle(title)
      .setColor(`${embedData.color}`)
      .setThumbnail(`${embedData.thumbnail}`)
      .setDescription(`Let's see who played better.`)
      .addFields(
        { name: `Kills:`, value: `${kills}` },
        { name: `Deaths:`, value: `${deaths}` },
        { name: `Assists:`, value: `${assists}` },
        { name: `KDA:`, value: `${kda}` },
        { name: `Win:`, value: `${win}` },
        { name: `Response`, value: `${roast}` },
      );
    return embed;
    }
    else if (game.toUpperCase() === 'TFT') {
      console.log(data);
      let {placement, players_eliminated, win} = data;
      message.channel.send(`${placement} ${players_eliminated} ${win}`);
    }
    else {
      message.channel.send(`You're trying to roast somebody but you typed it in wrong? Come on you scrub.`)
    }
  },
};