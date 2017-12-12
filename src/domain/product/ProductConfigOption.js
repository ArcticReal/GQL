
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

import {ProductConfigProductType} from '../product/ProductConfigProduct.js';
import {ProductConfigItemType} from '../product/ProductConfigItem.js';
import {ProductConfigOptionIactnType} from '../product/ProductConfigOptionIactn.js';
import {ProductConfigConfigType} from '../product/ProductConfigConfig.js';


const ProductConfigOptionType = new GraphQLObjectType({
  name: 'ProductConfigOptionType',
  description: 'Type for ProductConfigOption in product',

  fields: () => ({
    configItem: {
      type: ProductConfigItemType,
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigOption, args, {loaders}) => loaders.ofbiz.load(`product/product/productConfigItems/find?configItemId=${productConfigOption.configItemId}`)
    },
    sequenceNum: {type: GraphQLInt},
    configOptionId: {type: GraphQLString},
    configOptionName: {type: GraphQLString},
    description: {type: GraphQLString},
    productConfigOptionIactns: {
      type: new GraphQLList(ProductConfigOptionIactnType),
      args : {},
      resolve: (productConfigOption, args, {loaders}) => loaders.ofbizArray.load(`product/product/productConfigOptionIactns/find?configItemId=${productConfigOption.configItemId}`)
    },
    productConfigProducts: {
      type: new GraphQLList(ProductConfigProductType),
      args : {},
      resolve: (productConfigOption, args, {loaders}) => loaders.ofbizArray.load(`product/product/productConfigProducts/find?configItemId=${productConfigOption.configItemId}`)
    },
    productConfigConfigs: {
      type: new GraphQLList(ProductConfigConfigType),
      args : {},
      resolve: (productConfigOption, args, {loaders}) => loaders.ofbizArray.load(`product/product/productConfigConfigs/find?configItemId=${productConfigOption.configItemId}`)
    }
  })
});

export {ProductConfigOptionType};
    




const ProductConfigOptionInputType = new GraphQLInputObjectType({
  name: 'ProductConfigOptionInputType',
  description: 'input type for ProductConfigOption in product',

  fields: () => ({
    configItemId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    configOptionId: {type: GraphQLString},
    configOptionName: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ProductConfigOptionInputType};
    