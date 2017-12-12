import {
  GraphQLList,
  GraphQLString,
} from 'graphql';

import { CartType } from '../../cart/cart.js';

const cartQueries = {
      cart: {
        type: CartType,
        resolve: (root, args, {loaders}) => loaders.ofbizArray.load(`cart/show`)
      }
};

export {cartQueries};
