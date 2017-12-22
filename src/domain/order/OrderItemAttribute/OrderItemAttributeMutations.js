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
import {OrderItemAttributeInputType} from '../../order/OrderItemAttribute/OrderItemAttributeInputType.js';
import {OrderItemAttributeResponseType} from '../../order/OrderItemAttribute/OrderItemAttributeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderItemAttribute = {
  type: OrderItemAttributeResponseType,
  description: 'mutation for ofbiz createOrderItemAttribute method',
  args:{orderItemAttributeToBeAdded: {type: OrderItemAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/orderItemAttributes/add?`, args.orderItemAttributeToBeAdded, req);
  }
};
export {createOrderItemAttribute};


const updateOrderItemAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderItemAttribute method',
  args:{orderItemAttributeToBeUpdated: {type: OrderItemAttributeInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderItem/orderItemAttributes/${args.nullVal}?`, args.orderItemAttributeToBeUpdated, req);
  }
};
export {updateOrderItemAttribute};


const deleteOrderItemAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderItemAttributeByIdUpdated method',
  args:{orderItemAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderItem/orderItemAttributes/${args.orderItemAttributeId}?`, null, req);
  }
};
export {deleteOrderItemAttributeByIdUpdated};
