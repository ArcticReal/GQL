import {GraphQLError} from 'graphql';
import fetch from 'node-fetch';



const BASE_URL = "http://192.168.49.59:8080/eCommerce/api/";


function getCookie(req){
  if(req!==undefined&&req.headers.cookie!==undefined)
    return req.headers.cookie.replace('Path=/' , 'Path=/eCommerce; Secure; ');

  return null;
}

function fetchText(relativeURL){
  return fetch(`${BASE_URL}${relativeURL}`);
}

function fetchArrayFromUrl(relativeURL, req){
  console.log('fetching URL ' + relativeURL);
  return fetch(`${BASE_URL}${relativeURL}`, {headers: {'Cookie': getCookie(req)}})
        .then(res => {
          return res.json();
        })
        .then(json => {
          if (!(json instanceof Array)) {
            return [json];
          }
          return json;
        })
        .catch(err => {});
}

function fetchOneFromUrl(relativeURL, req){
  return fetchArrayFromUrl(relativeURL, req)
        .then(json => {
          if(json!==undefined&&json!==null){
            if(json instanceof Array)
              if(json.length===1)
                return json[0];
              else
                throw new GraphQLError('didn\'t expect array');
          }

          return json;
        })
        .catch(err => {throw err;});

}

function postToUrl(relativeURL, body, req){
  console.log('post to URL: ' + relativeURL);
  return fetch(`${BASE_URL}${relativeURL}`, {method: 'POST', body: JSON.stringify(body), headers: {'Cookie': getCookie(req), 'Content-Type': 'application/JSON'}})
        .then(res => {
          if (res.status===401) {
            throw new GraphQLError('unauthorized');
          }else {
            return res.json();
          }
        })
        .catch((err) => {throw err;});
}

function putToUrl(relativeURL, body, cookie){
  console.log('put to URL: ' + relativeURL);
  return fetch(`${BASE_URL}${relativeURL}`, {method: 'PUT', body: body, headers: {'Cookie': getCookie(req)}})
        .then(res => {return res.json();})
        .catch(err => {});
}

function deleteToUrl(relativeURL, body, cookie){
  console.log('put to URL: ' + relativeURL);
  return fetch(`${BASE_URL}${relativeURL}`, {method: 'DELETE', body: body, headers: {'Cookie': getCookie(req)}})
        .then(res => {return res.json();})
        .catch(err => {});
}


function login(relativeURL, username, password){
  console.log('login request:');
  console.log('username:', username);
  console.log('password:', password);

  return fetch(`${BASE_URL}${relativeURL}?username=${username}&password=${password}`,
                {method: 'POST', redirect: 'manual'})
        .then(res => {
          console.log('\nLogin response:');
          console.log('Location:   ', res.headers.get('Location'));
          const setCookie = res.headers.get('set-cookie').replace('/eCommerce; Secure; ', '/; ');
          console.log('Set-Cookie: ', setCookie, '\n');

          return {promise: fetch(res.headers.get('Location')), setCookie: setCookie};
        })
        .then(result => {
          const response = result.promise;
          return {message: response.then(r => {return r.text();}), status: response.then(r => {return r.status;}), setCookie: result.setCookie};
        })
        .catch(err => {console.log(err);});

}

export {fetchOneFromUrl, fetchArrayFromUrl};
export {fetchText, postToUrl, login};
