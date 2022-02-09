'use strict';

require('dotenv').config();
const axios = require('axios');

module.exports = async (matchId, puuidValue) => {
  try {
    const url = `https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${process.env.RIOT_KEY}`;
    const Data = await axios.get(url);
    console.log(Data.data);
    console.log(Date.now());
    const allData = Data.data.info.participants;

    let userStats = [];

    if (typeof (puuidValue) === 'object') {
      Object.values(puuidValue).forEach(entry => {
        userStats.push(allData.filter(participant => participant.puuid === entry)[0]);
        const { kills, deaths, assists, win } = userStats.pop();
        return [kills, deaths, assists, win];
      });
    } else {
      // console.log(allData);
      userStats.push(allData.filter(participant => participant.puuid === puuidValue)[0]);
      // console.log(userStats[0]);
      const { kills, deaths, assists, win } = userStats[0];
      let kda = (kills + assists) / deaths;
      return { kills, deaths, assists, kda, win, matchId };
    }
  }
  catch (error) {
    console.log('problem with getting game info');
  }
};
