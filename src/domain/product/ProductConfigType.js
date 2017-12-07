
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductConfigItemType} from '../product/ProductConfigItemType.js';
import {ProductType} from '../product/ProductType.js';


const ProductConfigType = new GraphQLObjectType({
  name: 'ProductConfigType',
  description: 'Type for ProductConfig in product',

  fields: () => ({
    configItem: {
      type: ProductConfigItemType,
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfig, args, {loaders}) => loaders.ofbiz.load(`productConfigItems/find?configItemId=${productConfig.configItemId}`)
    },
    fromDate: {type: GraphQLString},
    longDescription: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productConfig, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productConfig.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    defaultConfigOptionId: {type: GraphQLString},
    configTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    isMandatory: {type: GraphQLBoolean},
    thruDate: {type: GraphQLString}
  })
});

export {ProductConfigType};
    