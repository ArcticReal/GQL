import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql';

import {fetchText, postToUrl, login} from '../framework/ofbizCon.js';


const LoginResponseType = new GraphQLObjectType({
  name: 'LoginResponse',
  description: ' indictes what happened to your login/logout',

  fields: () => ({
    message: {
      type: GraphQLString
    },
    status: {
      type: GraphQLString
    },

  })
});

const loginMutation = {
  type: LoginResponseType,
  description: 'Login to the ofbiz service',
  args: {
    username: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    },

  },
  resolve: (root, args, {res}) => {
    return login(`login`, args.username, args.password).then(loginRes => {
      res.set('Set-Cookie', loginRes.setCookie);
      return loginRes;
    });

  }
};

const logoutMutation = {
  type: LoginResponseType,
  description: 'Logout from the ofbiz service',
  args: {
    username: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    },

  },
  resolve: (root, args, {req}) => {
    return fetchText(`logout`, req);

  }
};

const loginMutations = ({
  login: loginMutation,
  logout: logoutMutation,
});

export {
  loginMutations
};
