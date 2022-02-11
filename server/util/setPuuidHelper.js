'use strict';

const axios = require('axios');
require('dotenv').config();

module.exports = async (registerInfo) => {  // will add game to make this function more dynamic
  let { inGameName, tagline } = registerInfo;
  try {
    try {
      const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${inGameName}?api_key=${process.env.RIOT_KEY}`;
      let returnData = await axios.get(url);
      let puuid = returnData.data.puuid;
      return puuid;
    }
    catch {
      try {
        const url = `https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${inGameName}?api_key=${process.env.RIOT_KEY}`;
        let returnData = await axios.get(url);
        let puuid = returnData.data.puuid;
        return puuid;
      }
      catch {
        const url = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${inGameName}/${tagline}?api_key=${process.env.RIOT_KEY}`;
        let returnData = await axios.get(url);
        let puuid = returnData.data.puuid;
        return puuid;
      }
    }
  } catch (e) {
    return null;
  }
};