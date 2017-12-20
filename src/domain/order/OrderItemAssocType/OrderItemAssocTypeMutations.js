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
import {OrderItemAssocTypeInputType} from '../../order/OrderItemAssocType/OrderItemAssocTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderItemAssocType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOrderItemAssocType method',
  args:{orderItemAssocTypeToBeAdded: {type: OrderItemAssocTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/orderItemAssocTypes/add?`, args.orderItemAssocTypeToBeAdded, req);
  }
};
export {createOrderItemAssocType};


const updateOrderItemAssocType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOrderItemAssocType method',
  args:{orderItemAssocTypeToBeUpdated: {type: OrderItemAssocTypeInputType},orderItemAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderItem/orderItemAssocTypes/${args.orderItemAssocTypeId}?`, args.orderItemAssocTypeToBeUpdated, req);
  }
};
export {updateOrderItemAssocType};


const deleteOrderItemAssocTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOrderItemAssocTypeByIdUpdated method',
  args:{orderItemAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderItem/orderItemAssocTypes/${args.orderItemAssocTypeId}?`, null, req);
  }
};
export {deleteOrderItemAssocTypeByIdUpdated};
