
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

import {OrderItemType} from '../order/OrderItem.js';
import {ProductGroupOrderType} from '../product/ProductGroupOrder.js';


const OrderItemGroupOrderType = new GraphQLObjectType({
  name: 'OrderItemGroupOrderType',
  description: 'Type for OrderItemGroupOrder in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    groupOrder: {
      type: ProductGroupOrderType,
      args : {groupOrderId: {type: GraphQLString}},
      resolve: (orderItemGroupOrder, args, {loaders}) => loaders.ofbiz.load(`product/product/productGroupOrders/find?groupOrderId=${orderItemGroupOrder.groupOrderId}`)
    },
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemGroupOrder, args, {loaders}) => loaders.ofbiz.load(`order/orderItems/find?orderId=${orderItemGroupOrder.orderId}`)
    }
  })
});

export {OrderItemGroupOrderType};
    




const OrderItemGroupOrderInputType = new GraphQLInputObjectType({
  name: 'OrderItemGroupOrderInputType',
  description: 'input type for OrderItemGroupOrder in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    groupOrderId: {type: GraphQLString},
    orderId: {type: GraphQLString}
  })
});

export {OrderItemGroupOrderInputType};
    