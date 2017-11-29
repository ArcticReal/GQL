import fetch from 'node-fetch';



const BASE_URL = "http://localhost:8080/eCommerce/api/"


function getCookie(req){
  return req.headers.cookie.replace('Path=/' , 'Path=/eCommerce; Secure; ');
}

function fetchFromUrl(relativeURL, req){
  console.log('fetching URL ' + relativeURL);
  return fetch(`${BASE_URL}${relativeURL}`, {headers: {'Cookie': getCookie(req)}})
        .then(res => {
          return res.json();
        })
        .then(json => {
          if(json!==undefined&&json!==null){
            if(json instanceof Array)
              if(json.length===1)
                return json[0];
          }

          return json;
        })
        .catch(err => {});
}

function postToUrl(relativeURL, body, req){
  console.log('post to URL: ' + relativeURL);
  return fetch(`${BASE_URL}${relativeURL}`, {method: 'POST', body: JSON.stringify(body), headers: {'Cookie': getCookie(req), 'Content-Type': 'application/JSON'}})
        .then(res => {
          console.log(res);
          return res.json();})
        .catch((err) => {return err;})
        .then(res => {
          console.log(res);
          return res.text();});
}

function putToUrl(relativeURL, body, cookie){
  console.log('put to URL: ' + relativeURL);
  return fetch(`${BASE_URL}${relativeURL}`, {method: 'PUT', body: body, headers: {'Cookie': getCookie(req)}})
        .then(res => {return res.json();})
        .catch(err => {});
}

function login(relativeURL, username, password){
  console.log('post to URL: ' + relativeURL);
  return fetch(`${BASE_URL}${relativeURL}?username=${username}&password=${password}`,
                {method: 'POST', redirect: 'follow'})
        .then(res => {console.log('\nLogin response:');
                      console.log('status:     ', res.statusText);
                      const setCookie = res.headers.get('set-cookie').replace('/eCommerce; Secure; ', '/; ');
                      console.log('Set-Cookie: ', setCookie, '\n');
                      return {message: res.text(), status: res.status, setCookie: setCookie};})
        .catch(err => {console.log(err);});

}

export {fetchFromUrl}
export {postToUrl, login}
