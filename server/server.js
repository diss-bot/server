'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const User = require('./models/userModel');

mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
})

const createUser = require('./modules/createUser');

createUser({
  name: 'Steve',
  puuid: '65465451',
  games: [1, 2, 3],
})