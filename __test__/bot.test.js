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

jest.mock('discord.js', () => {
  return {
    MessageEmbed: jest.fn().mockImplementation(() => {
      return {
        setTitle: jest.fn(),
        setColor: jest.fn(),
        setThumbnail: jest.fn(),
        setDescriptions: jest.fn(),
        addFields: jest.fn()
      }
    })
  }
});

describe(`Will test bot's ability to get latest User stats and update MongoDB`, () => {

  it(`Will compare various users' latest League of Legends stats and update database, as well as roast those who did worse than others.`, async () => {
    User.findOne.mockResolvedValueOnce(['data']);
    // let result = await getUserDbHelper();
    // console.log(result);
    let message = {
      msgAuthor: 'test'
    }
    let game = 'lol'
    let users = {
      userOne: {
        gameName: 'lol',
        discordId: 'test1',
      },
      userTwo: {
        gameName: 'lol',
        discordId: 'test2',
      },
      userThree: {
        gameName: 'lol',
        discordId: 'test3',
      },
    }

    let value = await compareUsers(message, game, users);
    console.log(value);
  });

  it(`Will compare various users' latest Team Fight Tactics stats and update database, as well as roast those who did worse than others.`, async () => {
    let message = {
      msgAuthor: 'test'
    }
    let game = 'tft'
    let users = {
      userOne: {
        gameName: 'tft',
        discordId: 'test1',
      },
      userTwo: {
        gameName: 'tft',
        discordId: 'test2',
      },
      userThree: {
        gameName: 'tft',
        discordId: 'test3',
      },
    }

    compareUsers(message, game, users);
  });

  // it('Should respond with 404 on a bad method', async () => {
  //   const response = await request.patch('/');

  //   expect(response.status).toEqual(404);
  // });

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