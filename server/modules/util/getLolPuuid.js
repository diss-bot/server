'use strict';

const axios = require('axios');
require('dotenv').config();

module.exports = async (inGameName) => {  // will add game to make this function more dynamic
  try {
    const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${inGameName}?api_key=${process.env.RIOT_KEY}`;
    let value = await axios.get(url);
    let puuid = value.data.puuid;
    return puuid;
  }
  catch (error) {
    console.log(error);
  }
};