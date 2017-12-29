
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

import {ConfigOptionProductOptionType} from '../../product/ConfigOptionProductOption/ConfigOptionProductOptionType.js';
import {ProductType} from '../../product/Product/ProductType.js';
import {ProductConfigOptionType} from '../../product/ProductConfigOption/ProductConfigOptionType.js';


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
      resolve: (productConfigProduct, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productConfigProduct.productId}`)
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
    