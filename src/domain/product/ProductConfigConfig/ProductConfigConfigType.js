
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
import {ProductConfigOptionType} from '../../product/ProductConfigOption/ProductConfigOptionType.js';


const ProductConfigConfigType = new GraphQLObjectType({
  name: 'ProductConfigConfigType',
  description: 'Type for ProductConfigConfig in product',

  fields: () => ({
    configItem: {
      type: ProductConfigOptionType,
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigConfig, args, {loaders}) => loaders.ofbiz.load(`product/product/productConfigOptions/find?configItemId=${productConfigConfig.configItemId}`)
    },
    sequenceNum: {type: GraphQLInt},
    configId: {type: GraphQLString},
    configOptionId: {type: GraphQLString},
    description: {type: GraphQLString},
    configOptionProductOptions: {
      type: new GraphQLList(ConfigOptionProductOptionType),
      args : {},
      resolve: (productConfigConfig, args, {loaders}) => loaders.ofbizArray.load(`product/product/configOptionProductOptions/find?configId=${productConfigConfig.configId}`)
    }
  })
});

export {ProductConfigConfigType};
    