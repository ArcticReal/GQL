
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


const OrderItemGroupType = new GraphQLObjectType({
  name: 'OrderItemGroupType',
  description: 'Type for OrderItemGroup in order',

  fields: () => ({
    groupName: {type: GraphQLString},
    order: {
      type: OrderItemGroupType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemGroup, args, {loaders}) => loaders.ofbiz.load(`orderItemGroups/find?orderId=${orderItemGroup.orderId}`)
    },
    orderItemGroupSeqId: {type: GraphQLString},
    parentGroupSeqId: {type: GraphQLString},
    orderItemGroup: {
      type: new GraphQLList(OrderItemGroupType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemGroup, args, {loaders}) => loaders.ofbizArray.load(`orderItemGroups/find?orderId=${orderItemGroup.orderId}`)
    },
    orderItem: {
      type: new GraphQLList(OrderItemType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemGroup, args, {loaders}) => loaders.ofbizArray.load(`orderItems/find?orderId=${orderItemGroup.orderId}`)
    }
  })
});

export {OrderItemGroupType};
    