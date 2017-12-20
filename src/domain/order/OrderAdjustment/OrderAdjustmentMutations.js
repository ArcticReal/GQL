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
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderAdjustment = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOrderAdjustment method',
  args:{orderAdjustmentToBeAdded: {type: OrderAdjustmentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderAdjustments/add?`, args.orderAdjustmentToBeAdded, req);
  }
};
export {createOrderAdjustment};


const updateOrderAdjustment = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOrderAdjustment method',
  args:{orderAdjustmentToBeUpdated: {type: OrderAdjustmentInputType},orderAdjustmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderAdjustments/${args.orderAdjustmentId}?`, args.orderAdjustmentToBeUpdated, req);
  }
};
export {updateOrderAdjustment};


const deleteOrderAdjustmentByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOrderAdjustmentByIdUpdated method',
  args:{orderAdjustmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderAdjustments/${args.orderAdjustmentId}?`, null, req);
  }
};
export {deleteOrderAdjustmentByIdUpdated};
