
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ReturnHeaderType} from '../order/ReturnHeaderType.js';
import {ReturnItemResponseType} from '../order/ReturnItemResponseType.js';
import {ReturnItemShipmentType} from '../order/ReturnItemShipmentType.js';
import {ShipmentReceiptType} from '../shipment/ShipmentReceiptType.js';
import {ProductType} from '../product/ProductType.js';
import {ReturnReasonType} from '../order/ReturnReasonType.js';
import {ReturnItemTypeType} from '../order/ReturnItemTypeType.js';
import {ReturnTypeType} from '../order/ReturnTypeType.js';
import {OrderItemShipGrpInvResType} from '../order/OrderItemShipGrpInvResType.js';
import {ReturnItemBillingType} from '../order/ReturnItemBillingType.js';


const ReturnItemType = new GraphQLObjectType({
  name: 'ReturnItemType',
  description: 'Type for ReturnItem in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    returnQuantity: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (returnItem, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${returnItem.productId}`)
    },
    order: {
      type: new GraphQLList(OrderItemShipGrpInvResType),
      args : {orderId: {type: GraphQLString}},
      resolve: (returnItem, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGrpInvRess/find?orderId=${returnItem.orderId}`)
    },
    returnType: {
      type: ReturnTypeType,
      args : {returnTypeId: {type: GraphQLString}},
      resolve: (returnItem, args, {loaders}) => loaders.ofbiz.load(`returnTypes/find?returnTypeId=${returnItem.returnTypeId}`)
    },
    description: {type: GraphQLString},
    returnPrice: {type: GraphQLFloat},
    returnItemResponse: {
      type: ReturnItemResponseType,
      args : {returnItemResponseId: {type: GraphQLString}},
      resolve: (returnItem, args, {loaders}) => loaders.ofbiz.load(`returnItemResponses/find?returnItemResponseId=${returnItem.returnItemResponseId}`)
    },
    statusId: {type: GraphQLString},
    returnReason: {
      type: ReturnReasonType,
      args : {returnReasonId: {type: GraphQLString}},
      resolve: (returnItem, args, {loaders}) => loaders.ofbiz.load(`returnReasons/find?returnReasonId=${returnItem.returnReasonId}`)
    },
    returnItemType: {
      type: ReturnItemTypeType,
      args : {returnItemTypeId: {type: GraphQLString}},
      resolve: (returnItem, args, {loaders}) => loaders.ofbiz.load(`returnItemTypes/find?returnItemTypeId=${returnItem.returnItemTypeId}`)
    },
    receivedQuantity: {type: GraphQLFloat},
    return: {
      type: ReturnHeaderType,
      args : {returnId: {type: GraphQLString}},
      resolve: (returnItem, args, {loaders}) => loaders.ofbiz.load(`returnHeaders/find?returnId=${returnItem.returnId}`)
    },
    returnItemSeqId: {type: GraphQLString},
    expectedItemStatus: {type: GraphQLString},
    returnItemShipment: {
      type: new GraphQLList(ReturnItemShipmentType),
      args : {returnId: {type: GraphQLString}},
      resolve: (returnItem, args, {loaders}) => loaders.ofbizArray.load(`returnItemShipments/find?returnId=${returnItem.returnId}`)
    },
    shipmentReceipt: {
      type: new GraphQLList(ShipmentReceiptType),
      args : {returnId: {type: GraphQLString}},
      resolve: (returnItem, args, {loaders}) => loaders.ofbizArray.load(`shipmentReceipts/find?returnId=${returnItem.returnId}`)
    },
    returnItemBilling: {
      type: new GraphQLList(ReturnItemBillingType),
      args : {returnId: {type: GraphQLString}},
      resolve: (returnItem, args, {loaders}) => loaders.ofbizArray.load(`returnItemBillings/find?returnId=${returnItem.returnId}`)
    }
  })
});

export {ReturnItemType};
    