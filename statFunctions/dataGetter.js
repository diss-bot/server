'use strict';

const axios = require('axios');

module.exports = async (message) => {

  let userData = await axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/CaptimusPRIM3?api_key=${process.env.LEAGUE_KEY}`);
  // console.log(userData.data.puuid);
  let userPUUID = userData.data.puuid;
  // console.log(userPUUID);

  let matchHistory = await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${userPUUID}/ids?start=0&count=1&api_key=${process.env.LEAGUE_KEY}`);
  // console.log(matchHistory.data);
  let lastMatchID = matchHistory.data[0];
  // console.log(lastMatchID);

  let matchData = await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${lastMatchID}?api_key=${process.env.LEAGUE_KEY}`);
  console.log(matchData.data);
  await message.reply(matchData.data.metadata.matchId);
}
