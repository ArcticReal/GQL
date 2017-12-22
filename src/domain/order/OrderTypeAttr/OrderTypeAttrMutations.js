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
import {OrderTypeAttrResponseType} from '../../order/OrderTypeAttr/OrderTypeAttrResponseType.js';
import {OrderTypeAttrInputType} from '../../order/OrderTypeAttr/OrderTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderTypeAttr = {
  type: OrderTypeAttrResponseType,
  description: 'mutation for ofbiz createOrderTypeAttr method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderType/orderTypeAttrs/add?`, null, req);
  }
};
export {createOrderTypeAttr};


const updateOrderTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderTypeAttr method',
  args:{orderTypeAttrToBeUpdated: {type: OrderTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderType/orderTypeAttrs/${args.attrName}?`, args.orderTypeAttrToBeUpdated, req);
  }
};
export {updateOrderTypeAttr};


const deleteOrderTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderTypeAttrByIdUpdated method',
  args:{orderTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderType/orderTypeAttrs/${args.orderTypeAttrId}?`, null, req);
  }
};
export {deleteOrderTypeAttrByIdUpdated};
