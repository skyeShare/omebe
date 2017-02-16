const request = require('supertest');
var server = require ('../server/server'),
  assert = require ('assert'),
  http = require ('http');
var port = 8080;

describe('server', function () {
  before(function () {
    server.listen(port);
  });

  after(function () {
    server.close();
  });

  describe('Server status and Message', function () {
    it('Deep Says: status response should be equal 200', function (done) {
      http.get('http://127.0.0.1:8080', function (response) {
        assert.equal(response.statusCode, 200);
        done();
      });
    });

    it('Schno Says: status response should be equal 200 when fetching a board', done => {
      request('http://127.0.0.1:8080')
        .post('/selectboard')
        .set('Accept', 'application/json')
        .send({ board_id: '1' })
        .expect(200, done);
    });

    it('Trung Says: status response should be equal 200 when logging out', done => {
      request('http://127.0.0.1:8080')
        .post('/logout')
        .set('Accept', 'application/json')
        .send()
        .expect(200, done);
    });

  });

});
