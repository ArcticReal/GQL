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

const OrderStatusResponseType = new GraphQLObjectType({
  name: 'OrderStatusResponseType',
  description: 'response type for OrderStatus',

  fields: () => ({
    changeReason: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    orderPaymentPreferenceId: {type: GraphQLString},
    orderStatusId: {type: GraphQLString},
    statusDatetime: {type: GraphQLString},
    statusId: {type: GraphQLString},
    statusUserLogin: {type: GraphQLString}
  })
});

export {OrderStatusResponseType};
    