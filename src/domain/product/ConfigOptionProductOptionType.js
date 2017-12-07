
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
import {ProductConfigConfigType} from '../product/ProductConfigConfigType.js';


const ConfigOptionProductOptionType = new GraphQLObjectType({
  name: 'ConfigOptionProductOptionType',
  description: 'Type for ConfigOptionProductOption in product',

  fields: () => ({
    configItem: {
      type: ProductConfigProductType,
      args : {configItemId: {type: GraphQLString}},
      resolve: (configOptionProductOption, args, {loaders}) => loaders.ofbiz.load(`productConfigProducts/find?configItemId=${configOptionProductOption.configItemId}`)
    },
    sequenceNum: {type: GraphQLInt},
    productId: {type: GraphQLString},
    productOptionId: {type: GraphQLString},
    config: {
      type: ProductConfigConfigType,
      args : {configId: {type: GraphQLString}},
      resolve: (configOptionProductOption, args, {loaders}) => loaders.ofbiz.load(`productConfigConfigs/find?configId=${configOptionProductOption.configId}`)
    },
    configOptionId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ConfigOptionProductOptionType};
    