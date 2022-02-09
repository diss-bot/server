'use strict';

const User = require('../models/userModel');
const getPuuid = require('../util/setPuuidHelper.js');

module.exports = {
  name: 'REGISTER',
  description: 'Initializes desired game stat tracking',
  async execute(message, registerInfo) {
    try {

      let userPuuid = await getPuuid(registerInfo);
      let { game, inGameName, tagline } = registerInfo;
      if (!userPuuid) throw new Error('Error getting PUUID');

      if (game.toLowerCase() === 'lol') {
        await User.findByIdAndUpdate(message.msgAuthor, {
          $set: {
            "games.LeagueOfLegends.summonerName": inGameName, "puuid": userPuuid
          },
        });
        message.channel.send(`${message.msgAuthor}'s in game name for League has been updated.. prepare to get dissed.`)
      } else if (game.toLowerCase() === 'tft') {

        await User.findByIdAndUpdate(message.msgAuthor, {
          $set: {
            "games.TeamFightTactics.summonerName": inGameName, "puuid": userPuuid
          },
        });
        message.channel.send(`${message.msgAuthor}'s in game name for TFT has been updated.. prepare to get dissed.`)
      } else if (game.toLowerCase() === 'val') {

        await User.findByIdAndUpdate(message.msgAuthor, {
          $set: {
            "games.Valorant.gamerName": inGameName, "games.Valorant.tagline": tagline, "puuid": userPuuid
          },
        });
        message.channel.send(`${message.msgAuthor}'s in game name for Valorant has been updated.. prepare to get dissed.`)
      } else {
        throw new Error('Incorrect game, try one of the ones I actually support like League, TFT, or Valorant')
      }
      // else if (game.toLowerCase() === 'apex') {

      //   await User.findByIdAndUpdate(message.msgAuthor, {
      //     $set: {
      //       "games.APEX.summonerName": inGameName, "puuid": userPuuid
      //     },
      //   });
      //   // console.log(updatedUser);
      // }




    } catch (e) {
      message.channel.send(`You did something wrong... it might be - ${e.message}`);
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