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
import {OrderItemShipGroupInputType} from '../../order/OrderItemShipGroup/OrderItemShipGroupInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderItemShipGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOrderItemShipGroup method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/orderItemShipGroups/add?`, null, req);
  }
};
export {createOrderItemShipGroup};


const deleteOrderItemShipGroupByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOrderItemShipGroupByIdUpdated method',
  args:{orderItemShipGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderItem/orderItemShipGroups/${args.orderItemShipGroupId}?`, null, req);
  }
};
export {deleteOrderItemShipGroupByIdUpdated};


const updateOrderItemShipGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOrderItemShipGroup method',
  args:{orderItemShipGroupToBeUpdated: {type: OrderItemShipGroupInputType},shipGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderItem/orderItemShipGroups/${args.shipGroupSeqId}?`, args.orderItemShipGroupToBeUpdated, req);
  }
};
export {updateOrderItemShipGroup};
