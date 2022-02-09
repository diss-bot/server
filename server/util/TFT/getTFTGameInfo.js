'use strict';

require('dotenv').config();
const axios = require('axios');

module.exports = async (matchId, puuidValue) => {
  try {
    const url = `https://americas.api.riotgames.com/tft/match/v1/matches/${matchId}?api_key=${process.env.RIOT_KEY}`;
    const Data = await axios.get(url);

    const allData = Data.data.info.participants;

    let userStats = [];

    if (typeof (puuidValue) === 'object') {
      Object.values(puuidValue).forEach(entry => {
        userStats.push(allData.filter(participant => participant.puuid === entry)[0]);
        const { kills, deaths, assists, win } = userStats.pop();
        return [kills, deaths, assists, win];
      });
    } else {
      userStats.push(allData.filter(participant => participant.puuid === puuidValue)[0]);
      const { placement, players_eliminated } = userStats[0];
      let win = 0;
      if (placement === 1) {
        win = 1
      };
      return [placement, players_eliminated, win];
    }
  }
  catch (error) {
    console.log('problem with getting game info');
  }
};
