import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLBoolean,
} from 'graphql';
import { ProductType } from '../product/product.js';
import {fetchOneFromUrl} from '../framework/ofbizCon.js';

const CartPositionType = new GraphQLObjectType({
  name: 'CartPosition',
  description: 'a position in a cart',

  fields: () => ({
    product: {type: ProductType},
    numberProducts: {type: GraphQLInt},
  })

});

const CartType = new GraphQLObjectType({
  name: 'Cart',
  description: '...',

  fields: () => ({
    total: {
      type: GraphQLString,
      resolve: (cart, args, {loaders}) => loaders.ofbiz.load(`cart/total`)
    },
    positions: {
      type: new GraphQLList(CartPositionType),
      resolve: (cart, args, {loaders}) => loaders.ofbizArray.load(`cart/show`)
    },
  })
});


export { CartType };
