
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SecurityGroup} from '../login/SecurityGroup.js';


const SecurityGroupPermission = new GraphQLObjectType({
  name: 'SecurityGroupPermissionType',
  description: 'Type for SecurityGroupPermission in login',

  fields: () => ({
    permissionId: {type: GraphQLString},
    group: {
      type: SecurityGroupType,
      args : {groupId: {type: GraphQLString}},
      resolve: (securityGroupPermission, args, {loaders}) => loaders.ofbizArray.load(`securityGroups/find?=${args.groupId}`)
    }
  })
});

export {SecurityGroupPermission};
    