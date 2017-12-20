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
import {OrderRoleInputType} from '../../order/OrderRole/OrderRoleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOrderRole method',
  args:{orderRoleToBeAdded: {type: OrderRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderRoles/add?`, args.orderRoleToBeAdded, req);
  }
};
export {createOrderRole};


const deleteOrderRoleByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOrderRoleByIdUpdated method',
  args:{orderRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderRoles/${args.orderRoleId}?`, null, req);
  }
};
export {deleteOrderRoleByIdUpdated};


const updateOrderRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOrderRole method',
  args:{orderRoleToBeUpdated: {type: OrderRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderRoles/${args.roleTypeId}?`, args.orderRoleToBeUpdated, req);
  }
};
export {updateOrderRole};
