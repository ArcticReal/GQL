import express from 'express';
import graphQLHTTP from 'express-graphql';
import DataLoader from 'dataloader';

import cors from 'cors';

import schema from './schema.js';
import {fetchFromUrl, postToUrl} from './framework/ofbizCon.js';


const alexServerURI = "http://192.168.49.60:3000";


function loggingMiddleWare(req, res, next){
  console.log('\nrequest: \nmethod: ', req.method,
              '\n'+'cookie: ', req.headers.cookie);
  next();
}


const app = express();
app.use(loggingMiddleWare)
app.use(cors({credentials: true, origin: alexServerURI, methods: "POST, OPTIONS"}), graphQLHTTP((req, res) => {
  const ofbizLoader = new DataLoader(
    keys => Promise.all(keys.map(path => fetchFromUrl(path, req)))
  );
  const loaders = {
    ofbiz: ofbizLoader,
  }
  return {
    context: {req, res, loaders},
    schema,
    graphiql: true,
  }
}))

app.listen(5000);
console.log("\nserver running at http://localhost:5000\n"
             +"———————————————————————————————————————");
