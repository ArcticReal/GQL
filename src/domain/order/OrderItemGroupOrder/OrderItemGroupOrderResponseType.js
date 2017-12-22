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

const OrderItemGroupOrderResponseType = new GraphQLObjectType({
  name: 'OrderItemGroupOrderResponseType',
  description: 'response type for OrderItemGroupOrder',

  fields: () => ({
    groupOrderId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString}
  })
});

export {OrderItemGroupOrderResponseType};
    