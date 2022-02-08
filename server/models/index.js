'use strict';

const userModel = require('./user.js');
const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory;';

const sequelize = new Sequelize(DATABASE_URL);

const user = userModel(sequelize, DataTypes);

module.exports = user;