'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.postToUrl = exports.fetchFromUrl = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BASE_URL = "http://localhost:8080/eCommerce/api/";

function getCookie(req) {
  return req.headers.cookie.replace('Path=/', 'Path=/eCommerce; Secure; ');
}

function fetchFromUrl(relativeURL, req) {
  console.log('fetching URL ' + relativeURL);
  return (0, _nodeFetch2.default)('' + BASE_URL + relativeURL, { headers: { 'Cookie': getCookie(req) } }).then(function (res) {
    return res.json();
  }).then(function (json) {
    if (json !== undefined && json !== null) {
      if (json instanceof Array) if (json.length === 1) return json[0];
    }

    return json;
  }).catch(function (err) {});
}

function postToUrl(relativeURL, body, req) {
  console.log('post to URL: ' + relativeURL);
  return (0, _nodeFetch2.default)('' + BASE_URL + relativeURL, { method: 'POST', body: JSON.stringify(body), headers: { 'Cookie': getCookie(req), 'Content-Type': 'application/JSON' } }).then(function (res) {
    console.log(res);
    return res.json();
  }).catch(function (err) {
    return err;
  }).then(function (res) {
    console.log(res);
    return res.text();
  });
}

function putToUrl(relativeURL, body, cookie) {
  console.log('put to URL: ' + relativeURL);
  return (0, _nodeFetch2.default)('' + BASE_URL + relativeURL, { method: 'PUT', body: body, headers: { 'Cookie': getCookie(req) } }).then(function (res) {
    return res.json();
  }).catch(function (err) {});
}

function login(relativeURL, username, password) {
  console.log('post to URL: ' + relativeURL);
  return (0, _nodeFetch2.default)('' + BASE_URL + relativeURL + '?username=' + username + '&password=' + password, { method: 'POST', redirect: 'follow' }).then(function (res) {
    console.log('\nLogin response:');
    console.log('status:     ', res.statusText);
    var setCookie = res.headers.get('set-cookie').replace('/eCommerce; Secure; ', '/; ');
    console.log('Set-Cookie: ', setCookie, '\n');
    return { message: res.text(), status: res.status, setCookie: setCookie };
  }).catch(function (err) {
    console.log(err);
  });
}

exports.fetchFromUrl = fetchFromUrl;
exports.postToUrl = postToUrl;
exports.login = login;