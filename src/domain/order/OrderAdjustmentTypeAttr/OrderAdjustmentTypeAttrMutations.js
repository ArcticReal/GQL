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
import {OrderAdjustmentTypeAttrInputType} from '../../order/OrderAdjustmentTypeAttr/OrderAdjustmentTypeAttrInputType.js';
import {OrderAdjustmentTypeAttrResponseType} from '../../order/OrderAdjustmentTypeAttr/OrderAdjustmentTypeAttrResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderAdjustmentTypeAttr = {
  type: OrderAdjustmentTypeAttrResponseType,
  description: 'mutation for ofbiz createOrderAdjustmentTypeAttr method',
  args:{orderAdjustmentTypeAttrToBeAdded: {type: OrderAdjustmentTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderAdjustment/orderAdjustmentTypeAttrs/add?`, args.orderAdjustmentTypeAttrToBeAdded, req);
  }
};
export {createOrderAdjustmentTypeAttr};


const updateOrderAdjustmentTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderAdjustmentTypeAttr method',
  args:{orderAdjustmentTypeAttrToBeUpdated: {type: OrderAdjustmentTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderAdjustment/orderAdjustmentTypeAttrs/${args.attrName}?`, args.orderAdjustmentTypeAttrToBeUpdated, req);
  }
};
export {updateOrderAdjustmentTypeAttr};


const deleteOrderAdjustmentTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderAdjustmentTypeAttrByIdUpdated method',
  args:{orderAdjustmentTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderAdjustment/orderAdjustmentTypeAttrs/${args.orderAdjustmentTypeAttrId}?`, null, req);
  }
};
export {deleteOrderAdjustmentTypeAttrByIdUpdated};
