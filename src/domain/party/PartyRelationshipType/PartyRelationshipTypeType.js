
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
import {RoleTypeType} from '../../party/RoleType/RoleTypeType.js';


const PartyRelationshipTypeType = new GraphQLObjectType({
  name: 'PartyRelationshipTypeType',
  description: 'Type for PartyRelationshipType in party',

  fields: () => ({
    partyRelationshipName: {type: GraphQLString},
    roleTypeValidTo: {
      type: RoleTypeType,
      args : {roleTypeIdValidTo: {type: GraphQLString}},
      resolve: (partyRelationshipType, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${partyRelationshipType.roleTypeIdValidTo}`)
    },
    partyRelationshipTypeId: {type: GraphQLString},
    roleTypeValidFrom: {
      type: RoleTypeType,
      args : {roleTypeIdValidFrom: {type: GraphQLString}},
      resolve: (partyRelationshipType, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${partyRelationshipType.roleTypeIdValidFrom}`)
    },
    parentType: {
      type: PartyRelationshipTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (partyRelationshipType, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRelationshipTypes/find?partyRelationshipTypeId=${partyRelationshipType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    partyRelationshipTypes: {
      type: new GraphQLList(PartyRelationshipTypeType),
      args : {},
      resolve: (partyRelationshipType, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyRelationshipTypes/find?partyRelationshipTypeId=${partyRelationshipType.partyRelationshipTypeId}`)
    },
    partyRelationships: {
      type: new GraphQLList(PartyRelationshipType),
      args : {},
      resolve: (partyRelationshipType, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyRelationships/find?partyRelationshipTypeId=${partyRelationshipType.partyRelationshipTypeId}`)
    }
  })
});

export {PartyRelationshipTypeType};
    