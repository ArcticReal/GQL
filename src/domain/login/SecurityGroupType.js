
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRelationshipType} from '../party/PartyRelationshipType.js';
import {SecurityGroupPermissionType} from '../login/SecurityGroupPermissionType.js';
import {UserLoginSecurityGroupType} from '../login/UserLoginSecurityGroupType.js';
import {ProtectedViewType} from '../login/ProtectedViewType.js';


const SecurityGroupType = new GraphQLObjectType({
  name: 'SecurityGroupType',
  description: 'Type for SecurityGroup in login',

  fields: () => ({
    groupId: {type: GraphQLString},
    description: {type: GraphQLString},
    partyRelationship: {
      type: new GraphQLList(PartyRelationshipType),
      args : {groupId: {type: GraphQLString}},
      resolve: (securityGroup, args, {loaders}) => loaders.ofbizArray.load(`partyRelationships/find?groupId=${securityGroup.groupId}`)
    },
    userLoginSecurityGroup: {
      type: new GraphQLList(UserLoginSecurityGroupType),
      args : {groupId: {type: GraphQLString}},
      resolve: (securityGroup, args, {loaders}) => loaders.ofbizArray.load(`userLoginSecurityGroups/find?groupId=${securityGroup.groupId}`)
    },
    securityGroupPermission: {
      type: new GraphQLList(SecurityGroupPermissionType),
      args : {groupId: {type: GraphQLString}},
      resolve: (securityGroup, args, {loaders}) => loaders.ofbizArray.load(`securityGroupPermissions/find?groupId=${securityGroup.groupId}`)
    },
    protectedView: {
      type: new GraphQLList(ProtectedViewType),
      args : {groupId: {type: GraphQLString}},
      resolve: (securityGroup, args, {loaders}) => loaders.ofbizArray.load(`protectedViews/find?groupId=${securityGroup.groupId}`)
    }
  })
});

export {SecurityGroupType};
    