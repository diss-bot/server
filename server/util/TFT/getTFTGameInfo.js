'use strict';

require('dotenv').config();
const axios = require('axios');

module.exports = async (matchId, puuidValue) => {
  try {
    const url = `https://americas.api.riotgames.com/tft/match/v1/matches/${matchId}?api_key=${process.env.RIOT_KEY}`;
    const Data = await axios.get(url);
    const allData = Data.data.info.participants;

    let userStats = allData.filter(participant => participant.puuid === puuidValue)[0];
    const { placement, players_eliminated } = userStats;
    let win = 0;
    if (placement === 1) {
      win = 1
    };
    return { placement, players_eliminated, win, matchId };
  }
  catch (error) {
    console.log('problem with getting tft game info');
  }
};
