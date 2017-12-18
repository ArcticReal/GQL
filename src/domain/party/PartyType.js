
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

import {PartyType} from '../party/Party.js';
import {PartyNeedType} from '../party/PartyNeed.js';
import {PartyTypeAttrType} from '../party/PartyTypeAttr.js';


const PartyTypeType = new GraphQLObjectType({
  name: 'PartyTypeType',
  description: 'Type for PartyType in party',

  fields: () => ({
    partyTypeId: {type: GraphQLString},
    parentType: {
      type: PartyTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (partyType, args, {loaders}) => loaders.ofbiz.load(`party/party/partyTypes/find?partyTypeId=${partyType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    parties: {
      type: new GraphQLList(PartyType),
      args : {},
      resolve: (partyType, args, {loaders}) => loaders.ofbizArray.load(`/partys/find?partyTypeId=${partyType.partyTypeId}`)
    },
    partyNeeds: {
      type: new GraphQLList(PartyNeedType),
      args : {},
      resolve: (partyType, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyNeeds/find?partyTypeId=${partyType.partyTypeId}`)
    },
    partyTypes: {
      type: new GraphQLList(PartyTypeType),
      args : {},
      resolve: (partyType, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyTypes/find?partyTypeId=${partyType.partyTypeId}`)
    },
    partyTypeAttrs: {
      type: new GraphQLList(PartyTypeAttrType),
      args : {},
      resolve: (partyType, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyTypeAttrs/find?partyTypeId=${partyType.partyTypeId}`)
    }
  })
});

export {PartyTypeType};
    




const PartyTypeInputType = new GraphQLInputObjectType({
  name: 'PartyTypeInputType',
  description: 'input type for PartyType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    partyTypeId: {type: GraphQLString}
  })
});

export {PartyTypeInputType};
    