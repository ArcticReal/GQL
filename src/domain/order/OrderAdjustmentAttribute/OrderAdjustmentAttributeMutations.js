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
import {OrderAdjustmentAttributeInputType} from '../../order/OrderAdjustmentAttribute/OrderAdjustmentAttributeInputType.js';
import {OrderAdjustmentAttributeResponseType} from '../../order/OrderAdjustmentAttribute/OrderAdjustmentAttributeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderAdjustmentAttribute = {
  type: OrderAdjustmentAttributeResponseType,
  description: 'mutation for ofbiz createOrderAdjustmentAttribute method',
  args:{orderAdjustmentAttributeToBeAdded: {type: OrderAdjustmentAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderAdjustment/orderAdjustmentAttributes/add?`, args.orderAdjustmentAttributeToBeAdded, req);
  }
};
export {createOrderAdjustmentAttribute};


const updateOrderAdjustmentAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderAdjustmentAttribute method',
  args:{orderAdjustmentAttributeToBeUpdated: {type: OrderAdjustmentAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderAdjustment/orderAdjustmentAttributes/${args.attrName}?`, args.orderAdjustmentAttributeToBeUpdated, req);
  }
};
export {updateOrderAdjustmentAttribute};


const deleteOrderAdjustmentAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderAdjustmentAttributeByIdUpdated method',
  args:{orderAdjustmentAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderAdjustment/orderAdjustmentAttributes/${args.orderAdjustmentAttributeId}?`, null, req);
  }
};
export {deleteOrderAdjustmentAttributeByIdUpdated};
