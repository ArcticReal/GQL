
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderItemType} from '../order/OrderItemType.js';
import {ProductGroupOrderType} from '../product/ProductGroupOrderType.js';


const OrderItemGroupOrderType = new GraphQLObjectType({
  name: 'OrderItemGroupOrderType',
  description: 'Type for OrderItemGroupOrder in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    groupOrder: {
      type: ProductGroupOrderType,
      args : {groupOrderId: {type: GraphQLString}},
      resolve: (orderItemGroupOrder, args, {loaders}) => loaders.ofbiz.load(`productGroupOrders/find?groupOrderId=${orderItemGroupOrder.groupOrderId}`)
    },
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemGroupOrder, args, {loaders}) => loaders.ofbiz.load(`orderItems/find?orderId=${orderItemGroupOrder.orderId}`)
    }
  })
});

export {OrderItemGroupOrderType};
    