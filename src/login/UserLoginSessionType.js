
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


const UserLoginSession = new GraphQLObjectType({
  name: 'UserLoginSessionType',
  description: 'Type for UserLoginSession in login',

  fields: () => ({
    userLogin: {
      type: UserLoginType,
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLoginSession, args, {loaders}) => loaders.ofbizArray.load(`userLogins/find?=${args.userLoginId}`)
    },
    sessionData: {type: GraphQLString},
    savedDate: {type: GraphQLString}
  })
});

export {UserLoginSession};
    