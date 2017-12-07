
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
import {RoleTypeType} from '../party/RoleTypeType.js';


const PartyRelationshipTypeType = new GraphQLObjectType({
  name: 'PartyRelationshipTypeType',
  description: 'Type for PartyRelationshipType in party',

  fields: () => ({
    partyRelationshipName: {type: GraphQLString},
    roleTypeValidTo: {
      type: RoleTypeType,
      args : {roleTypeIdValidTo: {type: GraphQLString}},
      resolve: (partyRelationshipType, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${partyRelationshipType.roleTypeIdValidTo}`)
    },
    partyRelationshipTypeId: {type: GraphQLString},
    roleTypeValidFrom: {
      type: RoleTypeType,
      args : {roleTypeIdValidFrom: {type: GraphQLString}},
      resolve: (partyRelationshipType, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${partyRelationshipType.roleTypeIdValidFrom}`)
    },
    parentType: {
      type: PartyRelationshipTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (partyRelationshipType, args, {loaders}) => loaders.ofbiz.load(`partyRelationshipTypes/find?partyRelationshipTypeId=${partyRelationshipType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    partyRelationshipType: {
      type: new GraphQLList(PartyRelationshipTypeType),
      args : {partyRelationshipTypeId: {type: GraphQLString}},
      resolve: (partyRelationshipType, args, {loaders}) => loaders.ofbizArray.load(`partyRelationshipTypes/find?partyRelationshipTypeId=${partyRelationshipType.partyRelationshipTypeId}`)
    },
    partyRelationship: {
      type: new GraphQLList(PartyRelationshipType),
      args : {partyRelationshipTypeId: {type: GraphQLString}},
      resolve: (partyRelationshipType, args, {loaders}) => loaders.ofbizArray.load(`partyRelationships/find?partyRelationshipTypeId=${partyRelationshipType.partyRelationshipTypeId}`)
    }
  })
});

export {PartyRelationshipTypeType};
    