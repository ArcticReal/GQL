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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createOrderItemRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz createOrderItemRole method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/orderItemRoles/add?`, null, req);
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
