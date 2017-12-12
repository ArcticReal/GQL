
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
import {OrderItemTypeAttrType} from '../order/OrderItemTypeAttr.js';


const OrderItemTypeType = new GraphQLObjectType({
  name: 'OrderItemTypeType',
  description: 'Type for OrderItemType in order',

  fields: () => ({
    parentType: {
      type: OrderItemTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (orderItemType, args, {loaders}) => loaders.ofbiz.load(`order/orderItem/orderItemTypes/find?orderItemTypeId=${orderItemType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    orderItemTypeId: {type: GraphQLString},
    orderItems: {
      type: new GraphQLList(OrderItemType),
      args : {},
      resolve: (orderItemType, args, {loaders}) => loaders.ofbizArray.load(`order/orderItems/find?orderItemTypeId=${orderItemType.orderItemTypeId}`)
    },
    orderItemTypes: {
      type: new GraphQLList(OrderItemTypeType),
      args : {},
      resolve: (orderItemType, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemTypes/find?orderItemTypeId=${orderItemType.orderItemTypeId}`)
    },
    orderItemTypeAttrs: {
      type: new GraphQLList(OrderItemTypeAttrType),
      args : {},
      resolve: (orderItemType, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemTypeAttrs/find?orderItemTypeId=${orderItemType.orderItemTypeId}`)
    }
  })
});

export {OrderItemTypeType};
    




const OrderItemTypeInputType = new GraphQLInputObjectType({
  name: 'OrderItemTypeInputType',
  description: 'input type for OrderItemType in order',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    orderItemTypeId: {type: GraphQLString}
  })
});

export {OrderItemTypeInputType};
    