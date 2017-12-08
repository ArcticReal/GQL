
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

import {PartyRelationshipType} from '../party/PartyRelationship.js';
import {SecurityGroupPermissionType} from '../login/SecurityGroupPermission.js';
import {UserLoginSecurityGroupType} from '../login/UserLoginSecurityGroup.js';
import {ProtectedViewType} from '../login/ProtectedView.js';


const SecurityGroupType = new GraphQLObjectType({
  name: 'SecurityGroupType',
  description: 'Type for SecurityGroup in login',

  fields: () => ({
    groupId: {type: GraphQLString},
    description: {type: GraphQLString},
    partyRelationships: {
      type: new GraphQLList(PartyRelationshipType),
      args : {groupId: {type: GraphQLString}},
      resolve: (securityGroup, args, {loaders}) => loaders.ofbizArray.load(`partyRelationships/find?groupId=${securityGroup.groupId}`)
    },
    userLoginSecurityGroups: {
      type: new GraphQLList(UserLoginSecurityGroupType),
      args : {groupId: {type: GraphQLString}},
      resolve: (securityGroup, args, {loaders}) => loaders.ofbizArray.load(`userLoginSecurityGroups/find?groupId=${securityGroup.groupId}`)
    },
    securityGroupPermissions: {
      type: new GraphQLList(SecurityGroupPermissionType),
      args : {groupId: {type: GraphQLString}},
      resolve: (securityGroup, args, {loaders}) => loaders.ofbizArray.load(`securityGroupPermissions/find?groupId=${securityGroup.groupId}`)
    },
    protectedViews: {
      type: new GraphQLList(ProtectedViewType),
      args : {groupId: {type: GraphQLString}},
      resolve: (securityGroup, args, {loaders}) => loaders.ofbizArray.load(`protectedViews/find?groupId=${securityGroup.groupId}`)
    }
  })
});

export {SecurityGroupType};
    




const SecurityGroupInputType = new GraphQLInputObjectType({
  name: 'SecurityGroupInputType',
  description: 'input type for SecurityGroup in login',

  fields: () => ({
    groupId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {SecurityGroupInputType};
    