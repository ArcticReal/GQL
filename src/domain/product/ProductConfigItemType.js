
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
import {ProductConfigType} from '../product/ProductConfigType.js';
import {ProdConfItemContentType} from '../product/ProdConfItemContentType.js';
import {ProductConfigOptionIactnType} from '../product/ProductConfigOptionIactnType.js';
import {ProductConfigConfigType} from '../product/ProductConfigConfigType.js';
import {ProductConfigOptionType} from '../product/ProductConfigOptionType.js';


const ProductConfigItemType = new GraphQLObjectType({
  name: 'ProductConfigItemType',
  description: 'Type for ProductConfigItem in product',

  fields: () => ({
    configItemId: {type: GraphQLString},
    longDescription: {type: GraphQLString},
    imageUrl: {type: GraphQLString},
    configItemName: {type: GraphQLString},
    configItemTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    productConfigOptionIactn: {
      type: new GraphQLList(ProductConfigOptionIactnType),
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigItem, args, {loaders}) => loaders.ofbizArray.load(`productConfigOptionIactns/find?configItemId=${productConfigItem.configItemId}`)
    },
    productConfigOption: {
      type: new GraphQLList(ProductConfigOptionType),
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigItem, args, {loaders}) => loaders.ofbizArray.load(`productConfigOptions/find?configItemId=${productConfigItem.configItemId}`)
    },
    productConfigConfig: {
      type: new GraphQLList(ProductConfigConfigType),
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigItem, args, {loaders}) => loaders.ofbizArray.load(`productConfigConfigs/find?configItemId=${productConfigItem.configItemId}`)
    },
    productConfig: {
      type: new GraphQLList(ProductConfigType),
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigItem, args, {loaders}) => loaders.ofbizArray.load(`productConfigs/find?configItemId=${productConfigItem.configItemId}`)
    },
    productConfigProduct: {
      type: new GraphQLList(ProductConfigProductType),
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigItem, args, {loaders}) => loaders.ofbizArray.load(`productConfigProducts/find?configItemId=${productConfigItem.configItemId}`)
    },
    prodConfItemContent: {
      type: new GraphQLList(ProdConfItemContentType),
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigItem, args, {loaders}) => loaders.ofbizArray.load(`prodConfItemContents/find?configItemId=${productConfigItem.configItemId}`)
    }
  })
});

export {ProductConfigItemType};
    