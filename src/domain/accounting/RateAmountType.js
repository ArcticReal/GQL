
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {PartyType} from '../party/PartyType.js';
import {EmplPositionTypeType} from '../humanres/EmplPositionTypeType.js';
import {RateTypeType} from '../accounting/RateTypeType.js';


const RateAmountType = new GraphQLObjectType({
  name: 'RateAmountType',
  description: 'Type for RateAmount in accounting',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (rateAmount, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${rateAmount.workEffortId}`)
    },
    fromDate: {type: GraphQLString},
    rateType: {
      type: RateTypeType,
      args : {rateTypeId: {type: GraphQLString}},
      resolve: (rateAmount, args, {loaders}) => loaders.ofbiz.load(`rateTypes/find?rateTypeId=${rateAmount.rateTypeId}`)
    },
    rateAmount: {type: GraphQLFloat},
    periodTypeId: {type: GraphQLString},
    emplPositionType: {
      type: EmplPositionTypeType,
      args : {emplPositionTypeId: {type: GraphQLString}},
      resolve: (rateAmount, args, {loaders}) => loaders.ofbiz.load(`emplPositionTypes/find?emplPositionTypeId=${rateAmount.emplPositionTypeId}`)
    },
    rateCurrencyUomId: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (rateAmount, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${rateAmount.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {RateAmountType};
    