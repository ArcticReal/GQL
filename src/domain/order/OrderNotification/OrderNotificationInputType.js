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
    