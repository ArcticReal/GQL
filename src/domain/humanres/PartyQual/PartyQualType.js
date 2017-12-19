
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

import {PartyType} from '../../party/Party/PartyType.js';
import {PartyQualTypeType} from '../../humanres/PartyQualType/PartyQualTypeType.js';


const PartyQualType = new GraphQLObjectType({
  name: 'PartyQualType',
  description: 'Type for PartyQual in humanres',

  fields: () => ({
    qualificationDesc: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    verifStatusId: {type: GraphQLString},
    partyQualType: {
      type: PartyQualTypeType,
      args : {partyQualTypeId: {type: GraphQLString}},
      resolve: (partyQual, args, {loaders}) => loaders.ofbiz.load(`humanres/partyQual/partyQualTypes/find?partyQualTypeId=${partyQual.partyQualTypeId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyQual, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${partyQual.partyId}`)
    },
    title: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyQualType};
    