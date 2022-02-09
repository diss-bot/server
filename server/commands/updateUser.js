'use strict';

const User = require('../models/userModel');
const getLolPuuid = require('../util/League/getLolPuuid.js');

module.exports = {
  name: 'REGISTER',
  description: 'Initializes desired game stat tracking',
  async execute(message, updates) {
    try {

      let { author, game, inGameName, tagline } = updates;
      let userPuuid = await getLolPuuid(inGameName);

      if(game.toLowerCase() === 'lol') {
        let updatedUser = await User.findByIdAndUpdate(author, {
          $set: {
            "games.LeagueOfLegends.summonerName": inGameName, "puuid": userPuuid
          },
        });
        console.log(updatedUser);
      } else if(game.toLowerCase() === 'tft') {
      
        let updatedUser = await User.findByIdAndUpdate(author, {
          $set: {
            "games.TeamFightTactics.summonerName": inGameName, "puuid": userPuuid
          },
        });
        console.log(updatedUser);
      } else if(game.toLowerCase() === 'val') {
      
        let updatedUser = await User.findByIdAndUpdate(author, {
          $set: {
            "games.Valorant.gamerName": inGameName, "games.Valorant.tagline": tagline, "puuid": userPuuid
          },
        });
        console.log(updatedUser);
      } else if(game.toLowerCase() === 'apex') {
      
        let updatedUser = await User.findByIdAndUpdate(author, {
          $set: {
            "games.APEX.summonerName": inGameName, "puuid": userPuuid
          },
        });
        console.log(updatedUser);
        }




    } catch(e) {
      message.channel.send(`You typed something in wrong. I don't know what but it was probably wrong.`);
      console.log(e);
    }
  }
}


 // let updates = {
      //   TeamFightTactics: {
      //     summonerName: '',
      //     placement: 4,
      //     wins: 1,
      //   },
      // };

// $inc: {
        //   "games.TeamFightTactics.win": updates.TeamFightTactics.wins,
        //   "games.TeamFightTactics.placement": updates.TeamFightTactics.placement,
        // },

//.schema.obj.games