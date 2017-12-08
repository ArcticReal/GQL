
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
import {RoleTypeType} from '../party/RoleType.js';


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
    partyRelationshipTypes: {
      type: new GraphQLList(PartyRelationshipTypeType),
      args : {partyRelationshipTypeId: {type: GraphQLString}},
      resolve: (partyRelationshipType, args, {loaders}) => loaders.ofbizArray.load(`partyRelationshipTypes/find?partyRelationshipTypeId=${partyRelationshipType.partyRelationshipTypeId}`)
    },
    partyRelationships: {
      type: new GraphQLList(PartyRelationshipType),
      args : {partyRelationshipTypeId: {type: GraphQLString}},
      resolve: (partyRelationshipType, args, {loaders}) => loaders.ofbizArray.load(`partyRelationships/find?partyRelationshipTypeId=${partyRelationshipType.partyRelationshipTypeId}`)
    }
  })
});

export {PartyRelationshipTypeType};
    




const PartyRelationshipTypeInputType = new GraphQLInputObjectType({
  name: 'PartyRelationshipTypeInputType',
  description: 'input type for PartyRelationshipType in party',

  fields: () => ({
    partyRelationshipName: {type: GraphQLString},
    roleTypeIdValidTo: {type: GraphQLString},
    partyRelationshipTypeId: {type: GraphQLString},
    roleTypeIdValidFrom: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {PartyRelationshipTypeInputType};
    