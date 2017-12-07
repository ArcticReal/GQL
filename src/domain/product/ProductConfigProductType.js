
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ConfigOptionProductOptionType} from '../product/ConfigOptionProductOptionType.js';
import {ProductType} from '../product/ProductType.js';
import {ProductConfigOptionType} from '../product/ProductConfigOptionType.js';


const ProductConfigProductType = new GraphQLObjectType({
  name: 'ProductConfigProductType',
  description: 'Type for ProductConfigProduct in product',

  fields: () => ({
    configItem: {
      type: ProductConfigOptionType,
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigProduct, args, {loaders}) => loaders.ofbiz.load(`productConfigOptions/find?configItemId=${productConfigProduct.configItemId}`)
    },
    quantity: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productConfigProduct, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productConfigProduct.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    configOptionId: {type: GraphQLString},
    configOptionProductOption: {
      type: new GraphQLList(ConfigOptionProductOptionType),
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigProduct, args, {loaders}) => loaders.ofbizArray.load(`configOptionProductOptions/find?configItemId=${productConfigProduct.configItemId}`)
    }
  })
});

export {ProductConfigProductType};
    