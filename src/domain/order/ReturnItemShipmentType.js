
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ReturnItemType} from '../order/ReturnItemType.js';
import {ShipmentItemType} from '../shipment/ShipmentItemType.js';


const ReturnItemShipmentType = new GraphQLObjectType({
  name: 'ReturnItemShipmentType',
  description: 'Type for ReturnItemShipment in order',

  fields: () => ({
    quantity: {type: GraphQLFloat},
    shipment: {
      type: ShipmentItemType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (returnItemShipment, args, {loaders}) => loaders.ofbiz.load(`shipmentItems/find?shipmentId=${returnItemShipment.shipmentId}`)
    },
    return: {
      type: ReturnItemType,
      args : {returnId: {type: GraphQLString}},
      resolve: (returnItemShipment, args, {loaders}) => loaders.ofbiz.load(`returnItems/find?returnId=${returnItemShipment.returnId}`)
    },
    returnItemSeqId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {ReturnItemShipmentType};
    