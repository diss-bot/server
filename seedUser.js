'use strict';

const mongoose = require('mongoose');
const User = require('.server/src/userSchema');

async function seed() {
  mongoose.connect(process.env.MONGO_DB);

  await User.create ({
    name: 'CaptimusPRIM3',
    puuid: 'X1K646iFAmUySLSr39-eeZcnGVtiJpXN3bMcGb8CXiYV18uSXpR0YsxTkhTzd60yZNc9FJtgMCQppA',
  });

  mongoose.disconnect();

}

seed();