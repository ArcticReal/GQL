
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

import {OrderItemType} from '../../order/OrderItem/OrderItemType.js';


const OrderItemGroupType = new GraphQLObjectType({
  name: 'OrderItemGroupType',
  description: 'Type for OrderItemGroup in order',

  fields: () => ({
    groupName: {type: GraphQLString},
    order: {
      type: OrderItemGroupType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemGroup, args, {loaders}) => loaders.ofbiz.load(`order/orderItem/orderItemGroups/find?orderId=${orderItemGroup.orderId}`)
    },
    orderItemGroupSeqId: {type: GraphQLString},
    parentGroupSeqId: {type: GraphQLString},
    orderItemGroups: {
      type: new GraphQLList(OrderItemGroupType),
      args : {},
      resolve: (orderItemGroup, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemGroups/find?orderId=${orderItemGroup.orderId}`)
    },
    orderItems: {
      type: new GraphQLList(OrderItemType),
      args : {},
      resolve: (orderItemGroup, args, {loaders}) => loaders.ofbizArray.load(`order/orderItems/find?orderId=${orderItemGroup.orderId}`)
    }
  })
});

export {OrderItemGroupType};
    