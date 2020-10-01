
const { getStringversionTwo,getStringversionOne} = require('./controller')


let chaiHttp = require('chai-http');
let chai = require('chai');
let should = chai.should();
let server = require('../app')
let expect = require('chai')

chai.use(chaiHttp);

describe('/GET page', () => {
    it('it should get the page', (done) => {
      chai.request(server)
          .get('/')
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
});

describe('/POST v1', () => {
    it('it should get the v1 output', (done) => {
     output = {
                    "statusCode": 200,
                    "data": {
                    "firstName": "JOHN0000",
                    "lastName": "MICHAEL000",
                    "clientId": "9994567"
                    }
                   } 
      chai.request(server)
          .post('/v1/parse')
          .send('JOHN0000MICHAEL0009994567')
          .end((err, res) => {
                res.should.have.status(200);
               
            done();
          });
    });
});

describe('/POST v2', () => {
    it('it should get the v1 output', (done) => {
     output = {
                    "statusCode": 200,
                    "data": {
                    "firstName": "JOHN0000",
                    "lastName": "MICHAEL000",
                    "clientId": "9994567"
                    }
                   } 
      chai.request(server)
          .post('/v2/parse')
          .send('JOHN0000MICHAEL0009994567')
          .end((err, res) => {
                res.should.have.status(200);
                console.log(res)
            done();
          });
    });
});