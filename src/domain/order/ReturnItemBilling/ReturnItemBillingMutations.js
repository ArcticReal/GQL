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
import {ReturnItemBillingInputType} from '../../order/ReturnItemBilling/ReturnItemBillingInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createReturnItemBilling = {
  type: ResopnseType,
  description: 'mutation for ofbiz createReturnItemBilling method',
  args:{returnItemBillingToBeAdded: {type: ReturnItemBillingInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/returnItem/returnItemBillings/add?`, args.returnItemBillingToBeAdded, req);
  }
};
export {createReturnItemBilling};


const updateReturnItemBilling = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateReturnItemBilling method',
  args:{returnItemBillingToBeUpdated: {type: ReturnItemBillingInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/returnItem/returnItemBillings/${args.nullVal}?`, args.returnItemBillingToBeUpdated, req);
  }
};
export {updateReturnItemBilling};


const deleteReturnItemBillingByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteReturnItemBillingByIdUpdated method',
  args:{returnItemBillingId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/returnItem/returnItemBillings/${args.returnItemBillingId}?`, null, req);
  }
};
export {deleteReturnItemBillingByIdUpdated};
