'use strict';

require('dotenv').config();
const axios = require('axios');

module.exports = async (matchId, puuidValue) => {
  try {
    const url = `https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${process.env.RIOT_KEY}`;
    const Data = await axios.get(url);
    const allData = Data.data.info.participants;

    let userStats = allData.filter(participant => participant.puuid === puuidValue)[0];
    const { kills, deaths, assists, win } = userStats;
    let kda = (kills + assists) / deaths;
    return { kills, deaths, assists, kda, win, matchId };
  }
  catch (error) {
    console.log('problem with getting game info');
  }
};
