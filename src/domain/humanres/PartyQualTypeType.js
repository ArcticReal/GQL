
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyQualType} from '../humanres/PartyQualType.js';


const PartyQualTypeType = new GraphQLObjectType({
  name: 'PartyQualTypeType',
  description: 'Type for PartyQualType in humanres',

  fields: () => ({
    parentType: {
      type: PartyQualTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (partyQualType, args, {loaders}) => loaders.ofbiz.load(`partyQualTypes/find?partyQualTypeId=${partyQualType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    partyQualTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    partyQual: {
      type: new GraphQLList(PartyQualType),
      args : {partyQualTypeId: {type: GraphQLString}},
      resolve: (partyQualType, args, {loaders}) => loaders.ofbizArray.load(`partyQuals/find?partyQualTypeId=${partyQualType.partyQualTypeId}`)
    },
    partyQualType: {
      type: new GraphQLList(PartyQualTypeType),
      args : {partyQualTypeId: {type: GraphQLString}},
      resolve: (partyQualType, args, {loaders}) => loaders.ofbizArray.load(`partyQualTypes/find?partyQualTypeId=${partyQualType.partyQualTypeId}`)
    }
  })
});

export {PartyQualTypeType};
    