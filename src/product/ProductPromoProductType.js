
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Product} from '../product/Product.js';
import {ProductPromo} from '../product/ProductPromo.js';


const ProductPromoProduct = new GraphQLObjectType({
  name: 'ProductPromoProductType',
  description: 'Type for ProductPromoProduct in product',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productPromoProduct, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    productPromoActionSeqId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString},
    productPromoApplEnumId: {type: GraphQLString},
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoProduct, args, {loaders}) => loaders.ofbizArray.load(`productPromos/find?=${args.productPromoId}`)
    },
    productPromoCondSeqId: {type: GraphQLString}
  })
});

export {ProductPromoProduct};
    