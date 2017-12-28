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
import {OrderAttributeInputType} from '../../order/OrderAttribute/OrderAttributeInputType.js';
import {OrderAttributeResponseType} from '../../order/OrderAttribute/OrderAttributeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderAttribute = {
  type: OrderAttributeResponseType,
  description: 'mutation for ofbiz createOrderAttribute method',
  args:{orderAttributeToBeAdded: {type: OrderAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderAttributes/add?`, args.orderAttributeToBeAdded, req);
  }
};
export {createOrderAttribute};


const updateOrderAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderAttribute method',
  args:{orderAttributeToBeUpdated: {type: OrderAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderAttributes/${args.attrName}?`, args.orderAttributeToBeUpdated, req);
  }
};
export {updateOrderAttribute};


const deleteOrderAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderAttributeByIdUpdated method',
  args:{orderAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderAttributes/${args.orderAttributeId}?`, null, req);
  }
};
export {deleteOrderAttributeByIdUpdated};
