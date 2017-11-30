import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLBoolean,
} from 'graphql';

const CartType = new GraphQLObjectType({
  name: 'Cart',
  description: '...',

  fields: () => ({
    cartId: { type: GraphQLString }
  })
});

/*regions: {
      type: new GraphQLList(CartType),
      resolve: (geo, args, {loaders}) => loaders.ofbiz.load(`cart/show`)
    }*/

//resolve: (geo, args, {loaders}) => loaders.ofbiz.load(`cart/show`)

export { CartType };
