
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyType} from '../party/PartyType.js';
import {PartyNeedType} from '../party/PartyNeedType.js';
import {PartyTypeAttrType} from '../party/PartyTypeAttrType.js';


const PartyTypeType = new GraphQLObjectType({
  name: 'PartyTypeType',
  description: 'Type for PartyType in party',

  fields: () => ({
    partyTypeId: {type: GraphQLString},
    parentType: {
      type: PartyTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (partyType, args, {loaders}) => loaders.ofbiz.load(`partyTypes/find?partyTypeId=${partyType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    party: {
      type: new GraphQLList(PartyType),
      args : {partyTypeId: {type: GraphQLString}},
      resolve: (partyType, args, {loaders}) => loaders.ofbizArray.load(`partys/find?partyTypeId=${partyType.partyTypeId}`)
    },
    partyNeed: {
      type: new GraphQLList(PartyNeedType),
      args : {partyTypeId: {type: GraphQLString}},
      resolve: (partyType, args, {loaders}) => loaders.ofbizArray.load(`partyNeeds/find?partyTypeId=${partyType.partyTypeId}`)
    },
    partyType: {
      type: new GraphQLList(PartyTypeType),
      args : {partyTypeId: {type: GraphQLString}},
      resolve: (partyType, args, {loaders}) => loaders.ofbizArray.load(`partyTypes/find?partyTypeId=${partyType.partyTypeId}`)
    },
    partyTypeAttr: {
      type: new GraphQLList(PartyTypeAttrType),
      args : {partyTypeId: {type: GraphQLString}},
      resolve: (partyType, args, {loaders}) => loaders.ofbizArray.load(`partyTypeAttrs/find?partyTypeId=${partyType.partyTypeId}`)
    }
  })
});

export {PartyTypeType};
    