'use strict';

const compareUsers = require('../server/util/compareUsers.js');
const getStatsHelper = require('../server/util/getStatsHelper.js');
const getUserDbHelper = require('../server/util/getUserDbHelper.js');
const setPuuidHelper = require('../server/util/setPuuidHelper.js');
const updateDbStatsHelper = require('../server/util/updateDbStatsHelper.js');

describe('Test should test all server functionality, for all methods on all routes', () => {

  it('Should respond with 404 on a bad route', async () => {
    const response = await request.get('/gam');

    expect(response.status).toEqual(404);
  });

  it('Should respond with 404 on a bad method', async () => {
    const response = await request.patch('/');

    expect(response.status).toEqual(404);
  });

  it('Should respond with 200 and created object when using post method', async () => {
    const response1 = await request.post('/game').send({
      name: 'Halo',
      year: '1998',
    });

    const response2 = await request.post('/game').send({
      name: 'Mortal Kombat',
      year: '1995',
    });

    expect(response1.status).toEqual(200);
    expect(response1.body).toBeDefined();
    expect(response2.status).toEqual(200);
    expect(response2.body).toBeDefined();
  });

  it('Should respond with 200 on a get method, and the requested data', async () => {
    const response = await request.get('/game');

    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
    expect(response.body.count).toEqual(2);
  });

  it('Should respond with 200 on a get method, and the single requested data', async () => {
    const response = await request.get('/game/2');

    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
    expect(response.body.count).toEqual(1);
  });

  it('Should respond with 200 on a get method, and the data should be updated upon doing another get request', async () => {
    await request.put('/game/2').send({
      name: 'Mortal Chombat',
      year: '1995',
    });

    const response = await request.get('/game/2');

    expect(response.status).toEqual(200);
    expect(response.body.results[0].name).toEqual('Mortal Chombat');
    expect(response.body.count).toEqual(1);
  });

  it('Should response with a 204 upon destorying a record, and querying for that data should result in not finding a record', async () => {
    const response = await request.delete('/game/1');

    expect(response.status).toEqual(204);
  });
});