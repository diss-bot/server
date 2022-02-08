'use strict';

require('dotenv').config();
const axios = require('axios');

module.exports = async (matchId, puuid) => {
  try {
    const url = `https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${process.env.RIOT_KEY}`;
    const Data = await axios.get(url);

    const allData = Data.data.info.participants;
    const userStats = allData.filter(participant => participant.puuid === puuid);

    // this can be used to get numerous users' data from the same game
    // const userStats = allData.filter(participant => participant.puuid === puuid || participant.puuid === 'zKHrb2YkSPJHIzjC_3pLefOQjTSNlGZ7blOmCAstwAy7BOkrMRKKkQMHbRmoHImNSqbKZ7xRdJM4Hw');

    const { kills, deaths, assists, win } = userStats[0];
    return [kills, deaths, assists, win];
  }
  catch (error) {
    console.log(error);
  }
}