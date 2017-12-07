
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductPromoType} from '../product/ProductPromoType.js';
import {ProductStoreType} from '../product/ProductStoreType.js';


const ProductStorePromoApplType = new GraphQLObjectType({
  name: 'ProductStorePromoApplType',
  description: 'Type for ProductStorePromoAppl in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    manualOnly: {type: GraphQLBoolean},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStorePromoAppl, args, {loaders}) => loaders.ofbiz.load(`productStores/find?productStoreId=${productStorePromoAppl.productStoreId}`)
    },
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productStorePromoAppl, args, {loaders}) => loaders.ofbiz.load(`productPromos/find?productPromoId=${productStorePromoAppl.productPromoId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductStorePromoApplType};
    