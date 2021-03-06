
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

import {InventoryItemType} from '../../product/InventoryItem/InventoryItemType.js';
import {OrderItemType} from '../../order/OrderItem/OrderItemType.js';


const OrderItemShipGrpInvResType = new GraphQLObjectType({
  name: 'OrderItemShipGrpInvResType',
  description: 'Type for OrderItemShipGrpInvRes in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemShipGrpInvRes, args, {loaders}) => loaders.ofbiz.load(`order/orderItems/find?orderId=${orderItemShipGrpInvRes.orderId}`)
    },
    promisedDatetime: {type: GraphQLString},
    priority: {type: GraphQLBoolean},
    shipGroupSeqId: {type: GraphQLString},
    sequenceId: {type: GraphQLInt},
    oldPickStartDate: {type: GraphQLString/*this was a type I didn't find TODO find a solution*/},
    currentPromisedDate: {type: GraphQLString},
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (orderItemShipGrpInvRes, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItems/find?inventoryItemId=${orderItemShipGrpInvRes.inventoryItemId}`)
    },
    quantityNotAvailable: {type: GraphQLFloat},
    createdDatetime: {type: GraphQLString},
    reserveOrderEnumId: {type: GraphQLString},
    reservedDatetime: {type: GraphQLString}
  })
});

export {OrderItemShipGrpInvResType};
    