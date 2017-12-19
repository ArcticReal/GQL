
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

import {PriorityTypeType} from '../../party/PriorityType/PriorityTypeType.js';
import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';
import {PartyRelationshipTypeType} from '../../party/PartyRelationshipType/PartyRelationshipTypeType.js';
import {SecurityGroupType} from '../../login/SecurityGroup/SecurityGroupType.js';


const PartyRelationshipType = new GraphQLObjectType({
  name: 'PartyRelationshipType',
  description: 'Type for PartyRelationship in party',

  fields: () => ({
    roleTypeIdTo: {type: GraphQLString},
    partyFrom: {
      type: PartyRoleType,
      args : {partyIdFrom: {type: GraphQLString}},
      resolve: (partyRelationship, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${partyRelationship.partyIdFrom}`)
    },
    positionTitle: {type: GraphQLString},
    comments: {type: GraphQLString},
    priorityType: {
      type: PriorityTypeType,
      args : {priorityTypeId: {type: GraphQLString}},
      resolve: (partyRelationship, args, {loaders}) => loaders.ofbiz.load(`party/priorityTypes/find?priorityTypeId=${partyRelationship.priorityTypeId}`)
    },
    permissionsEnumId: {type: GraphQLString},
    roleTypeIdFrom: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    relationshipName: {type: GraphQLString},
    securityGroup: {
      type: SecurityGroupType,
      args : {securityGroupId: {type: GraphQLString}},
      resolve: (partyRelationship, args, {loaders}) => loaders.ofbiz.load(`login/securityGroups/find?groupId=${partyRelationship.securityGroupId}`)
    },
    partyRelationshipType: {
      type: PartyRelationshipTypeType,
      args : {partyRelationshipTypeId: {type: GraphQLString}},
      resolve: (partyRelationship, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRelationshipTypes/find?partyRelationshipTypeId=${partyRelationship.partyRelationshipTypeId}`)
    },
    statusId: {type: GraphQLString},
    partyTo: {
      type: PartyRoleType,
      args : {partyIdTo: {type: GraphQLString}},
      resolve: (partyRelationship, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${partyRelationship.partyIdTo}`)
    }
  })
});

export {PartyRelationshipType};
    