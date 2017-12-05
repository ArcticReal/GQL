
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
import {ProductPromo} from '../product/ProductPromo.js';


const ProductStorePromoAppl = new GraphQLObjectType({
  name: 'ProductStorePromoApplType',
  description: 'Type for ProductStorePromoAppl in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    manualOnly: {type: GraphQLBoolean},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStorePromoAppl, args, {loaders}) => loaders.ofbizArray.load(`productStores/find?=${args.productStoreId}`)
    },
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productStorePromoAppl, args, {loaders}) => loaders.ofbizArray.load(`productPromos/find?=${args.productPromoId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductStorePromoAppl};
    