
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

import {OrderHeaderType} from '../../order/OrderHeader/OrderHeaderType.js';
import {ShipmentType} from '../../shipment/Shipment/ShipmentType.js';


const OrderShipmentType = new GraphQLObjectType({
  name: 'OrderShipmentType',
  description: 'Type for OrderShipment in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderShipment, args, {loaders}) => loaders.ofbiz.load(`order/orderHeaders/find?orderId=${orderShipment.orderId}`)
    },
    shipment: {
      type: ShipmentType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (orderShipment, args, {loaders}) => loaders.ofbiz.load(`shipments/find?shipmentId=${orderShipment.shipmentId}`)
    },
    shipmentItemSeqId: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString}
  })
});

export {OrderShipmentType};
    