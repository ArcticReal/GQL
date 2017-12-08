
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

import {ProductType} from '../product/Product.js';


const ProductConfigStatsType = new GraphQLObjectType({
  name: 'ProductConfigStatsType',
  description: 'Type for ProductConfigStats in product',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productConfigStats, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productConfigStats.productId}`)
    },
    configId: {type: GraphQLString},
    numOfConfs: {type: GraphQLInt},
    configTypeId: {type: GraphQLString}
  })
});

export {ProductConfigStatsType};
    




const ProductConfigStatsInputType = new GraphQLInputObjectType({
  name: 'ProductConfigStatsInputType',
  description: 'input type for ProductConfigStats in product',

  fields: () => ({
    productId: {type: GraphQLString},
    configId: {type: GraphQLString},
    numOfConfs: {type: GraphQLInt},
    configTypeId: {type: GraphQLString}
  })
});

export {ProductConfigStatsInputType};
    