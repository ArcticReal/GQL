
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
import {ProductConfigOption} from '../product/ProductConfigOption.js';


const ProductConfigOptionIactn = new GraphQLObjectType({
  name: 'ProductConfigOptionIactnType',
  description: 'Type for ProductConfigOptionIactn in product',

  fields: () => ({
    configItem: {
      type: ProductConfigOptionType,
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigOptionIactn, args, {loaders}) => loaders.ofbizArray.load(`productConfigOptions/find?=${args.configItemId}`)
    },
    configIactnTypeId: {type: GraphQLString},
    configOptionIdTo: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    configOptionId: {type: GraphQLString},
    description: {type: GraphQLString},
    configItemTo: {
      type: ProductConfigOptionType,
      args : {configItemIdTo: {type: GraphQLString}},
      resolve: (productConfigOptionIactn, args, {loaders}) => loaders.ofbizArray.load(`productConfigOptions/find?configItemId=${args.configItemIdTo}`)
    }
  })
});

export {ProductConfigOptionIactn};
    