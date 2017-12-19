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
import {OrderItemTypeInputType} from '../../order/OrderItemType/OrderItemTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createOrderItemType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createOrderItemType method',
  args:{orderItemTypeToBeAdded: {type: OrderItemTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/orderItemTypes/add?`, args.orderItemTypeToBeAdded, req);
  }
};
export {createOrderItemType};


const updateOrderItemType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderItemType method',
  args:{orderItemTypeToBeUpdated: {type: OrderItemTypeInputType},orderItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderItem/orderItemTypes/${args.orderItemTypeId}?`, args.orderItemTypeToBeUpdated, req);
  }
};
export {updateOrderItemType};


const deleteOrderItemTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderItemTypeByIdUpdated method',
  args:{orderItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderItem/orderItemTypes/${args.orderItemTypeId}?`, null, req);
  }
};
export {deleteOrderItemTypeByIdUpdated};
