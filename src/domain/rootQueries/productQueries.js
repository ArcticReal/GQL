import {
  GraphQLList,
  GraphQLString,
} from 'graphql';

import {ProductType} from '../product/Product.js';


const productQueries = {
  products: {
    type: new GraphQLList(ProductType),
    args: {

    },
    resolve: (root, args, {loaders}) => loaders.ofbizArray.load(`products/productList`)
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
