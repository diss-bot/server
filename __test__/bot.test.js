'use strict';

const axios = require('axios');
jest.mock('axios');

const User = require('../server/models/userModel.js');
jest.mock('../server/models/userModel.js');

const getUserDbHelper = require('../server/util/getUserDbHelper.js');
const getLolMatches = require('../server/util/League/getLolMatches.js');
const getLolGameInfo = require('../server/util/League/getLolGameInfo.js');
const setPuuidHelper = require('../server/util/setPuuidHelper.js');
const updateDbStatsHelper = require('../server/util/updateDbStatsHelper.js');

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
        LeagueOfLegends: {},
        Valorant: {},
        TeamFightTactics: {}
      },
      _id: 'fakeTestId',
      name: 'tester',
      puuid: 'testingPUUID',
      __v: 0
    }]);

    let user = await getUserDbHelper('test');
    expect(User.find).toHaveBeenCalledTimes(1);
    expect(User.find).toHaveBeenCalledWith({ _id: 'test' });
    expect(user.games).toBeDefined();
    expect(user.puuid).toBe('testingPUUID');
    expect(user.name).toBe('tester');
    expect(user._id).toBe('fakeTestId');
  });

  it('Calls axios.get to League Of Legends API when using getLolMatches function', async () => {
    axios.get.mockResolvedValueOnce('testGameId-NA1_4213168996')

    await getLolMatches('test');
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it('Calls axios.get to League Of Legends API when using getLolGameInfo function', async () => {
    axios.get.mockResolvedValueOnce('testGameId-NA1_4213168996')

    await getLolMatches('test');
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

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