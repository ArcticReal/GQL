'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _dataloader = require('dataloader');

var _dataloader2 = _interopRequireDefault(_dataloader);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _schema = require('./schema.js');

var _schema2 = _interopRequireDefault(_schema);

var _ofbizCon = require('./framework/ofbizCon.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alexServerURI = "http://192.168.49.60:3000";

function loggingMiddleWare(req, res, next) {
  console.log('\nrequest: \nmethod: ', req.method, '\n' + 'cookie: ', req.headers.cookie);
  next();
}

var app = (0, _express2.default)();
app.use(loggingMiddleWare);
app.use((0, _cors2.default)({ credentials: true, origin: alexServerURI, methods: "POST, OPTIONS" }), (0, _expressGraphql2.default)(function (req, res) {
  var ofbizLoader = new _dataloader2.default(function (keys) {
    return Promise.all(keys.map(function (path) {
      return (0, _ofbizCon.fetchFromUrl)(path, req);
    }));
  });
  var loaders = {
    ofbiz: ofbizLoader
  };
  return {
    context: { req: req, res: res, loaders: loaders },
    schema: _schema2.default,
    graphiql: true
  };
}));

app.listen(5000);
console.log("\nserver running at http://localhost:5000\n" + "———————————————————————————————————————");