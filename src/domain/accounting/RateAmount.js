
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
    




const RateAmountInputType = new GraphQLInputObjectType({
  name: 'RateAmountInputType',
  description: 'input type for RateAmount in accounting',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    rateTypeId: {type: GraphQLString},
    rateAmount: {type: GraphQLFloat},
    periodTypeId: {type: GraphQLString},
    emplPositionTypeId: {type: GraphQLString},
    rateCurrencyUomId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {RateAmountInputType};
    