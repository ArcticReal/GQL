
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {TimeEntryType} from '../workeffort/TimeEntryType.js';
import {RateAmountType} from '../accounting/RateAmountType.js';
import {PartyRateType} from '../accounting/PartyRateType.js';


const RateTypeType = new GraphQLObjectType({
  name: 'RateTypeType',
  description: 'Type for RateType in accounting',

  fields: () => ({
    rateTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    timeEntry: {
      type: new GraphQLList(TimeEntryType),
      args : {rateTypeId: {type: GraphQLString}},
      resolve: (rateType, args, {loaders}) => loaders.ofbizArray.load(`timeEntrys/find?rateTypeId=${rateType.rateTypeId}`)
    },
    partyRate: {
      type: new GraphQLList(PartyRateType),
      args : {rateTypeId: {type: GraphQLString}},
      resolve: (rateType, args, {loaders}) => loaders.ofbizArray.load(`partyRates/find?rateTypeId=${rateType.rateTypeId}`)
    },
    rateAmount: {
      type: new GraphQLList(RateAmountType),
      args : {rateTypeId: {type: GraphQLString}},
      resolve: (rateType, args, {loaders}) => loaders.ofbizArray.load(`rateAmounts/find?rateTypeId=${rateType.rateTypeId}`)
    }
  })
});

export {RateTypeType};
    