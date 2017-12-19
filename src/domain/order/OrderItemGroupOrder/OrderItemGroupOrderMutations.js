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
import {OrderItemGroupOrderInputType} from '../../order/OrderItemGroupOrder/OrderItemGroupOrderInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createOrderItemGroupOrder = {
  type: GraphQLString,
  description: 'mutation for ofbiz createOrderItemGroupOrder method',
  args:{orderItemGroupOrderToBeAdded: {type: OrderItemGroupOrderInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/orderItemGroupOrders/add?`, args.orderItemGroupOrderToBeAdded, req);
  }
};
export {createOrderItemGroupOrder};


const deleteOrderItemGroupOrderByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderItemGroupOrderByIdUpdated method',
  args:{orderItemGroupOrderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderItem/orderItemGroupOrders/${args.orderItemGroupOrderId}?`, null, req);
  }
};
export {deleteOrderItemGroupOrderByIdUpdated};


const updateOrderItemGroupOrder = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderItemGroupOrder method',
  args:{orderItemGroupOrderToBeUpdated: {type: OrderItemGroupOrderInputType},orderItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderItem/orderItemGroupOrders/${args.orderItemSeqId}?`, args.orderItemGroupOrderToBeUpdated, req);
  }
};
export {updateOrderItemGroupOrder};
