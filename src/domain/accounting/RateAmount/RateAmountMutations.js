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
import {RateAmountInputType} from '../../accounting/RateAmount/RateAmountInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createRateAmount = {
  type: ResopnseType,
  description: 'mutation for ofbiz createRateAmount method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/rateAmounts/add?`, null, req);
  }
};
export {createRateAmount};


const updateRateAmount = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateRateAmount method',
  args:{rateAmountToBeUpdated: {type: RateAmountInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/rateAmounts/${args.nullVal}?`, args.rateAmountToBeUpdated, req);
  }
};
export {updateRateAmount};


const deleteRateAmountByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteRateAmountByIdUpdated method',
  args:{rateAmountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/rateAmounts/${args.rateAmountId}?`, null, req);
  }
};
export {deleteRateAmountByIdUpdated};
