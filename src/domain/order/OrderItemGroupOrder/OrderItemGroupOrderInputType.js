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

const OrderItemGroupOrderInputType = new GraphQLInputObjectType({
  name: 'OrderItemGroupOrderInputType',
  description: 'input type for OrderItemGroupOrder',

  fields: () => ({
    groupOrderId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString}
  })
});

export {OrderItemGroupOrderInputType};
    