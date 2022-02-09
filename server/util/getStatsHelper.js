'use strict';

const getLolMatches = require('./League/getLolMatches.js'); // this is also an async function, use async/await when calling
const getLolGameInfo = require('./League/getLolGameInfo.js');
const getTFTMatches = require('./TFT/getTFTMatches.js'); // this is also an async function, use async/await when calling
const getTFTGameInfo = require('./TFT/getTFTGameInfo.js');

const User = require('../models/userModel');

// request object needs 2 properties, gameName ( meaning the game you are trying to query ) and discordName ( your unique discord identifier )

module.exports = async function (requestObject) {
  console.log('in there'); 
  let { gameName, puuid } = requestObject;

  if (gameName.toUpperCase() === 'LOL') {
    let matchId = await getLolMatches(puuid);
    let gameInfo = await getLolGameInfo(matchId, puuid);
    return gameInfo;
  }

  if (gameName.toUpperCase() === 'TFT') {
    console.log('in there');
    let matchId = await getTFTMatches(puuid);
    let gameInfo = await getTFTGameInfo(matchId, puuid);
    return gameInfo;
  }

  // if (gameName === 'Valorant') {

  // }

  // if (gameName === 'Apex') {

  // }
}

// let requestObj = {
//   gameName: 'LoL',
//   user: {
//     inGameName: 'CaptimusPRIM3',
//     puuid: ''
//   },
// }

// helper(requestObj)