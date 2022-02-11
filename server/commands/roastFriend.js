'use strict';

const Discord = require('discord.js');
const getStatsHelper = require('../util/getStatsHelper.js');
const getUserDbHelper = require('../util/getUserDbHelper.js');

let embedData = require('../../public/embed.json');
let roasts = require('../../public/roast.js');
let embedMaker = require('../../public/embedMaker.js');

module.exports = {
  name: 'ROAST',
  description: 'Gets latest stats for diss-bot users',
  async execute(message, game, userToRoast) {
    if (game.toUpperCase() === 'LOL') {
      let user = await getUserDbHelper(userToRoast);
      if (!user) {
        message.channel.send({ embeds: [embedMaker(`I couldn't find stats on this scrub, that's your bad.`)] })
        return;
      }
      let requestObj = {
        gameName: game,
        puuid: user.puuid,
      }
      let data = await getStatsHelper(requestObj)
      if (!data) {
        message.channel.send({ embeds: [embedMaker(`I couldn't find stats on this scrub, that's your bad.`)] })
        return;
      }
      let { kills, deaths, assists, kda, win } = data;

      let roast = (kda, win) => {
        if (kda < 1) {
          return roasts(`leagueRoasts`);
        } else if (win === false) {
          return roasts(`teamLoss`);
        } else {
          return roasts(`wins`);
        };
      }

      const embed = new Discord.MessageEmbed()
        .setTitle("🔥   Fire up the grill   🔥")
        .setColor(`${embedData.color}`)
        .setThumbnail(`${embedData.thumbnail}`)
        .addFields(
          { name: `Kills:`, value: `${kills}` },
          { name: `Deaths:`, value: `${deaths}` },
          { name: `Assists:`, value: `${assists}` },
          { name: `KDA:`, value: `${kda}` },
          { name: `Win:`, value: `${win}` },
          { name: `Roast:`, value: `${roast(kda, win)}` },
        );
      message.channel.send({ embeds: [embed] });
    }
    // else if (game.toUpperCase() === 'TFT') {
    //   console.log(data);
    //   let {placement, players_eliminated, win} = data;
    //   message.channel.send(`${placement} ${players_eliminated} ${win}`);
    // }
    else {
      message.channel.send({ embeds: [embedMaker('No dice, you probably entered something wrong.')] })
    }
  },
};