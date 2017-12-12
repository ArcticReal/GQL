
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


const OrderItemAttributeType = new GraphQLObjectType({
  name: 'OrderItemAttributeType',
  description: 'Type for OrderItemAttribute in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemAttribute, args, {loaders}) => loaders.ofbiz.load(`order/orderItems/find?orderId=${orderItemAttribute.orderId}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {OrderItemAttributeType};
    




const OrderItemAttributeInputType = new GraphQLInputObjectType({
  name: 'OrderItemAttributeInputType',
  description: 'input type for OrderItemAttribute in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {OrderItemAttributeInputType};
    