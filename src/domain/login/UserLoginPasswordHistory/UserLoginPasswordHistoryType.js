
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

import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';


const UserLoginPasswordHistoryType = new GraphQLObjectType({
  name: 'UserLoginPasswordHistoryType',
  description: 'Type for UserLoginPasswordHistory in login',

  fields: () => ({
    userLogin: {
      type: UserLoginType,
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLoginPasswordHistory, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${userLoginPasswordHistory.userLoginId}`)
    },
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    currentPassword: {type: GraphQLString}
  })
});

export {UserLoginPasswordHistoryType};
    