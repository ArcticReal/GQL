import {
  GraphQLList,
  GraphQLString,
} from 'graphql';


import { ProductPromoType } from '../../domain/product/ProductPromo.js';

const productPromoQueries = {
  promos: {
    type: new GraphQLList(ProductPromoType),
    args: {

    },
    resolve: (root, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromos/find`)
  },
  promo: {
    type: ProductPromoType,
    args: {
      productPromoId: {
        type: GraphQLString
      },
    },
    resolve: (root, args, {loaders}) => loaders.ofbiz.load(`product/product/productPromos/${args.productPromoId}`)
  }
};

export {productPromoQueries};
