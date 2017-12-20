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
import {OrderStatusInputType} from '../../order/OrderStatus/OrderStatusInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderStatus = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOrderStatus method',
  args:{orderStatusToBeAdded: {type: OrderStatusInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderStatuss/add?`, args.orderStatusToBeAdded, req);
  }
};
export {createOrderStatus};


const updateOrderStatus = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOrderStatus method',
  args:{orderStatusToBeUpdated: {type: OrderStatusInputType},orderStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderStatuss/${args.orderStatusId}?`, args.orderStatusToBeUpdated, req);
  }
};
export {updateOrderStatus};


const deleteOrderStatusByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOrderStatusByIdUpdated method',
  args:{orderStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderStatuss/${args.orderStatusId}?`, null, req);
  }
};
export {deleteOrderStatusByIdUpdated};
