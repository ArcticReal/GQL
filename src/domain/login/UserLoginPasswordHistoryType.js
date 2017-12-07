
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


const UserLoginPasswordHistoryType = new GraphQLObjectType({
  name: 'UserLoginPasswordHistoryType',
  description: 'Type for UserLoginPasswordHistory in login',

  fields: () => ({
    userLogin: {
      type: UserLoginType,
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLoginPasswordHistory, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${userLoginPasswordHistory.userLoginId}`)
    },
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    currentPassword: {type: GraphQLString}
  })
});

export {UserLoginPasswordHistoryType};
    