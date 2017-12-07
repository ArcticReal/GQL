
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
import {RateTypeType} from '../accounting/RateTypeType.js';


const PartyRateType = new GraphQLObjectType({
  name: 'PartyRateType',
  description: 'Type for PartyRate in accounting',

  fields: () => ({
    percentageUsed: {type: GraphQLFloat},
    fromDate: {type: GraphQLString},
    rateType: {
      type: RateTypeType,
      args : {rateTypeId: {type: GraphQLString}},
      resolve: (partyRate, args, {loaders}) => loaders.ofbiz.load(`rateTypes/find?rateTypeId=${partyRate.rateTypeId}`)
    },
    defaultRate: {type: GraphQLBoolean},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRate, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${partyRate.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {PartyRateType};
    