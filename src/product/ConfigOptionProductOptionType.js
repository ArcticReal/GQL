
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductConfigProduct} from '../product/ProductConfigProduct.js';
import {ProductConfigConfig} from '../product/ProductConfigConfig.js';


const ConfigOptionProductOption = new GraphQLObjectType({
  name: 'ConfigOptionProductOptionType',
  description: 'Type for ConfigOptionProductOption in product',

  fields: () => ({
    configItem: {
      type: ProductConfigProductType,
      args : {configItemId: {type: GraphQLString}},
      resolve: (configOptionProductOption, args, {loaders}) => loaders.ofbizArray.load(`productConfigProducts/find?=${args.configItemId}`)
    },
    sequenceNum: {type: GraphQLInt},
    productId: {type: GraphQLString},
    productOptionId: {type: GraphQLString},
    config: {
      type: ProductConfigConfigType,
      args : {configId: {type: GraphQLString}},
      resolve: (configOptionProductOption, args, {loaders}) => loaders.ofbizArray.load(`productConfigConfigs/find?=${args.configId}`)
    },
    configOptionId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ConfigOptionProductOption};
    