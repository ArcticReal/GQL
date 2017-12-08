
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

import {ProductPromoType} from '../product/ProductPromo.js';
import {ProductType} from '../product/Product.js';


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
    




const ProductPromoProductInputType = new GraphQLInputObjectType({
  name: 'ProductPromoProductInputType',
  description: 'input type for ProductPromoProduct in product',

  fields: () => ({
    productId: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString},
    productPromoApplEnumId: {type: GraphQLString},
    productPromoId: {type: GraphQLString},
    productPromoCondSeqId: {type: GraphQLString}
  })
});

export {ProductPromoProductInputType};
    