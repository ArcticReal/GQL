
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

import {ConfigOptionProductOptionType} from '../product/ConfigOptionProductOption.js';
import {ProductType} from '../product/Product.js';
import {ProductConfigOptionType} from '../product/ProductConfigOption.js';


const ProductConfigProductType = new GraphQLObjectType({
  name: 'ProductConfigProductType',
  description: 'Type for ProductConfigProduct in product',

  fields: () => ({
    configItem: {
      type: ProductConfigOptionType,
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigProduct, args, {loaders}) => loaders.ofbiz.load(`product/product/productConfigOptions/find?configItemId=${productConfigProduct.configItemId}`)
    },
    quantity: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productConfigProduct, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${productConfigProduct.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    configOptionId: {type: GraphQLString},
    configOptionProductOptions: {
      type: new GraphQLList(ConfigOptionProductOptionType),
      args : {},
      resolve: (productConfigProduct, args, {loaders}) => loaders.ofbizArray.load(`product/product/configOptionProductOptions/find?configItemId=${productConfigProduct.configItemId}`)
    }
  })
});

export {ProductConfigProductType};
    




const ProductConfigProductInputType = new GraphQLInputObjectType({
  name: 'ProductConfigProductInputType',
  description: 'input type for ProductConfigProduct in product',

  fields: () => ({
    configItemId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    configOptionId: {type: GraphQLString}
  })
});

export {ProductConfigProductInputType};
    