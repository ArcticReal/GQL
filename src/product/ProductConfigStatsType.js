
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Product} from '../product/Product.js';


const ProductConfigStats = new GraphQLObjectType({
  name: 'ProductConfigStatsType',
  description: 'Type for ProductConfigStats in product',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productConfigStats, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    configId: {type: GraphQLString},
    numOfConfs: {type: GraphQLInt},
    configTypeId: {type: GraphQLString}
  })
});

export {ProductConfigStats};
    