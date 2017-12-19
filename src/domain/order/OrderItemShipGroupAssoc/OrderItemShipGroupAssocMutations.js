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


const createOrderItemShipGroupAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz createOrderItemShipGroupAssoc method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/orderItemShipGroupAssocs/add?`, null, req);
  }
};
export {createOrderItemShipGroupAssoc};


const updateOrderItemShipGroupAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderItemShipGroupAssoc method',
  args:{orderItemShipGroupAssocToBeUpdated: {type: OrderItemShipGroupAssocInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderItem/orderItemShipGroupAssocs/${args.nullVal}?`, args.orderItemShipGroupAssocToBeUpdated, req);
  }
};
export {updateOrderItemShipGroupAssoc};


const deleteOrderItemShipGroupAssocByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderItemShipGroupAssocByIdUpdated method',
  args:{orderItemShipGroupAssocId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderItem/orderItemShipGroupAssocs/${args.orderItemShipGroupAssocId}?`, null, req);
  }
};
export {deleteOrderItemShipGroupAssocByIdUpdated};
