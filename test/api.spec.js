const request = require('supertest');
const app = require('../app');

describe('GET /api', function() {

  it('responds home URL', done => {
    request(app)
      .get('/api')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { source: 'https://github.com/vaibhavpandeyvpz/resumer' }, done);
  });
});
