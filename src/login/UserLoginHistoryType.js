
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {UserLogin} from '../login/UserLogin.js';


const UserLoginHistory = new GraphQLObjectType({
  name: 'UserLoginHistoryType',
  description: 'Type for UserLoginHistory in login',

  fields: () => ({
    userLogin: {
      type: UserLoginType,
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLoginHistory, args, {loaders}) => loaders.ofbizArray.load(`userLogins/find?=${args.userLoginId}`)
    },
    fromDate: {type: GraphQLString},
    visitId: {type: GraphQLString},
    passwordUsed: {type: GraphQLString},
    successfulLogin: {type: GraphQLBoolean},
    thruDate: {type: GraphQLString}
  })
});

export {UserLoginHistory};
    