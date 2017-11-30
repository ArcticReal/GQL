import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLBoolean,
} from 'graphql';
import { ProductType } from '../product/product.js';

const OrderType = new GraphQLObjectType({
  name: 'Order',
  description: '...',

  fields: () => ({
    orderId: { type: GraphQLString },
    statusId: { type: GraphQLString },
    grandTotal: { type: GraphQLString },
    orderDate: { type: GraphQLString },
    items: { type: new GraphQLList(ProductType) },
    numberItems: {type: new GraphQLList(GraphQLInt) }
  })
});

export { OrderType };
