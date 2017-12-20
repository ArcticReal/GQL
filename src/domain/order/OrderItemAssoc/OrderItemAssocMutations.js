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
import {OrderItemAssocInputType} from '../../order/OrderItemAssoc/OrderItemAssocInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderItemAssoc = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOrderItemAssoc method',
  args:{orderItemAssocToBeAdded: {type: OrderItemAssocInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/orderItemAssocs/add?`, args.orderItemAssocToBeAdded, req);
  }
};
export {createOrderItemAssoc};


const updateOrderItemAssoc = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOrderItemAssoc method',
  args:{orderItemAssocToBeUpdated: {type: OrderItemAssocInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderItem/orderItemAssocs/${args.nullVal}?`, args.orderItemAssocToBeUpdated, req);
  }
};
export {updateOrderItemAssoc};


const deleteOrderItemAssocByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOrderItemAssocByIdUpdated method',
  args:{orderItemAssocId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderItem/orderItemAssocs/${args.orderItemAssocId}?`, null, req);
  }
};
export {deleteOrderItemAssocByIdUpdated};
