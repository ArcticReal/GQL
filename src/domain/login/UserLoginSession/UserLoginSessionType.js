
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


const UserLoginSessionType = new GraphQLObjectType({
  name: 'UserLoginSessionType',
  description: 'Type for UserLoginSession in login',

  fields: () => ({
    userLogin: {
      type: UserLoginType,
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLoginSession, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${userLoginSession.userLoginId}`)
    },
    sessionData: {type: GraphQLString},
    savedDate: {type: GraphQLString}
  })
});

export {UserLoginSessionType};
    