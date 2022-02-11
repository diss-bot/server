'use strict';

const Discord = require('discord.js');
const getStatsHelper = require('../util/getStatsHelper.js');
const getUserDbHelper = require('../util/getUserDbHelper.js');

let embedData = require('../../data/embed.json');
let roasts = require('../../data/roast.js');
let embedMaker = require('../../data/embedMaker.js');

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

      let roastLeague = (kda, win) => {
        if (kda < 2) {
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
          { name: `Roast:`, value: `${roastLeague(kda, win)}` },
        );
      message.channel.send({ embeds: [embed] });
    } else if (game.toUpperCase() === 'TFT') {
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
      let { placement, players_eliminated, win } = data;

      let roastTFT = (placement, players_eliminated, win) => {
        if (win) {
          return roasts(`wins`);
        } else if (placement < 4 && players_eliminated > 1) {
          return roasts(`wins`);
        } else {
          return roasts(`tftRoasts`);
        }
      }

      const embed = new Discord.MessageEmbed()
        .setTitle("🔥   Fire up the grill   🔥")
        .setColor(`${embedData.color}`)
        .setThumbnail(`${embedData.thumbnail}`)
        .addFields(
          { name: `Win:`, value: `${win}` },
          { name: `Placement:`, value: `${placement}` },
          { name: `Players Eliminated:`, value: `${players_eliminated}` },
          { name: `Roast:`, value: `${roastTFT(placement, players_eliminated, win)}` },
        );
      message.channel.send({ embeds: [embed] });
    } else {
      message.channel.send({ embeds: [embedMaker('No dice, you probably entered something wrong.')] })
    }
  },
};