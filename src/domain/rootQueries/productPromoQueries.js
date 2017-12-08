import {
  GraphQLList,
  GraphQLString,
} from 'graphql';


import { ProductPromoType } from '../product/ProductPromo.js';

const productPromoQueries = {
  promos: {
    type: new GraphQLList(ProductPromoType),
    args: {

    },
    resolve: (root, args, {loaders}) => loaders.ofbizArray.load(`productPromos/find`)
  },
  promo: {
    type: ProductPromoType,
    args: {
      productPromoId: {
        type: GraphQLString
      },
    },
    resolve: (root, args, {loaders}) => loaders.ofbiz.load(`productPromos/${args.productPromoId}`)
  }
};

export {productPromoQueries};
