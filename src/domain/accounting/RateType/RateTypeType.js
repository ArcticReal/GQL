
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

import {TimeEntryType} from '../../workeffort/TimeEntry/TimeEntryType.js';
import {RateAmountType} from '../../accounting/RateAmount/RateAmountType.js';
import {PartyRateType} from '../../accounting/PartyRate/PartyRateType.js';


const RateTypeType = new GraphQLObjectType({
  name: 'RateTypeType',
  description: 'Type for RateType in accounting',

  fields: () => ({
    rateTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    timeEntries: {
      type: new GraphQLList(TimeEntryType),
      args : {},
      resolve: (rateType, args, {loaders}) => loaders.ofbizArray.load(`workeffort/timeEntrys/find?rateTypeId=${rateType.rateTypeId}`)
    },
    partyRates: {
      type: new GraphQLList(PartyRateType),
      args : {},
      resolve: (rateType, args, {loaders}) => loaders.ofbizArray.load(`accounting/partyRates/find?rateTypeId=${rateType.rateTypeId}`)
    },
    rateAmounts: {
      type: new GraphQLList(RateAmountType),
      args : {},
      resolve: (rateType, args, {loaders}) => loaders.ofbizArray.load(`accounting/rateAmounts/find?rateTypeId=${rateType.rateTypeId}`)
    }
  })
});

export {RateTypeType};
    