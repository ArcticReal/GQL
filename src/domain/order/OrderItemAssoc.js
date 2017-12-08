
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

import {OrderHeaderType} from '../order/OrderHeader.js';
import {OrderItemAssocTypeType} from '../order/OrderItemAssocType.js';


const OrderItemAssocType = new GraphQLObjectType({
  name: 'OrderItemAssocType',
  description: 'Type for OrderItemAssoc in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    toOrder: {
      type: OrderHeaderType,
      args : {toOrderId: {type: GraphQLString}},
      resolve: (orderItemAssoc, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${orderItemAssoc.toOrderId}`)
    },
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemAssoc, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${orderItemAssoc.orderId}`)
    },
    toOrderItemSeqId: {type: GraphQLString},
    orderItemAssocType: {
      type: OrderItemAssocTypeType,
      args : {orderItemAssocTypeId: {type: GraphQLString}},
      resolve: (orderItemAssoc, args, {loaders}) => loaders.ofbiz.load(`orderItemAssocTypes/find?orderItemAssocTypeId=${orderItemAssoc.orderItemAssocTypeId}`)
    },
    shipGroupSeqId: {type: GraphQLString},
    toShipGroupSeqId: {type: GraphQLString}
  })
});

export {OrderItemAssocType};
    




const OrderItemAssocInputType = new GraphQLInputObjectType({
  name: 'OrderItemAssocInputType',
  description: 'input type for OrderItemAssoc in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    toOrderId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    toOrderItemSeqId: {type: GraphQLString},
    orderItemAssocTypeId: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString},
    toShipGroupSeqId: {type: GraphQLString}
  })
});

export {OrderItemAssocInputType};
    