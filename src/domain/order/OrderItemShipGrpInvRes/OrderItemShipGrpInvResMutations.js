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
import {OrderItemShipGrpInvResInputType} from '../../order/OrderItemShipGrpInvRes/OrderItemShipGrpInvResInputType.js';
import {OrderItemShipGrpInvResResponseType} from '../../order/OrderItemShipGrpInvRes/OrderItemShipGrpInvResResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderItemShipGrpInvRes = {
  type: OrderItemShipGrpInvResResponseType,
  description: 'mutation for ofbiz createOrderItemShipGrpInvRes method',
  args:{orderItemShipGrpInvResToBeAdded: {type: OrderItemShipGrpInvResInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/orderItemShipGrpInvRess/add?`, args.orderItemShipGrpInvResToBeAdded, req);
  }
};
export {createOrderItemShipGrpInvRes};


const updateOrderItemShipGrpInvRes = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderItemShipGrpInvRes method',
  args:{orderItemShipGrpInvResToBeUpdated: {type: OrderItemShipGrpInvResInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderItem/orderItemShipGrpInvRess/${args.nullVal}?`, args.orderItemShipGrpInvResToBeUpdated, req);
  }
};
export {updateOrderItemShipGrpInvRes};


const deleteOrderItemShipGrpInvResByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderItemShipGrpInvResByIdUpdated method',
  args:{orderItemShipGrpInvResId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderItem/orderItemShipGrpInvRess/${args.orderItemShipGrpInvResId}?`, null, req);
  }
};
export {deleteOrderItemShipGrpInvResByIdUpdated};
