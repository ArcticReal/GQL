
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

import {ReturnHeaderType} from '../order/ReturnHeader.js';
import {ReturnItemResponseType} from '../order/ReturnItemResponse.js';
import {ReturnItemShipmentType} from '../order/ReturnItemShipment.js';
import {ShipmentReceiptType} from '../shipment/ShipmentReceipt.js';
import {ProductType} from '../product/Product.js';
import {ReturnReasonType} from '../order/ReturnReason.js';
import {ReturnItemTypeType} from '../order/ReturnItemType.js';
import {ReturnTypeType} from '../order/ReturnType.js';
import {OrderItemShipGrpInvResType} from '../order/OrderItemShipGrpInvRes.js';
import {ReturnItemBillingType} from '../order/ReturnItemBilling.js';


const ReturnItemType = new GraphQLObjectType({
  name: 'ReturnItemType',
  description: 'Type for ReturnItem in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    returnQuantity: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (returnItem, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${returnItem.productId}`)
    },
    order: {
      type: new GraphQLList(OrderItemShipGrpInvResType),
      args : {orderId: {type: GraphQLString}},
      resolve: (returnItem, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemShipGrpInvRess/find?orderId=${returnItem.orderId}`)
    },
    returnType: {
      type: ReturnTypeType,
      args : {returnTypeId: {type: GraphQLString}},
      resolve: (returnItem, args, {loaders}) => loaders.ofbiz.load(`order/returnTypes/find?returnTypeId=${returnItem.returnTypeId}`)
    },
    description: {type: GraphQLString},
    returnPrice: {type: GraphQLFloat},
    returnItemResponse: {
      type: ReturnItemResponseType,
      args : {returnItemResponseId: {type: GraphQLString}},
      resolve: (returnItem, args, {loaders}) => loaders.ofbiz.load(`order/returnItem/returnItemResponses/find?returnItemResponseId=${returnItem.returnItemResponseId}`)
    },
    statusId: {type: GraphQLString},
    returnReason: {
      type: ReturnReasonType,
      args : {returnReasonId: {type: GraphQLString}},
      resolve: (returnItem, args, {loaders}) => loaders.ofbiz.load(`order/returnReasons/find?returnReasonId=${returnItem.returnReasonId}`)
    },
    returnItemType: {
      type: ReturnItemTypeType,
      args : {returnItemTypeId: {type: GraphQLString}},
      resolve: (returnItem, args, {loaders}) => loaders.ofbiz.load(`order/returnItem/returnItemTypes/find?returnItemTypeId=${returnItem.returnItemTypeId}`)
    },
    receivedQuantity: {type: GraphQLFloat},
    return: {
      type: ReturnHeaderType,
      args : {returnId: {type: GraphQLString}},
      resolve: (returnItem, args, {loaders}) => loaders.ofbiz.load(`order/returnHeaders/find?returnId=${returnItem.returnId}`)
    },
    returnItemSeqId: {type: GraphQLString},
    expectedItemStatus: {type: GraphQLString},
    returnItemShipments: {
      type: new GraphQLList(ReturnItemShipmentType),
      args : {},
      resolve: (returnItem, args, {loaders}) => loaders.ofbizArray.load(`order/returnItem/returnItemShipments/find?returnId=${returnItem.returnId}`)
    },
    shipmentReceipts: {
      type: new GraphQLList(ShipmentReceiptType),
      args : {},
      resolve: (returnItem, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentReceipts/find?returnId=${returnItem.returnId}`)
    },
    returnItemBillings: {
      type: new GraphQLList(ReturnItemBillingType),
      args : {},
      resolve: (returnItem, args, {loaders}) => loaders.ofbizArray.load(`order/returnItem/returnItemBillings/find?returnId=${returnItem.returnId}`)
    }
  })
});

export {ReturnItemType};
    




const ReturnItemInputType = new GraphQLInputObjectType({
  name: 'ReturnItemInputType',
  description: 'input type for ReturnItem in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    returnQuantity: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    returnTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    returnPrice: {type: GraphQLFloat},
    returnItemResponseId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    returnReasonId: {type: GraphQLString},
    returnItemTypeId: {type: GraphQLString},
    receivedQuantity: {type: GraphQLFloat},
    returnId: {type: GraphQLString},
    returnItemSeqId: {type: GraphQLString},
    expectedItemStatus: {type: GraphQLString}
  })
});

export {ReturnItemInputType};
    