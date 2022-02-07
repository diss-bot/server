'use strict'

const User = require('../models/userModel');

module.exports = async function (body) {
  try {
    const newUser = await User.create({...body});
    return `${newUser.name} has been created`;
  } catch (e) {
    console.log(e);
  }
};