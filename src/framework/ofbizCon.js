import {GraphQLError} from 'graphql';
import fetch from 'node-fetch';



const BASE_URL = "http://192.168.49.59:8080/eCommerce/api/";


function getCookie(req){
  return req.headers.cookie.replace('Path=/' , 'Path=/eCommerce; Secure; ');
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
        .catch(err => {});

}

function postToUrl(relativeURL, body, req){
  console.log('post to URL: ' + relativeURL);
  return fetch(`${BASE_URL}${relativeURL}`, {method: 'POST', body: JSON.stringify(body), headers: {'Cookie': getCookie(req), 'Content-Type': 'application/JSON'}})
        .then(res => {
          if (res.headers.get('content-type').split(';')[0]==='text/plain') {
            return res.text();
          }else {
            return res;
          }
        })
        .then(res => {
          if (res instanceof Promise) {
            return res;
          }
          console.log(res);
          throw new GraphQLError(res);})
        .catch((err) => {throw err;});
}

function putToUrl(relativeURL, body, cookie){
  console.log('put to URL: ' + relativeURL);
  return fetch(`${BASE_URL}${relativeURL}`, {method: 'PUT', body: body, headers: {'Cookie': getCookie(req)}})
        .then(res => {return res.json();})
        .catch(err => {});
}

function login(relativeURL, username, password){
  console.log('login request:');
  console.log('username:', username);
  console.log('password:', password);
  return fetch(`${BASE_URL}${relativeURL}?username=${username}&password=${password}`,
                {method: 'POST', redirect: 'follow'})
        .then(res => {console.log('\nLogin response:');
                      console.log('status:     ', res.statusText);
                      const setCookie = res.headers.get('set-cookie').replace('/eCommerce; Secure; ', '/; ');
                      console.log('Set-Cookie: ', setCookie, '\n');
                      return {message: res.text(), status: res.status, setCookie: setCookie};})
        .catch(err => {console.log(err);});

}

export {fetchOneFromUrl, fetchArrayFromUrl};
export {postToUrl, login};
