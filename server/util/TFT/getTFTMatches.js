'use strict';

const axios = require('axios');
require('dotenv').config();
module.exports = async (puuid) => {
  try {
    const url = `https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids?count=1&api_key=${process.env.RIOT_KEY}`;
    const Data = await axios.get(url);
    return Data.data[0];
  }
  catch (error) {
    console.log('problem with get match', error.message);
  }
};