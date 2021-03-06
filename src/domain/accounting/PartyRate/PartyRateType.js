
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
import {RateTypeType} from '../../accounting/RateType/RateTypeType.js';


const PartyRateType = new GraphQLObjectType({
  name: 'PartyRateType',
  description: 'Type for PartyRate in accounting',

  fields: () => ({
    percentageUsed: {type: GraphQLFloat},
    fromDate: {type: GraphQLString},
    rateType: {
      type: RateTypeType,
      args : {rateTypeId: {type: GraphQLString}},
      resolve: (partyRate, args, {loaders}) => loaders.ofbiz.load(`accounting/rateTypes/find?rateTypeId=${partyRate.rateTypeId}`)
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
    