import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLBoolean,
} from 'graphql';

const OrderType = new GraphQLObjectType({
  name: 'Order',
  description: '...',

  fields: () => ({
    orderId: { type: GraphQLString }
  })
});

export { OrderType };
