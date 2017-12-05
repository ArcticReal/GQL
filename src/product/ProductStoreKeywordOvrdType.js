
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductStore} from '../product/ProductStore.js';


const ProductStoreKeywordOvrd = new GraphQLObjectType({
  name: 'ProductStoreKeywordOvrdType',
  description: 'Type for ProductStoreKeywordOvrd in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreKeywordOvrd, args, {loaders}) => loaders.ofbizArray.load(`productStores/find?=${args.productStoreId}`)
    },
    targetTypeEnumId: {type: GraphQLString},
    keyword: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    target: {type: GraphQLString}
  })
});

export {ProductStoreKeywordOvrd};
    