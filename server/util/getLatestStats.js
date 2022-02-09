'use strict';

const getLolPuuid = require('./League/getLolPuuid.js') // this is async function, use async/await when calling
const getLolMatches = require('./League/getLolMatches.js'); // this is also an async function, use async/await when calling
const getLolGameInfo = require('./League/getLolGameInfo.js');
const getTFTPuuid = require('./TFT/getTFTPuuid.js'); // this is async function, use async/await when calling
const getTFTMatches = require('./TFT/getTFTMatches.js'); // this is also an async function, use async/await when calling
const getTFTGameInfo = require('./TFT/getTFTGameInfo.js');

module.exports = async function (requestObject) {
  let { puuid, gameName } = requestObject;

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