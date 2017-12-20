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
import {OrderItemInputType} from '../../order/OrderItem/OrderItemInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOrderItem method',
  args:{orderItemToBeAdded: {type: OrderItemInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItems/add?`, args.orderItemToBeAdded, req);
  }
};
export {createOrderItem};


const deleteOrderItemByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOrderItemByIdUpdated method',
  args:{orderItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderItems/${args.orderItemId}?`, null, req);
  }
};
export {deleteOrderItemByIdUpdated};


const updateOrderItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOrderItem method',
  args:{orderItemToBeUpdated: {type: OrderItemInputType},orderItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderItems/${args.orderItemSeqId}?`, args.orderItemToBeUpdated, req);
  }
};
export {updateOrderItem};
