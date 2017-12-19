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
import {OrderAdjustmentBillingInputType} from '../../order/OrderAdjustmentBilling/OrderAdjustmentBillingInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createOrderAdjustmentBilling = {
  type: GraphQLString,
  description: 'mutation for ofbiz createOrderAdjustmentBilling method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderAdjustment/orderAdjustmentBillings/add?`, null, req);
  }
};
export {createOrderAdjustmentBilling};


const updateOrderAdjustmentBilling = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderAdjustmentBilling method',
  args:{orderAdjustmentBillingToBeUpdated: {type: OrderAdjustmentBillingInputType},invoiceItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderAdjustment/orderAdjustmentBillings/${args.invoiceItemSeqId}?`, args.orderAdjustmentBillingToBeUpdated, req);
  }
};
export {updateOrderAdjustmentBilling};


const deleteOrderAdjustmentBillingByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderAdjustmentBillingByIdUpdated method',
  args:{orderAdjustmentBillingId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderAdjustment/orderAdjustmentBillings/${args.orderAdjustmentBillingId}?`, null, req);
  }
};
export {deleteOrderAdjustmentBillingByIdUpdated};
