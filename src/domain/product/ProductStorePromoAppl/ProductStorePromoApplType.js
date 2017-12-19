
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

import {ProductPromoType} from '../../product/ProductPromo/ProductPromoType.js';
import {ProductStoreType} from '../../product/ProductStore/ProductStoreType.js';


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
      resolve: (productStorePromoAppl, args, {loaders}) => loaders.ofbiz.load(`product/product/productStores/find?productStoreId=${productStorePromoAppl.productStoreId}`)
    },
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productStorePromoAppl, args, {loaders}) => loaders.ofbiz.load(`product/product/productPromos/find?productPromoId=${productStorePromoAppl.productPromoId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductStorePromoApplType};
    