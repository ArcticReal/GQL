
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
import {OrderItemTypeAttrType} from '../order/OrderItemTypeAttrType.js';


const OrderItemTypeType = new GraphQLObjectType({
  name: 'OrderItemTypeType',
  description: 'Type for OrderItemType in order',

  fields: () => ({
    parentType: {
      type: OrderItemTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (orderItemType, args, {loaders}) => loaders.ofbiz.load(`orderItemTypes/find?orderItemTypeId=${orderItemType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    orderItemTypeId: {type: GraphQLString},
    orderItem: {
      type: new GraphQLList(OrderItemType),
      args : {orderItemTypeId: {type: GraphQLString}},
      resolve: (orderItemType, args, {loaders}) => loaders.ofbizArray.load(`orderItems/find?orderItemTypeId=${orderItemType.orderItemTypeId}`)
    },
    orderItemType: {
      type: new GraphQLList(OrderItemTypeType),
      args : {orderItemTypeId: {type: GraphQLString}},
      resolve: (orderItemType, args, {loaders}) => loaders.ofbizArray.load(`orderItemTypes/find?orderItemTypeId=${orderItemType.orderItemTypeId}`)
    },
    orderItemTypeAttr: {
      type: new GraphQLList(OrderItemTypeAttrType),
      args : {orderItemTypeId: {type: GraphQLString}},
      resolve: (orderItemType, args, {loaders}) => loaders.ofbizArray.load(`orderItemTypeAttrs/find?orderItemTypeId=${orderItemType.orderItemTypeId}`)
    }
  })
});

export {OrderItemTypeType};
    