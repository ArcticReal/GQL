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
import {OrderShipmentInputType} from '../../order/OrderShipment/OrderShipmentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createOrderShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz createOrderShipment method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderShipments/add?`, null, req);
  }
};
export {createOrderShipment};


const updateOrderShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderShipment method',
  args:{orderShipmentToBeUpdated: {type: OrderShipmentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderShipments/${args.nullVal}?`, args.orderShipmentToBeUpdated, req);
  }
};
export {updateOrderShipment};


const deleteOrderShipmentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderShipmentByIdUpdated method',
  args:{orderShipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderShipments/${args.orderShipmentId}?`, null, req);
  }
};
export {deleteOrderShipmentByIdUpdated};
