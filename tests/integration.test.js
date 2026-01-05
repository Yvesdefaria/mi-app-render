const request = require('supertest');
const app = require('../app');

test('GET /health devuelve status 200 y estado ok', async () => {
  const res = await request(app).get('/health');

  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('ok');
});
