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
    // console.log("User:", user);
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
    axios.get.mockResolvedValueOnce({
      info: {
        participants: [{
          kills: 5,
          deaths: 5,
          assists: 5,
          win: true
        }]
      }
    });

    await getLolGameInfo('testID', 'stuff');

    expect(axios.get).toHaveBeenCalledTimes(2);
  });

  it('Should call axios.get in order to get puuid', async () => {
    let registerInfo = {inGameName: 'Test name', tagline: 'test tagline'};
    await setPuuidHelper(registerInfo);

    expect(axios.get).toHaveBeenCalledTimes(5);
  });

  it('Should respond with 200 on a get method, and the single requested data', async () => {
    User.find.mockResolvedValue({
      _id: 'fakeTestId',
      name: 'tester',
      puuid: 'testingPUUID',
      __v: 0
    });

    let userStatsObject = {
      gameName: 'lol',
      data: { kills: 0, deaths: 0, assists: 0, win: 0, matchId: 0 },
      stats: {
        lolKDA: 0,
        tftSTATS: 0,
      },
      latestMatches: {
        lolLatestMatch: '0',
        tftLatestMatch: '0',
      },
        games: {
          LeagueOfLegends: {
            lolSummonerName: 'coolguy420',
            lolLatestMatchId: 'NA1_4212850451',
            lolMatchesPlayed: 33,
            lolK: 297,
            lolD: 363,
            lolA: 198,
            lolKDA: 1.3636363636363635,
            lolWin: 33
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
            tftLatestMatchId: 'NA1_4160202229',
            tftMatchesPlayed: 2,
            tftEliminations: 6,
            tftPlacements: 2,
            tftAvgPlacement: 1,
            tftWin: 0
          }
        },
        _id: '277545919879315456',
        name: 'dario',
        puuid: 'O6voVjp-dnd8zd5MMRHtzVSHLGfwnXGLP3ZNAjPQyz4Sdp8Pq9h9lz59dkUtpXpv8IgzIRpQCEEy-g',
        __v: 0
    
     };
    await updateDbStatsHelper(userStatsObject);
    expect(User.findByIdAndUpdate).toHaveBeenCalledTimes(1);
  });

  it('Should respond with 200 on a get method, and the single requested data', async () => {
    User.find.mockResolvedValue({
      _id: 'fakeTestId',
      name: 'tester',
      puuid: 'testingPUUID',
      __v: 0
    });

    let userStatsObject = {
      gameName: 'tft',
      data: { kills: 0, deaths: 0, assists: 0, win: 0, matchId: 0 },
      stats: {
        lolKDA: 0,
        tftSTATS: 0,
      },
      latestMatches: {
        lolLatestMatch: '0',
        tftLatestMatch: '0',
      },
        games: {
          LeagueOfLegends: {
            lolSummonerName: 'coolguy420',
            lolLatestMatchId: 'NA1_4212850451',
            lolMatchesPlayed: 33,
            lolK: 297,
            lolD: 363,
            lolA: 198,
            lolKDA: 1.3636363636363635,
            lolWin: 33
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
            tftLatestMatchId: 'NA1_4160202229',
            tftMatchesPlayed: 2,
            tftEliminations: 6,
            tftPlacements: 2,
            tftAvgPlacement: 1,
            tftWin: 0
          }
        },
        _id: '277545919879315456',
        name: 'dario',
        puuid: 'O6voVjp-dnd8zd5MMRHtzVSHLGfwnXGLP3ZNAjPQyz4Sdp8Pq9h9lz59dkUtpXpv8IgzIRpQCEEy-g',
        __v: 0
    
     };
    await updateDbStatsHelper(userStatsObject);
    expect(User.findByIdAndUpdate).toHaveBeenCalledTimes(1);
  });

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