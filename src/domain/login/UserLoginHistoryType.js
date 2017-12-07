
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {UserLoginType} from '../login/UserLoginType.js';


const UserLoginHistoryType = new GraphQLObjectType({
  name: 'UserLoginHistoryType',
  description: 'Type for UserLoginHistory in login',

  fields: () => ({
    userLogin: {
      type: UserLoginType,
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLoginHistory, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${userLoginHistory.userLoginId}`)
    },
    fromDate: {type: GraphQLString},
    visitId: {type: GraphQLString},
    passwordUsed: {type: GraphQLString},
    successfulLogin: {type: GraphQLBoolean},
    thruDate: {type: GraphQLString}
  })
});

export {UserLoginHistoryType};
    