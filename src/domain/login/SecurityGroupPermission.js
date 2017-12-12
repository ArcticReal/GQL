
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


const SecurityGroupPermissionType = new GraphQLObjectType({
  name: 'SecurityGroupPermissionType',
  description: 'Type for SecurityGroupPermission in login',

  fields: () => ({
    permissionId: {type: GraphQLString},
    group: {
      type: SecurityGroupType,
      args : {groupId: {type: GraphQLString}},
      resolve: (securityGroupPermission, args, {loaders}) => loaders.ofbiz.load(`login/securityGroups/find?groupId=${securityGroupPermission.groupId}`)
    }
  })
});

export {SecurityGroupPermissionType};
    




const SecurityGroupPermissionInputType = new GraphQLInputObjectType({
  name: 'SecurityGroupPermissionInputType',
  description: 'input type for SecurityGroupPermission in login',

  fields: () => ({
    permissionId: {type: GraphQLString},
    groupId: {type: GraphQLString}
  })
});

export {SecurityGroupPermissionInputType};
    