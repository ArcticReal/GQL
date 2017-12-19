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
import {OrderItemGroupInputType} from '../../order/OrderItemGroup/OrderItemGroupInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createOrderItemGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz createOrderItemGroup method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/orderItemGroups/add?`, null, req);
  }
};
export {createOrderItemGroup};


const deleteOrderItemGroupByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderItemGroupByIdUpdated method',
  args:{orderItemGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderItem/orderItemGroups/${args.orderItemGroupId}?`, null, req);
  }
};
export {deleteOrderItemGroupByIdUpdated};


const updateOrderItemGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderItemGroup method',
  args:{orderItemGroupToBeUpdated: {type: OrderItemGroupInputType},orderItemGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderItem/orderItemGroups/${args.orderItemGroupSeqId}?`, args.orderItemGroupToBeUpdated, req);
  }
};
export {updateOrderItemGroup};
