
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

import {OrderItemShipGroupType} from '../order/OrderItemShipGroup.js';


const OrderItemShipGroupAssocType = new GraphQLObjectType({
  name: 'OrderItemShipGroupAssocType',
  description: 'Type for OrderItemShipGroupAssoc in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    order: {
      type: OrderItemShipGroupType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemShipGroupAssoc, args, {loaders}) => loaders.ofbiz.load(`orderItemShipGroups/find?orderId=${orderItemShipGroupAssoc.orderId}`)
    },
    shipGroupSeqId: {type: GraphQLString},
    cancelQuantity: {type: GraphQLFloat}
  })
});

export {OrderItemShipGroupAssocType};
    




const OrderItemShipGroupAssocInputType = new GraphQLInputObjectType({
  name: 'OrderItemShipGroupAssocInputType',
  description: 'input type for OrderItemShipGroupAssoc in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    orderId: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString},
    cancelQuantity: {type: GraphQLFloat}
  })
});

export {OrderItemShipGroupAssocInputType};
    