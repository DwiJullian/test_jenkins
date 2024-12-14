const request = require('supertest');
const app = require('./app');

describe('Unit Tests', () => {
    test('GET / - responds with "Hello, World!"', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello, World!');
    });

    test('GET /api/data - responds with JSON data', async () => {
        const res = await request(app).get('/api/data');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ data: 'This is some data' });
    });

    test('POST /api/data - returns 201 when item is sent', async () => {
        const res = await request(app)
            .post('/api/data')
            .send({ item: 'New Item' });
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({ message: 'Data added', item: 'New Item' });
    });
});
