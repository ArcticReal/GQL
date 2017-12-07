
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


const SecurityGroupPermissionType = new GraphQLObjectType({
  name: 'SecurityGroupPermissionType',
  description: 'Type for SecurityGroupPermission in login',

  fields: () => ({
    permissionId: {type: GraphQLString},
    group: {
      type: SecurityGroupType,
      args : {groupId: {type: GraphQLString}},
      resolve: (securityGroupPermission, args, {loaders}) => loaders.ofbiz.load(`securityGroups/find?groupId=${securityGroupPermission.groupId}`)
    }
  })
});

export {SecurityGroupPermissionType};
    