import request from 'supertest';
import app from '../src/app';

describe('GET /random-url', () => {
  it('should return 404', async () => {
    const response = await request(app).get('/reset');
    expect(response.status).toEqual(404);
  });
});
