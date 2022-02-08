'use strict'

const User = require('../models/userModel');

module.exports = {
  name: 'SIGNUP',
  description: 'Creates new user in database',
  async execute(message, body) {
    try {
      let newUser = await User.create({ ...body });
      message.channel.send(`${newUser.name} was created`);
    } catch (e) {
      console.log(e);
    }
  }
}
// module.exports = {
//   name: 'GAME',
//   description: 'Retrieves user data for LeagueOfLegends',
//   async execute(message, inGameName) {
//     try {
//       let puuid = await getLoLPuuid(inGameName);
//       if (!puuid) throw new Error('user not found');
//       // console.log(puuid);
//       let matchId = await getMatches(puuid);
//       // console.log(matchId);
//       let gameInfo = await getGameInfo(matchId, puuid);
//       // console.log(gameInfo);
//       message.channel.send(`${gameInfo}`);
//     } catch (e) {
//       message.channel.send('Ensure you input the correct name, you dunce');
//     }
//   }
// }