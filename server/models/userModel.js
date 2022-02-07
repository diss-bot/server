'use strict'
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
  name: String,
  puuid: String,
  games: Array,
})

const User = mongoose.model('User', userSchema);

module.exports = User;