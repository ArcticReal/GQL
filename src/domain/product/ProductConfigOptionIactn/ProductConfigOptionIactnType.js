
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

import {ProductConfigOptionType} from '../../product/ProductConfigOption/ProductConfigOptionType.js';


const ProductConfigOptionIactnType = new GraphQLObjectType({
  name: 'ProductConfigOptionIactnType',
  description: 'Type for ProductConfigOptionIactn in product',

  fields: () => ({
    configItem: {
      type: ProductConfigOptionType,
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigOptionIactn, args, {loaders}) => loaders.ofbiz.load(`product/product/productConfigOptions/find?configItemId=${productConfigOptionIactn.configItemId}`)
    },
    configIactnTypeId: {type: GraphQLString},
    configOptionIdTo: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    configOptionId: {type: GraphQLString},
    description: {type: GraphQLString},
    configItemTo: {
      type: ProductConfigOptionType,
      args : {configItemIdTo: {type: GraphQLString}},
      resolve: (productConfigOptionIactn, args, {loaders}) => loaders.ofbiz.load(`product/product/productConfigOptions/find?configItemId=${productConfigOptionIactn.configItemIdTo}`)
    }
  })
});

export {ProductConfigOptionIactnType};
    