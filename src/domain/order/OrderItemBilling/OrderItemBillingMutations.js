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
import {OrderItemBillingInputType} from '../../order/OrderItemBilling/OrderItemBillingInputType.js';
import {OrderItemBillingResponseType} from '../../order/OrderItemBilling/OrderItemBillingResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderItemBilling = {
  type: OrderItemBillingResponseType,
  description: 'mutation for ofbiz createOrderItemBilling method',
  args:{orderItemBillingToBeAdded: {type: OrderItemBillingInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/orderItemBillings/add?`, args.orderItemBillingToBeAdded, req);
  }
};
export {createOrderItemBilling};


const updateOrderItemBilling = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderItemBilling method',
  args:{orderItemBillingToBeUpdated: {type: OrderItemBillingInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderItem/orderItemBillings/${args.nullVal}?`, args.orderItemBillingToBeUpdated, req);
  }
};
export {updateOrderItemBilling};


const deleteOrderItemBillingByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderItemBillingByIdUpdated method',
  args:{orderItemBillingId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderItem/orderItemBillings/${args.orderItemBillingId}?`, null, req);
  }
};
export {deleteOrderItemBillingByIdUpdated};
