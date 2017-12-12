
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

import {ProductConfigItemType} from '../product/ProductConfigItem.js';
import {ProductType} from '../product/Product.js';


const ProductConfigType = new GraphQLObjectType({
  name: 'ProductConfigType',
  description: 'Type for ProductConfig in product',

  fields: () => ({
    configItem: {
      type: ProductConfigItemType,
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfig, args, {loaders}) => loaders.ofbiz.load(`product/product/productConfigItems/find?configItemId=${productConfig.configItemId}`)
    },
    fromDate: {type: GraphQLString},
    longDescription: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productConfig, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${productConfig.productId}`)
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
    




const ProductConfigInputType = new GraphQLInputObjectType({
  name: 'ProductConfigInputType',
  description: 'input type for ProductConfig in product',

  fields: () => ({
    configItemId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    longDescription: {type: GraphQLString},
    productId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    defaultConfigOptionId: {type: GraphQLString},
    configTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    isMandatory: {type: GraphQLBoolean},
    thruDate: {type: GraphQLString}
  })
});

export {ProductConfigInputType};
    