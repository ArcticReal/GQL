import express from 'express';
import graphQLHTTP from 'express-graphql';
import DataLoader from 'dataloader';
import depthLimit from 'graphql-depth-limit';

import cors from 'cors';

import schema from './schema.js';
import {fetchOneFromUrl, fetchArrayFromUrl, postToUrl} from './framework/ofbizCon.js';

const alexServerURI = "http://192.168.49.60:3000";

function loggingMiddleWare(req, res, next){
  console.log('\nrequest: \nmethod: ', req.method,
              '\n'+'cookie: ', req.headers.cookie);
  next();
}

const app = express();
app.use(loggingMiddleWare);
app.use(cors({credentials: true, origin: alexServerURI, methods: "POST, OPTIONS"}), graphQLHTTP((req, res) => {
  const ofbizLoader = new DataLoader(
    keys => Promise.all(keys.map(path => fetchOneFromUrl(path, req)))
  );
  const ofbizArrayLoader = new DataLoader(
    keys => Promise.all(keys.map(path => fetchArrayFromUrl(path, req)))
  );
  const loaders = {
    ofbiz: ofbizLoader,
    ofbizArray: ofbizArrayLoader,
  };
  return {
    context: {req, res, loaders},
    schema,
    validationRules: [ depthLimit(7, {}, depths => console.log(depths))],
    graphiql: true,
    formatError: error => ({
      message: error.message,
    }),
  };
}));


app.listen(5000);
console.log("\nserver running at http://localhost:5000\n"+
              "———————————————————————————————————————");
