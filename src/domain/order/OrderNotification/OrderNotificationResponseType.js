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

const OrderNotificationResponseType = new GraphQLObjectType({
  name: 'OrderNotificationResponseType',
  description: 'response type for OrderNotification',

  fields: () => ({
    comments: {type: GraphQLString},
    emailType: {type: GraphQLString},
    notificationDate: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderNotificationId: {type: GraphQLString}
  })
});

export {OrderNotificationResponseType};
    