
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
import {ProductType} from '../product/ProductType.js';


const ProductPromoProductType = new GraphQLObjectType({
  name: 'ProductPromoProductType',
  description: 'Type for ProductPromoProduct in product',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productPromoProduct, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productPromoProduct.productId}`)
    },
    productPromoActionSeqId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString},
    productPromoApplEnumId: {type: GraphQLString},
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoProduct, args, {loaders}) => loaders.ofbiz.load(`productPromos/find?productPromoId=${productPromoProduct.productPromoId}`)
    },
    productPromoCondSeqId: {type: GraphQLString}
  })
});

export {ProductPromoProductType};
    