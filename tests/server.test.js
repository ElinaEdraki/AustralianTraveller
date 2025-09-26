const request = require('supertest');
const app = require('../server');

test('GET /api/places returns 200', async () => {
  const res = await request(app).get('/api/places');
  expect(res.statusCode).toBe(200);
});
