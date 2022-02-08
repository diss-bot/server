'use strict';

require('dotenv').config();
const axios = require('axios');



async function getStats() {
  
  try {
    let userPuuid = 'X1K646iFAmUySLSr39-eeZcnGVtiJpXN3bMcGb8CXiYV18uSXpR0YsxTkhTzd60yZNc9FJtgMCQppA';
    let matchId = 'NA1_4093854064';
    const url = `https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${process.env.RIOT_API}`;
    const Data = await axios.get(url);
  
    const allData = Data.data.info.participants;
    const userStats = allData.find( ({ puuid }) => puuid === userPuuid);
    console.log(userStats);
    const { kills, deaths, assists, win } = userStats;
    console.log(kills, deaths, assists, win);

  }
  catch (error) {
    console.log(error);
  }
}

getStats();

// function parseStats(statsData) {
//   try {
//     const statsSummaries = statsData.map(userPuuid => {
//       return new Game(userPuuid);
//     });
//     return Promise.resolve(statsSummaries);
//   } catch (error) {
//     return Promise.reject(error);
//   }
  
// }
// class Game {
//   constructor(data) {
//     this.kills = data.kills;
//     this.deaths = data.deaths;
//     this.win = data.win;
//   }
// }


module.exports = { getStats };