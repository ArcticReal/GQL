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
import {OrderTypeAttrInputType} from '../../order/OrderTypeAttr/OrderTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOrderTypeAttr method',
  args:{orderTypeAttrToBeAdded: {type: OrderTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderType/orderTypeAttrs/add?`, args.orderTypeAttrToBeAdded, req);
  }
};
export {createOrderTypeAttr};


const updateOrderTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOrderTypeAttr method',
  args:{orderTypeAttrToBeUpdated: {type: OrderTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderType/orderTypeAttrs/${args.attrName}?`, args.orderTypeAttrToBeUpdated, req);
  }
};
export {updateOrderTypeAttr};


const deleteOrderTypeAttrByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOrderTypeAttrByIdUpdated method',
  args:{orderTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderType/orderTypeAttrs/${args.orderTypeAttrId}?`, null, req);
  }
};
export {deleteOrderTypeAttrByIdUpdated};
