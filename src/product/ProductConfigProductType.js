
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductConfigOption} from '../product/ProductConfigOption.js';
import {Product} from '../product/Product.js';


const ProductConfigProduct = new GraphQLObjectType({
  name: 'ProductConfigProductType',
  description: 'Type for ProductConfigProduct in product',

  fields: () => ({
    configItem: {
      type: ProductConfigOptionType,
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigProduct, args, {loaders}) => loaders.ofbizArray.load(`productConfigOptions/find?=${args.configItemId}`)
    },
    quantity: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productConfigProduct, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    configOptionId: {type: GraphQLString}
  })
});

export {ProductConfigProduct};
    