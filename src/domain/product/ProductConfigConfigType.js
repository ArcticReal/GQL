
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
import {ProductConfigOptionType} from '../product/ProductConfigOptionType.js';


const ProductConfigConfigType = new GraphQLObjectType({
  name: 'ProductConfigConfigType',
  description: 'Type for ProductConfigConfig in product',

  fields: () => ({
    configItem: {
      type: ProductConfigOptionType,
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigConfig, args, {loaders}) => loaders.ofbiz.load(`productConfigOptions/find?configItemId=${productConfigConfig.configItemId}`)
    },
    sequenceNum: {type: GraphQLInt},
    configId: {type: GraphQLString},
    configOptionId: {type: GraphQLString},
    description: {type: GraphQLString},
    configOptionProductOption: {
      type: new GraphQLList(ConfigOptionProductOptionType),
      args : {configId: {type: GraphQLString}},
      resolve: (productConfigConfig, args, {loaders}) => loaders.ofbizArray.load(`configOptionProductOptions/find?configId=${productConfigConfig.configId}`)
    }
  })
});

export {ProductConfigConfigType};
    