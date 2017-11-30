import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLBoolean,
} from 'graphql';
import { ProductType } from '../product/product.js';

const CartType = new GraphQLObjectType({
  name: 'Cart',
  description: '...',

  fields: () => ({
    cartId: { type: GraphQLString },
    total: {type: GraphQLString},
    items: {type: new GraphQLList(ProductType) },
    numberItems: {type: new GraphQLList(GraphQLInt) }
  })
});

//resolve: (geo, args, {loaders}) => loaders.ofbiz.load(`cart/show`)

export { CartType };
