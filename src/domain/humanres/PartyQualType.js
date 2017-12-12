
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

import {PartyQualType} from '../humanres/PartyQual.js';


const PartyQualTypeType = new GraphQLObjectType({
  name: 'PartyQualTypeType',
  description: 'Type for PartyQualType in humanres',

  fields: () => ({
    parentType: {
      type: PartyQualTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (partyQualType, args, {loaders}) => loaders.ofbiz.load(`humanres/partyQual/partyQualTypes/find?partyQualTypeId=${partyQualType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    partyQualTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    partyQuals: {
      type: new GraphQLList(PartyQualType),
      args : {},
      resolve: (partyQualType, args, {loaders}) => loaders.ofbizArray.load(`humanres/partyQuals/find?partyQualTypeId=${partyQualType.partyQualTypeId}`)
    },
    partyQualTypes: {
      type: new GraphQLList(PartyQualTypeType),
      args : {},
      resolve: (partyQualType, args, {loaders}) => loaders.ofbizArray.load(`humanres/partyQual/partyQualTypes/find?partyQualTypeId=${partyQualType.partyQualTypeId}`)
    }
  })
});

export {PartyQualTypeType};
    




const PartyQualTypeInputType = new GraphQLInputObjectType({
  name: 'PartyQualTypeInputType',
  description: 'input type for PartyQualType in humanres',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    partyQualTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {PartyQualTypeInputType};
    