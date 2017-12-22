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
import {OrderAdjustmentBillingResponseType} from '../../order/OrderAdjustmentBilling/OrderAdjustmentBillingResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderAdjustmentBilling = {
  type: OrderAdjustmentBillingResponseType,
  description: 'mutation for ofbiz createOrderAdjustmentBilling method',
  args:{orderAdjustmentBillingToBeAdded: {type: OrderAdjustmentBillingInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderAdjustment/orderAdjustmentBillings/add?`, args.orderAdjustmentBillingToBeAdded, req);
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
