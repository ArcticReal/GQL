
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


const UserLoginPasswordHistory = new GraphQLObjectType({
  name: 'UserLoginPasswordHistoryType',
  description: 'Type for UserLoginPasswordHistory in login',

  fields: () => ({
    userLogin: {
      type: UserLoginType,
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLoginPasswordHistory, args, {loaders}) => loaders.ofbizArray.load(`userLogins/find?=${args.userLoginId}`)
    },
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    currentPassword: {type: GraphQLString}
  })
});

export {UserLoginPasswordHistory};
    