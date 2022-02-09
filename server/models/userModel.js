'use strict';
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
  _id: String, // this is just the user's name within Discord
  // name: String,
  puuid: { type: String, default: '' },
  games: {
    LeagueOfLegends: {
      summonerName: { type: String, default: '' },
      kills: { type: Number, default: 0 },
      deaths: { type: Number, default: 0 },
      assists: { type: Number, default: 0 },
      KDA: { type: Number, default: 0 },
      win: { type: Number, default: 0 },
    },
    Valorant: {
      gamerName: { type: String, default: '' },
      tagline: { type: String, default: '' },
      kills: { type: Number, default: 0 },
      deaths: { type: Number, default: 0 },
      assists: { type: Number, default: 0 },
      KDA: { type: Number, default: 0 },
      win: { type: Number, default: 0 },
    },
    TeamFightTactics: {
      summonerName: { type: String, default: '' },
      eliminations: { type: Number, default: 0 },
      placement: { type: Number, default: 0 },
      win: { type: Number, default: 0 },
    },
    Apex: {
      summonerName: { type: String, default: '' },
      kills: { type: Number, default: 0 },
      deaths: { type: Number, default: 0 },
      assists: { type: Number, default: 0 },
      KDA: { type: Number, default: 0 },
      placement: { type: Number, default: 0 },
      win: { type: Number, default: 0 },
    }
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User;