'use strict';

const getLoLPuuid = require('./util/getLolPuuid.js'); // this is async function, use async/await when calling
const getMatches = require('./util/getMatches.js'); // this is also an async function, use async/await when calling
const getGameInfo = require('./util/getGameInfo.js');

async function doingThings(inGameName) {
  let puuid = await getLoLPuuid(inGameName);
  console.log(puuid);
  let matchId = await getMatches(puuid);
  console.log(matchId);
  let gameInfo = await getGameInfo(matchId, puuid);
  console.log(gameInfo);
  return gameInfo;
};

module.exports = doingThings;