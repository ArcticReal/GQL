
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

import {PartyRelationshipType} from '../../party/PartyRelationship/PartyRelationshipType.js';
import {SecurityGroupPermissionType} from '../../login/SecurityGroupPermission/SecurityGroupPermissionType.js';
import {UserLoginSecurityGroupType} from '../../login/UserLoginSecurityGroup/UserLoginSecurityGroupType.js';
import {ProtectedViewType} from '../../login/ProtectedView/ProtectedViewType.js';


const SecurityGroupType = new GraphQLObjectType({
  name: 'SecurityGroupType',
  description: 'Type for SecurityGroup in login',

  fields: () => ({
    groupId: {type: GraphQLString},
    description: {type: GraphQLString},
    partyRelationships: {
      type: new GraphQLList(PartyRelationshipType),
      args : {},
      resolve: (securityGroup, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyRelationships/find?groupId=${securityGroup.groupId}`)
    },
    userLoginSecurityGroups: {
      type: new GraphQLList(UserLoginSecurityGroupType),
      args : {},
      resolve: (securityGroup, args, {loaders}) => loaders.ofbizArray.load(`login/userLogin/userLoginSecurityGroups/find?groupId=${securityGroup.groupId}`)
    },
    securityGroupPermissions: {
      type: new GraphQLList(SecurityGroupPermissionType),
      args : {},
      resolve: (securityGroup, args, {loaders}) => loaders.ofbizArray.load(`login/securityGroup/securityGroupPermissions/find?groupId=${securityGroup.groupId}`)
    },
    protectedViews: {
      type: new GraphQLList(ProtectedViewType),
      args : {},
      resolve: (securityGroup, args, {loaders}) => loaders.ofbizArray.load(`login/protectedViews/find?groupId=${securityGroup.groupId}`)
    }
  })
});

export {SecurityGroupType};
    