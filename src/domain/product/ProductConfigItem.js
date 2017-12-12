
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
      args : {},
      resolve: (productConfigItem, args, {loaders}) => loaders.ofbizArray.load(`product/product/productConfigOptionIactns/find?configItemId=${productConfigItem.configItemId}`)
    },
    productConfigOptions: {
      type: new GraphQLList(ProductConfigOptionType),
      args : {},
      resolve: (productConfigItem, args, {loaders}) => loaders.ofbizArray.load(`product/product/productConfigOptions/find?configItemId=${productConfigItem.configItemId}`)
    },
    productConfigConfigs: {
      type: new GraphQLList(ProductConfigConfigType),
      args : {},
      resolve: (productConfigItem, args, {loaders}) => loaders.ofbizArray.load(`product/product/productConfigConfigs/find?configItemId=${productConfigItem.configItemId}`)
    },
    productConfigs: {
      type: new GraphQLList(ProductConfigType),
      args : {},
      resolve: (productConfigItem, args, {loaders}) => loaders.ofbizArray.load(`product/product/productConfigs/find?configItemId=${productConfigItem.configItemId}`)
    },
    productConfigProducts: {
      type: new GraphQLList(ProductConfigProductType),
      args : {},
      resolve: (productConfigItem, args, {loaders}) => loaders.ofbizArray.load(`product/product/productConfigProducts/find?configItemId=${productConfigItem.configItemId}`)
    },
    prodConfItemContents: {
      type: new GraphQLList(ProdConfItemContentType),
      args : {},
      resolve: (productConfigItem, args, {loaders}) => loaders.ofbizArray.load(`product/prodConfItemContents/find?configItemId=${productConfigItem.configItemId}`)
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
    