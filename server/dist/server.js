"use strict";

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _jwksRsa = _interopRequireDefault(require("jwks-rsa"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use((0, _cors.default)());
var checkAuthentication = (0, _expressJwt.default)({
  secret: _jwksRsa.default.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://".concat(_config.AUTH0_DOMAIN, "/.well-known/jwks.json")
  }),
  audience: _config.API_AUDIENCE_ATTRIBUTE,
  issuer: "http://".concat(_config.AUTH0_DOMAIN, ".auth0.com/"),
  algorithms: ['RS256']
});
app.get('/api/friends/public', function (req, res) {
  var publicFriends = [{
    id: 1,
    city: 'New York',
    firstName: 'Chandler',
    lastName: 'Bing'
  }, {
    id: 2,
    city: 'New York',
    firstName: 'Joey',
    lastName: 'Tribbiani'
  }, {
    id: 3,
    city: 'New York',
    firstName: 'Monica',
    lastName: 'Geller'
  }, {
    id: 4,
    city: 'New York',
    firstName: 'Phoebe',
    lastName: 'Buffay'
  }, {
    id: 5,
    city: 'New York',
    firstName: 'Rachel',
    lastName: 'Green'
  }, {
    id: 6,
    city: 'New York',
    firstName: 'Ross',
    lastName: 'Geller'
  }];
  res.json(publicFriends);
});
app.get('/api/friends/private', checkAuthentication, function (req, res) {
  var privateFriends = [{
    id: 1,
    city: 'Sydney',
    firstName: 'Joce',
    lastName: 'S'
  }, {
    id: 2,
    city: 'Haguenau',
    firstName: 'David',
    lastName: 'W'
  }, {
    id: 3,
    city: 'Strasbourg',
    firstName: 'Jean',
    lastName: 'M'
  }, {
    id: 4,
    city: 'Shanghai',
    firstName: 'Yann',
    lastName: 'M'
  }];
  res.json(privateFriends);
});
app.listen(3333);
console.log('Listening on http://localhost:3333');