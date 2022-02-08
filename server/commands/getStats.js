'use strict';

const getLoLPuuid = require('../modules/util/getLolPuuid.js'); // this is async function, use async/await when calling
const getMatches = require('../modules/util/getMatches.js'); // this is also an async function, use async/await when calling
const getGameInfo = require('../modules/util/getGameInfo.js');

module.exports = {
  name: 'GAME',
  description: 'Retrieves user data for LeagueOfLegends',
  async execute(message, inGameName) {
    try {
      let puuid = await getLoLPuuid(inGameName);
      if (!puuid) throw new Error('user not found');
      // console.log(puuid);
      let matchId = await getMatches(puuid);
      // console.log(matchId);
      let gameInfo = await getGameInfo(matchId, puuid);
      // console.log(gameInfo);
      message.channel.send(`${gameInfo}`);
      console.log(gameInfo);
    } catch (e) {
      message.channel.send('Ensure you input the correct name, you dunce!');
    }
  },
};