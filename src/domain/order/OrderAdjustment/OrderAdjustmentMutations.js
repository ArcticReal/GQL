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
import {OrderAdjustmentInputType} from '../../order/OrderAdjustment/OrderAdjustmentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createOrderAdjustment = {
  type: GraphQLString,
  description: 'mutation for ofbiz createOrderAdjustment method',
  args:{orderAdjustmentToBeAdded: {type: OrderAdjustmentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderAdjustments/add?`, args.orderAdjustmentToBeAdded, req);
  }
};
export {createOrderAdjustment};


const updateOrderAdjustment = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderAdjustment method',
  args:{orderAdjustmentToBeUpdated: {type: OrderAdjustmentInputType},orderAdjustmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderAdjustments/${args.orderAdjustmentId}?`, args.orderAdjustmentToBeUpdated, req);
  }
};
export {updateOrderAdjustment};


const deleteOrderAdjustmentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderAdjustmentByIdUpdated method',
  args:{orderAdjustmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderAdjustments/${args.orderAdjustmentId}?`, null, req);
  }
};
export {deleteOrderAdjustmentByIdUpdated};
