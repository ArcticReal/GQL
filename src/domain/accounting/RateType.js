
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

import {TimeEntryType} from '../workeffort/TimeEntry.js';
import {RateAmountType} from '../accounting/RateAmount.js';
import {PartyRateType} from '../accounting/PartyRate.js';


const RateTypeType = new GraphQLObjectType({
  name: 'RateTypeType',
  description: 'Type for RateType in accounting',

  fields: () => ({
    rateTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    timeEntries: {
      type: new GraphQLList(TimeEntryType),
      args : {rateTypeId: {type: GraphQLString}},
      resolve: (rateType, args, {loaders}) => loaders.ofbizArray.load(`timeEntrys/find?rateTypeId=${rateType.rateTypeId}`)
    },
    partyRates: {
      type: new GraphQLList(PartyRateType),
      args : {rateTypeId: {type: GraphQLString}},
      resolve: (rateType, args, {loaders}) => loaders.ofbizArray.load(`partyRates/find?rateTypeId=${rateType.rateTypeId}`)
    },
    rateAmounts: {
      type: new GraphQLList(RateAmountType),
      args : {rateTypeId: {type: GraphQLString}},
      resolve: (rateType, args, {loaders}) => loaders.ofbizArray.load(`rateAmounts/find?rateTypeId=${rateType.rateTypeId}`)
    }
  })
});

export {RateTypeType};
    




const RateTypeInputType = new GraphQLInputObjectType({
  name: 'RateTypeInputType',
  description: 'input type for RateType in accounting',

  fields: () => ({
    rateTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {RateTypeInputType};
    