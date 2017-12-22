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
import {OrderStatusResponseType} from '../../order/OrderStatus/OrderStatusResponseType.js';
import {OrderStatusInputType} from '../../order/OrderStatus/OrderStatusInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderStatus = {
  type: OrderStatusResponseType,
  description: 'mutation for ofbiz createOrderStatus method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderStatuss/add?`, null, req);
  }
};
export {createOrderStatus};


const updateOrderStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderStatus method',
  args:{orderStatusToBeUpdated: {type: OrderStatusInputType},orderStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderStatuss/${args.orderStatusId}?`, args.orderStatusToBeUpdated, req);
  }
};
export {updateOrderStatus};


const deleteOrderStatusByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderStatusByIdUpdated method',
  args:{orderStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderStatuss/${args.orderStatusId}?`, null, req);
  }
};
export {deleteOrderStatusByIdUpdated};
