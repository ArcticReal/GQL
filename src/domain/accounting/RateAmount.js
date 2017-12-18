
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

import {WorkEffortType} from '../workeffort/WorkEffort.js';
import {PartyType} from '../party/Party.js';
import {EmplPositionTypeType} from '../humanres/EmplPositionType.js';
import {RateTypeType} from '../accounting/RateType.js';


const RateAmountType = new GraphQLObjectType({
  name: 'RateAmountType',
  description: 'Type for RateAmount in accounting',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (rateAmount, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${rateAmount.workEffortId}`)
    },
    fromDate: {type: GraphQLString},
    rateType: {
      type: RateTypeType,
      args : {rateTypeId: {type: GraphQLString}},
      resolve: (rateAmount, args, {loaders}) => loaders.ofbiz.load(`accounting/rateTypes/find?rateTypeId=${rateAmount.rateTypeId}`)
    },
    rateAmount: {type: GraphQLFloat},
    periodTypeId: {type: GraphQLString},
    emplPositionType: {
      type: EmplPositionTypeType,
      args : {emplPositionTypeId: {type: GraphQLString}},
      resolve: (rateAmount, args, {loaders}) => loaders.ofbiz.load(`humanres/emplPosition/emplPositionTypes/find?emplPositionTypeId=${rateAmount.emplPositionTypeId}`)
    },
    rateCurrencyUomId: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (rateAmount, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${rateAmount.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {RateAmountType};
    




const RateAmountInputType = new GraphQLInputObjectType({
  name: 'RateAmountInputType',
  description: 'input type for RateAmount',

  fields: () => ({
    emplPositionTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    periodTypeId: {type: GraphQLString},
    rateAmount: {type: GraphQLFloat},
    rateCurrencyUomId: {type: GraphQLString},
    rateTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {RateAmountInputType};
    