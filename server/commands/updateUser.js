'use strict';

const User = require('../models/userModel');

module.exports = {
  name: 'REGISTER',
  description: 'Initializes desired game stat tracking',
  async execute(message, updates) {
    try {
      // let userToUpdate = await User.find({ _id: `Captimus_Prime#9557` });
      // let { games } = userToUpdate[0];
      // // let { gameName } = updates;
      // let gameName = 'TeamFightTactics';
      // let { TeamFightTactics } = games;

      let updates = {
        TeamFightTactics: {
          summonerName: '',
          placement: 4,
          wins: 1,
        }
      }
      let updatedUser = await User.findByIdAndUpdate(`Captimus_Prime#9557`, {
        $inc: {
          "games.TeamFightTactics.win": updates.TeamFightTactics.wins,
        }
      });

      console.log(updatedUser);
    } catch (e) {
      message.channel.send(`You typed something in wrong. I don't know what but it was probably wrong.`);
      console.log(e);
    }
  },
};

function helper(gameName) {
  let values = [];
  Object.entries(gameName).forEach(stat => {
    values.push(stat);
  })
  console.log(values);
}

//.schema.obj.games