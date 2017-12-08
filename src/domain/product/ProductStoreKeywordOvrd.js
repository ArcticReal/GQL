
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

import {ProductStoreType} from '../product/ProductStore.js';


const ProductStoreKeywordOvrdType = new GraphQLObjectType({
  name: 'ProductStoreKeywordOvrdType',
  description: 'Type for ProductStoreKeywordOvrd in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreKeywordOvrd, args, {loaders}) => loaders.ofbiz.load(`productStores/find?productStoreId=${productStoreKeywordOvrd.productStoreId}`)
    },
    targetTypeEnumId: {type: GraphQLString},
    keyword: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    target: {type: GraphQLString}
  })
});

export {ProductStoreKeywordOvrdType};
    




const ProductStoreKeywordOvrdInputType = new GraphQLInputObjectType({
  name: 'ProductStoreKeywordOvrdInputType',
  description: 'input type for ProductStoreKeywordOvrd in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    targetTypeEnumId: {type: GraphQLString},
    keyword: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    target: {type: GraphQLString}
  })
});

export {ProductStoreKeywordOvrdInputType};
    