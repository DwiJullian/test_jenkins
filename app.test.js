const request = require('supertest')
const app = require('./app')

describe('GET & POST', () => {
    it('responds with Hello, My World!', async () => {
        const res = await request(app).get('/')
        expect(res.statusCode).toBe(200)
        expect(res.text).toBe('Hello, My World!')
    })
    test('End-to-end POST and GET /api/data', async () => {
        // POST data ke /api/data
        const postRes = await request(app)
            .post('/api/data')
            .send({ item: 'Integration Item' });
        expect(postRes.statusCode).toBe(201);
        expect(postRes.body).toEqual({
            message: 'Data added',
            item: 'Integration Item',
        });

        const getRes = await request(app).get('/api/data');
        expect(getRes.statusCode).toBe(200);
        expect(getRes.body).toEqual({ data: 'This is some data' }); 
    });
})