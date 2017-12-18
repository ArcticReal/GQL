
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

import {OrderHeaderType} from '../order/OrderHeader.js';


const OrderNotificationType = new GraphQLObjectType({
  name: 'OrderNotificationType',
  description: 'Type for OrderNotification in order',

  fields: () => ({
    orderNotificationId: {type: GraphQLString},
    comments: {type: GraphQLString},
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderNotification, args, {loaders}) => loaders.ofbiz.load(`order/orderHeaders/find?orderId=${orderNotification.orderId}`)
    },
    emailType: {type: GraphQLString},
    notificationDate: {type: GraphQLString}
  })
});

export {OrderNotificationType};
    




const OrderNotificationInputType = new GraphQLInputObjectType({
  name: 'OrderNotificationInputType',
  description: 'input type for OrderNotification',

  fields: () => ({
    comments: {type: GraphQLString},
    emailType: {type: GraphQLString},
    notificationDate: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderNotificationId: {type: GraphQLString}
  })
});

export {OrderNotificationInputType};
    