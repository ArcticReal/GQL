
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

import {ReturnItemType} from '../order/ReturnItem.js';
import {ShipmentItemType} from '../shipment/ShipmentItem.js';


const ReturnItemShipmentType = new GraphQLObjectType({
  name: 'ReturnItemShipmentType',
  description: 'Type for ReturnItemShipment in order',

  fields: () => ({
    quantity: {type: GraphQLFloat},
    shipment: {
      type: ShipmentItemType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (returnItemShipment, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentItems/find?shipmentId=${returnItemShipment.shipmentId}`)
    },
    return: {
      type: ReturnItemType,
      args : {returnId: {type: GraphQLString}},
      resolve: (returnItemShipment, args, {loaders}) => loaders.ofbiz.load(`order/returnItems/find?returnId=${returnItemShipment.returnId}`)
    },
    returnItemSeqId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {ReturnItemShipmentType};
    




const ReturnItemShipmentInputType = new GraphQLInputObjectType({
  name: 'ReturnItemShipmentInputType',
  description: 'input type for ReturnItemShipment in order',

  fields: () => ({
    quantity: {type: GraphQLFloat},
    shipmentId: {type: GraphQLString},
    returnId: {type: GraphQLString},
    returnItemSeqId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {ReturnItemShipmentInputType};
    