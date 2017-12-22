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
import {OrderItemShipGroupResponseType} from '../../order/OrderItemShipGroup/OrderItemShipGroupResponseType.js';
import {OrderItemShipGroupInputType} from '../../order/OrderItemShipGroup/OrderItemShipGroupInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderItemShipGroup = {
  type: OrderItemShipGroupResponseType,
  description: 'mutation for ofbiz createOrderItemShipGroup method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/orderItemShipGroups/add?`, null, req);
  }
};
export {createOrderItemShipGroup};


const deleteOrderItemShipGroupByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderItemShipGroupByIdUpdated method',
  args:{orderItemShipGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderItem/orderItemShipGroups/${args.orderItemShipGroupId}?`, null, req);
  }
};
export {deleteOrderItemShipGroupByIdUpdated};


const updateOrderItemShipGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderItemShipGroup method',
  args:{orderItemShipGroupToBeUpdated: {type: OrderItemShipGroupInputType},shipGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderItem/orderItemShipGroups/${args.shipGroupSeqId}?`, args.orderItemShipGroupToBeUpdated, req);
  }
};
export {updateOrderItemShipGroup};
