'use strict';

const getLolMatches = require('./League/getLolMatches.js'); // this is also an async function, use async/await when calling
const getLolGameInfo = require('./League/getLolGameInfo.js');
const getTFTMatches = require('./TFT/getTFTMatches.js'); // this is also an async function, use async/await when calling
const getTFTGameInfo = require('./TFT/getTFTGameInfo.js');

const User = require('../models/userModel');

// request object needs 2 properties, gameName ( meaning the game you are trying to query ) and discordName ( your unique discord identifier )

module.exports = async function (requestObject) {
  let { gameName, puuid } = requestObject;

  if (gameName.toUpperCase() === 'LOL') {
    let matchId = await getLolMatches(puuid);
    let gameInfo = await getLolGameInfo(matchId, puuid);
    console.log(gameInfo);
    gameInfo.decider = (gameInfo.kda + (gameInfo.win ? 1 : 0));
    return gameInfo;
  }

  if (gameName.toUpperCase() === 'TFT') {
    let matchId = await getTFTMatches(puuid);
    let gameInfo = await getTFTGameInfo(matchId, puuid);
    gameInfo.decider = (Math.abs(gameInfo.placement - 8) + gameInfo.players_eliminated);
    return gameInfo;
  }

  // if (gameName === 'Valorant') {

  // }

  // if (gameName === 'Apex') {

  // }
}