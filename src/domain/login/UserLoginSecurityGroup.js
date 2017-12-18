
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

import {SecurityGroupType} from '../login/SecurityGroup.js';
import {UserLoginType} from '../login/UserLogin.js';


const UserLoginSecurityGroupType = new GraphQLObjectType({
  name: 'UserLoginSecurityGroupType',
  description: 'Type for UserLoginSecurityGroup in login',

  fields: () => ({
    userLogin: {
      type: UserLoginType,
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLoginSecurityGroup, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${userLoginSecurityGroup.userLoginId}`)
    },
    fromDate: {type: GraphQLString},
    group: {
      type: SecurityGroupType,
      args : {groupId: {type: GraphQLString}},
      resolve: (userLoginSecurityGroup, args, {loaders}) => loaders.ofbiz.load(`login/securityGroups/find?groupId=${userLoginSecurityGroup.groupId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {UserLoginSecurityGroupType};
    




const UserLoginSecurityGroupInputType = new GraphQLInputObjectType({
  name: 'UserLoginSecurityGroupInputType',
  description: 'input type for UserLoginSecurityGroup',

  fields: () => ({
    fromDate: {type: GraphQLString},
    groupId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    userLoginId: {type: GraphQLString}
  })
});

export {UserLoginSecurityGroupInputType};
    