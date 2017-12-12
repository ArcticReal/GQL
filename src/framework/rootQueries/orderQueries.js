import {
  GraphQLList,
  GraphQLString,
} from 'graphql';

import {OrderHeaderType} from '../../domain/order/OrderHeader.js';

const orderQueries = {
  orders: {
    type: new GraphQLList(OrderHeaderType),
    args: {

    },
    resolve: (root, args, {loaders}) => loaders.ofbizArray.load(`order/orderHeaders/find`)
  },
  order: {
    type: OrderHeaderType,
    args: {
      orderId: {
        type: GraphQLString
      }
    },
    resolve: (root, args, {loaders}) => loaders.ofbiz.load(`order/orderHeaders/${args.orderId}`)
  },
};

export {orderQueries};
