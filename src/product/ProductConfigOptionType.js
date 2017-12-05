
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductConfigItem} from '../product/ProductConfigItem.js';


const ProductConfigOption = new GraphQLObjectType({
  name: 'ProductConfigOptionType',
  description: 'Type for ProductConfigOption in product',

  fields: () => ({
    configItem: {
      type: ProductConfigItemType,
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfigOption, args, {loaders}) => loaders.ofbizArray.load(`productConfigItems/find?=${args.configItemId}`)
    },
    sequenceNum: {type: GraphQLInt},
    configOptionId: {type: GraphQLString},
    configOptionName: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ProductConfigOption};
    