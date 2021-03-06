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
import {OrderItemTypeAttrInputType} from '../../order/OrderItemTypeAttr/OrderItemTypeAttrInputType.js';
import {OrderItemTypeAttrResponseType} from '../../order/OrderItemTypeAttr/OrderItemTypeAttrResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderItemTypeAttr = {
  type: OrderItemTypeAttrResponseType,
  description: 'mutation for ofbiz createOrderItemTypeAttr method',
  args:{orderItemTypeAttrToBeAdded: {type: OrderItemTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/orderItemTypeAttrs/add?`, args.orderItemTypeAttrToBeAdded, req);
  }
};
export {createOrderItemTypeAttr};


const updateOrderItemTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderItemTypeAttr method',
  args:{orderItemTypeAttrToBeUpdated: {type: OrderItemTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderItem/orderItemTypeAttrs/${args.attrName}?`, args.orderItemTypeAttrToBeUpdated, req);
  }
};
export {updateOrderItemTypeAttr};


const deleteOrderItemTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderItemTypeAttrByIdUpdated method',
  args:{orderItemTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderItem/orderItemTypeAttrs/${args.orderItemTypeAttrId}?`, null, req);
  }
};
export {deleteOrderItemTypeAttrByIdUpdated};
