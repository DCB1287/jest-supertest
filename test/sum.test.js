const { default: axios } = require('axios');
const { sum, diff } = require('../sum'); 
const { app } = require('../app');
const request = require('supertest');

test('sum works', () => {
    expect(sum(1, 2)).toBe(3);
});

test('/express1 works', async () => {
    let response = await axios({
        method: 'get',
         url: 'http://localhost:3001/express1',
        headers: {
            'Allow-Control-Access-Origin': 'http://localhost:3000',
        },
    });
    expect(response.status).toBe(200);
    expect(response.data.body).toBe('Express1');
});

test('/express2 works', done => {
    request(app)
        .get('/express2')
        .set('Allow-Control-Access-Origin', 'http://localhost:3000')
        .expect(200)
        .expect('Express2', done);
});

test('/sample works', done => {
    request(app)
        .get('/sample')
        .set('Allow-Control-Access-Origin', 'http://localhost:3000')
        .expect(201)
        .expect('respond with a resource', done);
});