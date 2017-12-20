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
import {OrderAdjustmentTypeInputType} from '../../order/OrderAdjustmentType/OrderAdjustmentTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderAdjustmentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOrderAdjustmentType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderAdjustment/orderAdjustmentTypes/add?`, null, req);
  }
};
export {createOrderAdjustmentType};


const updateOrderAdjustmentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOrderAdjustmentType method',
  args:{orderAdjustmentTypeToBeUpdated: {type: OrderAdjustmentTypeInputType},orderAdjustmentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderAdjustment/orderAdjustmentTypes/${args.orderAdjustmentTypeId}?`, args.orderAdjustmentTypeToBeUpdated, req);
  }
};
export {updateOrderAdjustmentType};


const deleteOrderAdjustmentTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOrderAdjustmentTypeByIdUpdated method',
  args:{orderAdjustmentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderAdjustment/orderAdjustmentTypes/${args.orderAdjustmentTypeId}?`, null, req);
  }
};
export {deleteOrderAdjustmentTypeByIdUpdated};
