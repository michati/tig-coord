/**
 * Created by michati on 12/27/15.
 */
var app = require('../app'),
    request = require('supertest');

describe('tig-coord heartbeat api', function(){
    describe('when requesting resource /heartbeat', function(){
        it('should respond with 200', function(done){
            request(app)
                .get('/heartbeat')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
});

//404 handling middleware
describe('tig-coord heartbeat api', function(){
    describe('when requesting resource /missing', function(){
        it('should respond with 404', function(done){
            request(app)
                .get('/missing')
                .expect('Content-Type', /json/)
                .expect(404, done);
        });
    });
});