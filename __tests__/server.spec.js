const server = require('../server')
const request = require('supertest')

    describe('POST /api/auth/register', () => {
      it('should register user', () => {
        return request(server)
          .post('/api/auth/register')
          .send({
            username: 'cesar3',
            password: 'cesar3'
          })
          .then(res => {
            expect(res).toHaveProperty('status', 201)
          })
      })
      it('should return json object', () => {
        return request(server)
          .post('/api/auth/register')
          .send({
            username: 'test12',
            password: 'test12'
          })
          .then(res => {
            expect(res).toHaveProperty('type', 'application/json')
          })
      })
    })

    describe('POST /api/auth/login', () => {
        it('should be a success', () => {
        return request(server)
            .post('/api/auth/login')
            .send({
                username: "cesar3",
                password: "cesar3"
            })
            .then(response => {
            expect(response.status).toBe(200)
            })
        });
    });
    it('returns JSON', () => {
        return request(server)
            .post('/api/auth/login')
            .send({
                username: "test12",
                password: "test12"
            })
            .then(res => {
            token = res.body.token
            expect(res).toHaveProperty('type', 'application/json')
            });
        });
