'use strict';

require('dotenv').config();
const axios = require('axios');

let puuid;

function getPuuid() {
  try {
    const username = 'dariogoat';
    const tagline = 'dgoat';
    const url = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${username}/${tagline}?api_key=${process.env.RIOT_API}`;
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
getPuuid();




//module.exports = {getPuuid};