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
import {OrderNotificationInputType} from '../../order/OrderNotification/OrderNotificationInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createOrderNotification = {
  type: GraphQLString,
  description: 'mutation for ofbiz createOrderNotification method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderNotifications/add?`, null, req);
  }
};
export {createOrderNotification};


const updateOrderNotification = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderNotification method',
  args:{orderNotificationToBeUpdated: {type: OrderNotificationInputType},orderNotificationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderNotifications/${args.orderNotificationId}?`, args.orderNotificationToBeUpdated, req);
  }
};
export {updateOrderNotification};


const deleteOrderNotificationByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderNotificationByIdUpdated method',
  args:{orderNotificationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderNotifications/${args.orderNotificationId}?`, null, req);
  }
};
export {deleteOrderNotificationByIdUpdated};
