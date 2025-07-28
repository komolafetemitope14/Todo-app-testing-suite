const request = require('supertest');
const app = require('../app');

describe('API Tests', () => {
  // ----- POST /login -----
  describe('POST /login', () => {
    describe('Positive cases', () => {
      it('should login with valid credentials', async () => {
        const res = await request(app)
          .post('/login')
          .send({ username: 'admin', password: 'admin' });

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('token');
      });
    });

    describe('Negative cases', () => {
      it('should fail with invalid credentials', async () => {
        const res = await request(app)
          .post('/login')
          .send({ username: 'wrong', password: 'bad' });

        expect(res.statusCode).toBe(401);
      });
    });
  });

  // ----- GET /items -----
  describe('GET /items', () => {
    describe('Positive cases', () => {
      it('should return an array of todos', async () => {
        const res = await request(app).get('/items');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
      });
    });

    // No negative cases unless auth is added or bad URL
  });

  // ----- POST /items -----
  describe('POST /items', () => {
    describe('Positive cases', () => {
      it('should create a new todo', async () => {
        const res = await request(app)
          .post('/items')
          .send({ text: 'New task' });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
      });
    });

    describe('Negative cases', () => {
      it('should fail when text is missing (if you add validation)', async () => {
        const res = await request(app)
          .post('/items')
          .send({});

        // NOTE: Your app currently doesn't validate this — returns 201
        expect(res.statusCode).toBe(201); // Update this to 400 if you add validation
      });
    });
  });

  // ----- PUT /items/:id -----
  describe('PUT /items/:id', () => {
    describe('Positive cases', () => {
      it('should update an existing todo', async () => {
        const createRes = await request(app).post('/items').send({ text: 'Old' });
        const id = createRes.body.id;

        const res = await request(app)
          .put(`/items/${id}`)
          .send({ text: 'Updated' });

        expect(res.statusCode).toBe(200);
        expect(res.body.text).toBe('Updated');
      });
    });

    describe('Negative cases', () => {
      it('should return 404 for invalid ID', async () => {
        const res = await request(app)
          .put('/items/999999')
          .send({ text: 'Fail' });

        expect(res.statusCode).toBe(404);
      });
    });
  });

  // ----- DELETE /items/:id -----
  describe('DELETE /items/:id', () => {
    describe('Positive cases', () => {
      it('should delete an existing todo', async () => {
        const createRes = await request(app).post('/items').send({ text: 'To delete' });
        const id = createRes.body.id;

        const res = await request(app).delete(`/items/${id}`);
        expect(res.statusCode).toBe(204);
      });
    });

    describe('Negative cases', () => {
      it('should return 204 even for non-existent ID (current behavior)', async () => {
        const res = await request(app).delete('/items/999999');
        expect(res.statusCode).toBe(204);
      });
    });
  });
});

