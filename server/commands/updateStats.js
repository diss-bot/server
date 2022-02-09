'use strict';

const User = require('../models/userModel');
const statGetter = require('../util/getLatestStats.js');

module.exports = {
  name: 'STATS',
  description: 'Gets latest stats from last game',
  async execute(message, game) {
    const userFromDB = await User.find({ _id: 'Captimus_Prime#9557' });
    const { puuid } = userFromDB;
    let requestObj = {
      gameName: game,
      puuid: puuid,
    }
    let data = await statGetter(requestObj)
    console.log(data);
    // try {
    //   await User.findByIdAndUpdate(`Captimus_Prime#9557`, {
    //     $inc: {
    //       "games.TeamFightTactics.win": updates.TeamFightTactics.wins,
    //     }
    //   });
    //   console.log(updatedUser);
    // } catch (e) {
    //   message.channel.send(`You typed something in wrong. I don't know what but it was probably wrong.`);
    //   console.log(e);
    // }
  },
};