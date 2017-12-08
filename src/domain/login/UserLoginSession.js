
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {UserLoginType} from '../login/UserLogin.js';


const UserLoginSessionType = new GraphQLObjectType({
  name: 'UserLoginSessionType',
  description: 'Type for UserLoginSession in login',

  fields: () => ({
    userLogin: {
      type: UserLoginType,
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLoginSession, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${userLoginSession.userLoginId}`)
    },
    sessionData: {type: GraphQLString},
    savedDate: {type: GraphQLString}
  })
});

export {UserLoginSessionType};
    




const UserLoginSessionInputType = new GraphQLInputObjectType({
  name: 'UserLoginSessionInputType',
  description: 'input type for UserLoginSession in login',

  fields: () => ({
    userLoginId: {type: GraphQLString},
    sessionData: {type: GraphQLString},
    savedDate: {type: GraphQLString}
  })
});

export {UserLoginSessionInputType};
    