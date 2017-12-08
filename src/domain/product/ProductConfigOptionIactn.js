
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

import {ProductConfigOptionType} from '../product/ProductConfigOption.js';


const ProductConfigOptionIactnType = new GraphQLObjectType({
  name: 'ProductConfigOptionIactnType',
  description: 'Type for ProductConfigOptionIactn in product',

  fields: () => ({
    configItem: {
      type: ProductConfigOptionType,
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigOptionIactn, args, {loaders}) => loaders.ofbiz.load(`productConfigOptions/find?configItemId=${productConfigOptionIactn.configItemId}`)
    },
    configIactnTypeId: {type: GraphQLString},
    configOptionIdTo: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    configOptionId: {type: GraphQLString},
    description: {type: GraphQLString},
    configItemTo: {
      type: ProductConfigOptionType,
      args : {configItemIdTo: {type: GraphQLString}},
      resolve: (productConfigOptionIactn, args, {loaders}) => loaders.ofbiz.load(`productConfigOptions/find?configItemId=${productConfigOptionIactn.configItemIdTo}`)
    }
  })
});

export {ProductConfigOptionIactnType};
    




const ProductConfigOptionIactnInputType = new GraphQLInputObjectType({
  name: 'ProductConfigOptionIactnInputType',
  description: 'input type for ProductConfigOptionIactn in product',

  fields: () => ({
    configItemId: {type: GraphQLString},
    configIactnTypeId: {type: GraphQLString},
    configOptionIdTo: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    configOptionId: {type: GraphQLString},
    description: {type: GraphQLString},
    configItemIdTo: {type: GraphQLString}
  })
});

export {ProductConfigOptionIactnInputType};
    