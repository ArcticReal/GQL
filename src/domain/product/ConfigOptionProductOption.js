
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
import {ProductConfigConfigType} from '../product/ProductConfigConfig.js';


const ConfigOptionProductOptionType = new GraphQLObjectType({
  name: 'ConfigOptionProductOptionType',
  description: 'Type for ConfigOptionProductOption in product',

  fields: () => ({
    configItem: {
      type: ProductConfigProductType,
      args : {configItemId: {type: GraphQLString}},
      resolve: (configOptionProductOption, args, {loaders}) => loaders.ofbiz.load(`product/product/productConfigProducts/find?configItemId=${configOptionProductOption.configItemId}`)
    },
    sequenceNum: {type: GraphQLInt},
    productId: {type: GraphQLString},
    productOptionId: {type: GraphQLString},
    config: {
      type: ProductConfigConfigType,
      args : {configId: {type: GraphQLString}},
      resolve: (configOptionProductOption, args, {loaders}) => loaders.ofbiz.load(`product/product/productConfigConfigs/find?configId=${configOptionProductOption.configId}`)
    },
    configOptionId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ConfigOptionProductOptionType};
    




const ConfigOptionProductOptionInputType = new GraphQLInputObjectType({
  name: 'ConfigOptionProductOptionInputType',
  description: 'input type for ConfigOptionProductOption',

  fields: () => ({
    configId: {type: GraphQLString},
    configItemId: {type: GraphQLString},
    configOptionId: {type: GraphQLString},
    description: {type: GraphQLString},
    productId: {type: GraphQLString},
    productOptionId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt}
  })
});

export {ConfigOptionProductOptionInputType};
    