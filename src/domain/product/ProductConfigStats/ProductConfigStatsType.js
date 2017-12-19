
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

import {ProductType} from '../../product/Product/ProductType.js';


const ProductConfigStatsType = new GraphQLObjectType({
  name: 'ProductConfigStatsType',
  description: 'Type for ProductConfigStats in product',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productConfigStats, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${productConfigStats.productId}`)
    },
    configId: {type: GraphQLString},
    numOfConfs: {type: GraphQLInt},
    configTypeId: {type: GraphQLString}
  })
});

export {ProductConfigStatsType};
    