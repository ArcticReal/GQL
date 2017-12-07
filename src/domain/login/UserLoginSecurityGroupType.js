
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SecurityGroupType} from '../login/SecurityGroupType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const UserLoginSecurityGroupType = new GraphQLObjectType({
  name: 'UserLoginSecurityGroupType',
  description: 'Type for UserLoginSecurityGroup in login',

  fields: () => ({
    userLogin: {
      type: UserLoginType,
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLoginSecurityGroup, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${userLoginSecurityGroup.userLoginId}`)
    },
    fromDate: {type: GraphQLString},
    group: {
      type: SecurityGroupType,
      args : {groupId: {type: GraphQLString}},
      resolve: (userLoginSecurityGroup, args, {loaders}) => loaders.ofbiz.load(`securityGroups/find?groupId=${userLoginSecurityGroup.groupId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {UserLoginSecurityGroupType};
    