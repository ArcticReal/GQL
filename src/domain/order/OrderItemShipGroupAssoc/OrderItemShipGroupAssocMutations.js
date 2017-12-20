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
import {OrderItemShipGroupAssocInputType} from '../../order/OrderItemShipGroupAssoc/OrderItemShipGroupAssocInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderItemShipGroupAssoc = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOrderItemShipGroupAssoc method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/orderItemShipGroupAssocs/add?`, null, req);
  }
};
export {createOrderItemShipGroupAssoc};


const updateOrderItemShipGroupAssoc = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOrderItemShipGroupAssoc method',
  args:{orderItemShipGroupAssocToBeUpdated: {type: OrderItemShipGroupAssocInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderItem/orderItemShipGroupAssocs/${args.nullVal}?`, args.orderItemShipGroupAssocToBeUpdated, req);
  }
};
export {updateOrderItemShipGroupAssoc};


const deleteOrderItemShipGroupAssocByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOrderItemShipGroupAssocByIdUpdated method',
  args:{orderItemShipGroupAssocId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderItem/orderItemShipGroupAssocs/${args.orderItemShipGroupAssocId}?`, null, req);
  }
};
export {deleteOrderItemShipGroupAssocByIdUpdated};
