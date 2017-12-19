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

const OrderStatusInputType = new GraphQLInputObjectType({
  name: 'OrderStatusInputType',
  description: 'input type for OrderStatus',

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

export {OrderStatusInputType};
    