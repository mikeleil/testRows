const request = require('supertest');
const app = require('../app');

describe('GET /api/topologies', () => {
  it('responds with JSON containing the calculated topologies', async () => {
      const response = await request(app).get('/api/topologies?n=4');

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('results');
      expect(Array.isArray(response.body.results)).toBe(true);
  });

  it('responds with JSON containing the calculated topologies for a custom value of n', async () => {
      const response = await request(app).get('/api/topologies?n=5');

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('results');
      expect(Array.isArray(response.body.results)).toBe(true);
  });
});

describe('GET /', () => {
  it('responds with HTML containing the main page', async () => {
      const response = await request(app).get('/');

      expect(response.statusCode).toBe(200);
  });
});