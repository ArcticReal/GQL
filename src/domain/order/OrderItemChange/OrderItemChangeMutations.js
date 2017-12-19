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
import {OrderItemChangeInputType} from '../../order/OrderItemChange/OrderItemChangeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createOrderItemChange = {
  type: GraphQLString,
  description: 'mutation for ofbiz createOrderItemChange method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/orderItemChanges/add?`, null, req);
  }
};
export {createOrderItemChange};


const updateOrderItemChange = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderItemChange method',
  args:{orderItemChangeToBeUpdated: {type: OrderItemChangeInputType},orderItemChangeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderItem/orderItemChanges/${args.orderItemChangeId}?`, args.orderItemChangeToBeUpdated, req);
  }
};
export {updateOrderItemChange};


const deleteOrderItemChangeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderItemChangeByIdUpdated method',
  args:{orderItemChangeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderItem/orderItemChanges/${args.orderItemChangeId}?`, null, req);
  }
};
export {deleteOrderItemChangeByIdUpdated};
