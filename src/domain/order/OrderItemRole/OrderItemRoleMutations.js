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
import {OrderItemRoleInputType} from '../../order/OrderItemRole/OrderItemRoleInputType.js';
import {OrderItemRoleResponseType} from '../../order/OrderItemRole/OrderItemRoleResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderItemRole = {
  type: OrderItemRoleResponseType,
  description: 'mutation for ofbiz createOrderItemRole method',
  args:{orderItemRoleToBeAdded: {type: OrderItemRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/orderItemRoles/add?`, args.orderItemRoleToBeAdded, req);
  }
};
export {createOrderItemRole};


const updateOrderItemRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderItemRole method',
  args:{orderItemRoleToBeUpdated: {type: OrderItemRoleInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderItem/orderItemRoles/${args.nullVal}?`, args.orderItemRoleToBeUpdated, req);
  }
};
export {updateOrderItemRole};


const deleteOrderItemRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderItemRoleByIdUpdated method',
  args:{orderItemRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderItem/orderItemRoles/${args.orderItemRoleId}?`, null, req);
  }
};
export {deleteOrderItemRoleByIdUpdated};
