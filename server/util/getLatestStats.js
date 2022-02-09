'use strict';

// const getLolPuuid = require('./League/getLolPuuid.js') // this is async function, use async/await when calling
const getLolMatches = require('./League/getLolMatches.js'); // this is also an async function, use async/await when calling
const getLolGameInfo = require('./League/getLolGameInfo.js');
// const getTFTPuuid = require('./TFT/getTFTPuuid.js'); // this is async function, use async/await when calling
const getTFTMatches = require('./TFT/getTFTMatches.js'); // this is also an async function, use async/await when calling
const getTFTGameInfo = require('./TFT/getTFTGameInfo.js');

const User = require('../models/userModel');

// request object needs 2 properties, gameName ( meaning the game you are trying to query ) and discordName ( your unique discord identifier )

module.exports = async function (requestObject) {
  let { gameName, discordName } = requestObject;
  const userFromDB = await User.find({ _id: discordName });
  const { puuid } = userFromDB[0];

  if (gameName.toUpperCase() === 'LOL') {
    let matchId = await getLolMatches(puuid);
    let gameInfo = await getLolGameInfo(matchId, puuid);
    // message.channel.send(`${gameInfo}`);
    return gameInfo;
  }

  if (gameName.toUpperCase() === 'TFT') {
    console.log('in there');  
    let matchId = await getTFTMatches(puuid);
    let gameInfo = await getTFTGameInfo(matchId, puuid);
    // message.channel.send(`${gameInfo}`);
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