
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
import {SecurityGroup} from '../login/SecurityGroup.js';


const UserLoginSecurityGroup = new GraphQLObjectType({
  name: 'UserLoginSecurityGroupType',
  description: 'Type for UserLoginSecurityGroup in login',

  fields: () => ({
    userLogin: {
      type: UserLoginType,
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLoginSecurityGroup, args, {loaders}) => loaders.ofbizArray.load(`userLogins/find?=${args.userLoginId}`)
    },
    fromDate: {type: GraphQLString},
    group: {
      type: SecurityGroupType,
      args : {groupId: {type: GraphQLString}},
      resolve: (userLoginSecurityGroup, args, {loaders}) => loaders.ofbizArray.load(`securityGroups/find?=${args.groupId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {UserLoginSecurityGroup};
    