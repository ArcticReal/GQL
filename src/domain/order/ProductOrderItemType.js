
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
import {ProductType} from '../product/ProductType.js';


const ProductOrderItemType = new GraphQLObjectType({
  name: 'ProductOrderItemType',
  description: 'Type for ProductOrderItem in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    engagementItemSeqId: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productOrderItem, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productOrderItem.productId}`)
    },
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (productOrderItem, args, {loaders}) => loaders.ofbiz.load(`orderItems/find?orderId=${productOrderItem.orderId}`)
    },
    engagement: {
      type: OrderItemType,
      args : {engagementId: {type: GraphQLString}},
      resolve: (productOrderItem, args, {loaders}) => loaders.ofbiz.load(`orderItems/find?orderId=${productOrderItem.engagementId}`)
    }
  })
});

export {ProductOrderItemType};
    