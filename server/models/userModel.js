'use strict';
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
  _id: String, // this is just the user's name within Discord
  name: String,
  puuid: { type: String, default: '' },
  games: {
    LeagueOfLegends: {
      lolSummonerName: { type: String, default: '' },
      lolLatestMatchId: { type: String, default: '' },
      lolMatchesPlayed: { type: Number, default: 0 },
      lolK: { type: Number, default: 0 },
      lolD: { type: Number, default: 0 },
      lolA: { type: Number, default: 0 },
      lolKDA: { type: Number, default: 0 },
      lolWin: { type: Number, default: 0 },
    },
    Valorant: {
      gamerName: { type: String, default: '' },
      valLatestMatchId: { type: String, default: '' },
      valMatchesPlayed: { type: Number, default: 0 },
      tagline: { type: String, default: '' },
      valK: { type: Number, default: 0 },
      valD: { type: Number, default: 0 },
      valA: { type: Number, default: 0 },
      valKDA: { type: Number, default: 0 },
      valWin: { type: Number, default: 0 },
    },
    TeamFightTactics: {
      tftSummonerName: { type: String, default: '' },
      tftLatestMatchId: { type: String, default: '' },
      tftMatchesPlayed: { type: Number, default: 0 },
      tftEliminations: { type: Number, default: 0 },
      tftPlacements: { type: Number, default: 0 },
      tftAvgPlacement: { type: Number, default: 0 },
      tftWin: { type: Number, default: 0 },
    }
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User;