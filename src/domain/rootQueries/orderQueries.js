import {
  GraphQLList,
  GraphQLString,
} from 'graphql';

import {OrderHeaderType} from '../order/OrderHeader.js';

const orderQueries = {
  orders: {
    type: new GraphQLList(OrderHeaderType),
    args: {

    },
    resolve: (root, args, {loaders}) => loaders.ofbizArray.load(`orderHeaders/find`)
  },
  order: {
    type: OrderHeaderType,
    args: {
      orderId: {
        type: GraphQLString
      }
    },
    resolve: (root, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/${args.orderId}`)
  },
};

export {orderQueries};
