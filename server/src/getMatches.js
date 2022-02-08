'use strict';

require('dotenv').config();
const axios = require('axios');



async function getMatches() {
  
  try {
    let puuid = 'X1K646iFAmUySLSr39-eeZcnGVtiJpXN3bMcGb8CXiYV18uSXpR0YsxTkhTzd60yZNc9FJtgMCQppA';
    const url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=1&api_key=${process.env.RIOT_API}`;
    const Data = await axios.get(url);
    console.log(Data.data);
  }
  catch (error) {
    console.log(error);
  }
}
getMatches();

module.exports = { getMatches };