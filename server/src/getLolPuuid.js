'use strict';

require('dotenv').config();
const axios = require('axios');

let puuid;

function getLoLPuuid() {
  try {
   const username = 'CaptimusPRIM3';
   const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${process.env.RIOT_API}`;
   axios.get(url).then((value)=>{
      puuid = value.data.puuid;
      console.log(puuid);
   });
  // console.log(Data.data);
  }
  catch (error) {
    console.log(error);
  }
 }

module.exports = {getLoLPuuid};