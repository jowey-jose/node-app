// First intergratin test.

const request = require('supertest');
const app = require('../index.js');
describe('GET /', function() {
 it('respond with Hello World, It is joseph here', function(done) {
 //navigate to root and check the the response is "hello world"
 request(app).get('/').expect('Hello World, It is joseph here', done);
 });
});