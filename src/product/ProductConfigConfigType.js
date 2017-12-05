
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductConfigOption} from '../product/ProductConfigOption.js';


const ProductConfigConfig = new GraphQLObjectType({
  name: 'ProductConfigConfigType',
  description: 'Type for ProductConfigConfig in product',

  fields: () => ({
    configItem: {
      type: ProductConfigOptionType,
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigConfig, args, {loaders}) => loaders.ofbizArray.load(`productConfigOptions/find?=${args.configItemId}`)
    },
    sequenceNum: {type: GraphQLInt},
    configId: {type: GraphQLString},
    configOptionId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ProductConfigConfig};
    