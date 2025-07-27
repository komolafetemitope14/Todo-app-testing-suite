const request = require('supertest');
const app = require('../index');

describe('API Tests', () => {
  test('Login with valid credentials', async () => {
    const res = await request(app).post('/login').send({ username: 'admin', password: 'admin' });
    expect(res.statusCode).toBe(200);
  });

  test('Login with invalid credentials', async () => {
    const res = await request(app).post('/login').send({ username: 'fake', password: '123' });
    expect(res.statusCode).toBe(401);
  });

  test('Add a todo', async () => {
    const res = await request(app).post('/items').send({ text: 'Test item' });
    expect(res.statusCode).toBe(201);
  });
});

