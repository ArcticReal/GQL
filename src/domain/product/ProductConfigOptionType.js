
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductConfigProductType} from '../product/ProductConfigProductType.js';
import {ProductConfigItemType} from '../product/ProductConfigItemType.js';
import {ProductConfigOptionIactnType} from '../product/ProductConfigOptionIactnType.js';
import {ProductConfigConfigType} from '../product/ProductConfigConfigType.js';


const ProductConfigOptionType = new GraphQLObjectType({
  name: 'ProductConfigOptionType',
  description: 'Type for ProductConfigOption in product',

  fields: () => ({
    configItem: {
      type: ProductConfigItemType,
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigOption, args, {loaders}) => loaders.ofbiz.load(`productConfigItems/find?configItemId=${productConfigOption.configItemId}`)
    },
    sequenceNum: {type: GraphQLInt},
    configOptionId: {type: GraphQLString},
    configOptionName: {type: GraphQLString},
    description: {type: GraphQLString},
    productConfigOptionIactn: {
      type: new GraphQLList(ProductConfigOptionIactnType),
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigOption, args, {loaders}) => loaders.ofbizArray.load(`productConfigOptionIactns/find?configItemId=${productConfigOption.configItemId}`)
    },
    productConfigProduct: {
      type: new GraphQLList(ProductConfigProductType),
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigOption, args, {loaders}) => loaders.ofbizArray.load(`productConfigProducts/find?configItemId=${productConfigOption.configItemId}`)
    },
    productConfigConfig: {
      type: new GraphQLList(ProductConfigConfigType),
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigOption, args, {loaders}) => loaders.ofbizArray.load(`productConfigConfigs/find?configItemId=${productConfigOption.configItemId}`)
    }
  })
});

export {ProductConfigOptionType};
    