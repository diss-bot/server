'use strict'
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
  name: String,
  puuid: { type: String, default: '' },
  games: { type: Array, default: [] },
})

const User = mongoose.model('User', userSchema);

module.exports = User;