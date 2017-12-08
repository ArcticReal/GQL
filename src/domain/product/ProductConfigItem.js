
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
import {ProductConfigType} from '../product/ProductConfig.js';
import {ProdConfItemContentType} from '../product/ProdConfItemContent.js';
import {ProductConfigOptionIactnType} from '../product/ProductConfigOptionIactn.js';
import {ProductConfigConfigType} from '../product/ProductConfigConfig.js';
import {ProductConfigOptionType} from '../product/ProductConfigOption.js';


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
    productConfigOptionIactns: {
      type: new GraphQLList(ProductConfigOptionIactnType),
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigItem, args, {loaders}) => loaders.ofbizArray.load(`productConfigOptionIactns/find?configItemId=${productConfigItem.configItemId}`)
    },
    productConfigOptions: {
      type: new GraphQLList(ProductConfigOptionType),
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigItem, args, {loaders}) => loaders.ofbizArray.load(`productConfigOptions/find?configItemId=${productConfigItem.configItemId}`)
    },
    productConfigConfigs: {
      type: new GraphQLList(ProductConfigConfigType),
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigItem, args, {loaders}) => loaders.ofbizArray.load(`productConfigConfigs/find?configItemId=${productConfigItem.configItemId}`)
    },
    productConfigs: {
      type: new GraphQLList(ProductConfigType),
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigItem, args, {loaders}) => loaders.ofbizArray.load(`productConfigs/find?configItemId=${productConfigItem.configItemId}`)
    },
    productConfigProducts: {
      type: new GraphQLList(ProductConfigProductType),
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigItem, args, {loaders}) => loaders.ofbizArray.load(`productConfigProducts/find?configItemId=${productConfigItem.configItemId}`)
    },
    prodConfItemContents: {
      type: new GraphQLList(ProdConfItemContentType),
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigItem, args, {loaders}) => loaders.ofbizArray.load(`prodConfItemContents/find?configItemId=${productConfigItem.configItemId}`)
    }
  })
});

export {ProductConfigItemType};
    




const ProductConfigItemInputType = new GraphQLInputObjectType({
  name: 'ProductConfigItemInputType',
  description: 'input type for ProductConfigItem in product',

  fields: () => ({
    configItemId: {type: GraphQLString},
    longDescription: {type: GraphQLString},
    imageUrl: {type: GraphQLString},
    configItemName: {type: GraphQLString},
    configItemTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ProductConfigItemInputType};
    