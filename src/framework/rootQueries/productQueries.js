import {
  GraphQLList,
  GraphQLString,
} from 'graphql';

import {ProductType} from '../../domain/product/Product/ProductType.js';


const productQueries = {
  products: {
    type: new GraphQLList(ProductType),
    args: {

    },
    resolve: (root, args, {loaders}) => loaders.ofbizArray.load(`products/find`)
  },
  product: {
    type: ProductType,
    args: {
      productId: {
        type: GraphQLString
      },
    },
    resolve: (root, args, {loaders}) => loaders.ofbiz.load(`products/${args.productId}`)
  },
};


export {productQueries};
