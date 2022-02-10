'use strict';

const axios = require('axios');
const User = require('../server/models/userModel.js');

const compareUsers = require('../server/util/compareUsers.js');
const getStatsHelper = require('../server/util/getStatsHelper.js');
const getUserDbHelper = require('../server/util/getUserDbHelper.js');
const setPuuidHelper = require('../server/util/setPuuidHelper.js');
const updateDbStatsHelper = require('../server/util/updateDbStatsHelper.js');

jest.mock('axios');
jest.mock('../server/models/userModel.js');
// jest.mock('discord.js', () => {
//   return {
//     MessageEmbed: jest.fn().mockImplementation(() => {
//       return {
//         setTitle: jest.fn(),
//         setColor: jest.fn(),
//         setThumbnail: jest.fn(),
//         setDescriptions: jest.fn(),
//         addFields: jest.fn()
//       }
//     })
//   }
// });

describe(`Will test bot's ability to get latest User stats and update MongoDB`, () => {

  it('Calls User.find when using getUserDbHelper function, and returns a user instance', async () => {
    User.find.mockResolvedValueOnce([{
      games: {
        LeagueOfLegends: {
          lolSummonerName: 'coolguy420',
          lolLatestMatchId: 'NA1_4212850451',
          lolMatchesPlayed: 16,
          lolK: 144,
          lolD: 176,
          lolA: 96,
          lolKDA: 1.3636363636363635,
          lolWin: 16
        },
        Valorant: {
          gamerName: '',
          valLatestMatchId: '',
          valMatchesPlayed: 0,
          tagline: '',
          valK: 0,
          valD: 0,
          valA: 0,
          valKDA: 0,
          valWin: 0
        },
        TeamFightTactics: {
          tftSummonerName: '',
          tftLatestMatchId: '',
          tftMatchesPlayed: 0,
          tftEliminations: 0,
          tftPlacements: 0,
          tftAvgPlacement: 0,
          tftWin: 0
        }
      },
      _id: 'fakeTestId',
      name: 'tester',
      puuid: 'testingPUUID',
      __v: 0
    }]);

    let user = await getUserDbHelper('test');
    expect(user.games).toBeDefined();
    expect(user.puuid).toBe('testingPUUID');
    expect(user.name).toBe('tester');
    expect(user._id).toBe('fakeTestId');
  });

  // it('Should respond with 200 and created object when using post method', async () => {
  //   const response1 = await request.post('/game').send({
  //     name: 'Halo',
  //     year: '1998',
  //   });

  //   const response2 = await request.post('/game').send({
  //     name: 'Mortal Kombat',
  //     year: '1995',
  //   });

  //   expect(response1.status).toEqual(200);
  //   expect(response1.body).toBeDefined();
  //   expect(response2.status).toEqual(200);
  //   expect(response2.body).toBeDefined();
  // });

  // it('Should respond with 200 on a get method, and the requested data', async () => {
  //   const response = await request.get('/game');

  //   expect(response.status).toEqual(200);
  //   expect(response.body).toBeDefined();
  //   expect(response.body.count).toEqual(2);
  // });

  // it('Should respond with 200 on a get method, and the single requested data', async () => {
  //   const response = await request.get('/game/2');

  //   expect(response.status).toEqual(200);
  //   expect(response.body).toBeDefined();
  //   expect(response.body.count).toEqual(1);
  // });

  // it('Should respond with 200 on a get method, and the data should be updated upon doing another get request', async () => {
  //   await request.put('/game/2').send({
  //     name: 'Mortal Chombat',
  //     year: '1995',
  //   });

  //   const response = await request.get('/game/2');

  //   expect(response.status).toEqual(200);
  //   expect(response.body.results[0].name).toEqual('Mortal Chombat');
  //   expect(response.body.count).toEqual(1);
  // });

  // it('Should response with a 204 upon destorying a record, and querying for that data should result in not finding a record', async () => {
  //   const response = await request.delete('/game/1');

  //   expect(response.status).toEqual(204);
  // });
});