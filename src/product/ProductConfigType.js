
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
import {Product} from '../product/Product.js';


const ProductConfig = new GraphQLObjectType({
  name: 'ProductConfigType',
  description: 'Type for ProductConfig in product',

  fields: () => ({
    configItem: {
      type: ProductConfigItemType,
      args : {configItemId: {type: GraphQLString}},
      resolve: (productConfig, args, {loaders}) => loaders.ofbizArray.load(`productConfigItems/find?=${args.configItemId}`)
    },
    fromDate: {type: GraphQLString},
    longDescription: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productConfig, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    defaultConfigOptionId: {type: GraphQLString},
    configTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    isMandatory: {type: GraphQLBoolean},
    thruDate: {type: GraphQLString}
  })
});

export {ProductConfig};
    