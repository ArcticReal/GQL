
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InvoiceItemType} from '../accounting/InvoiceItemType.js';
import {ShipmentReceiptType} from '../shipment/ShipmentReceiptType.js';
import {OrderItemType} from '../order/OrderItemType.js';
import {ItemIssuanceType} from '../shipment/ItemIssuanceType.js';


const OrderItemBillingType = new GraphQLObjectType({
  name: 'OrderItemBillingType',
  description: 'Type for OrderItemBilling in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    quantity: {type: GraphQLFloat},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemBilling, args, {loaders}) => loaders.ofbiz.load(`orderItems/find?orderId=${orderItemBilling.orderId}`)
    },
    itemIssuance: {
      type: ItemIssuanceType,
      args : {itemIssuanceId: {type: GraphQLString}},
      resolve: (orderItemBilling, args, {loaders}) => loaders.ofbiz.load(`itemIssuances/find?itemIssuanceId=${orderItemBilling.itemIssuanceId}`)
    },
    invoice: {
      type: InvoiceItemType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (orderItemBilling, args, {loaders}) => loaders.ofbiz.load(`invoiceItems/find?invoiceId=${orderItemBilling.invoiceId}`)
    },
    invoiceItemSeqId: {type: GraphQLString},
    shipmentReceipt: {
      type: ShipmentReceiptType,
      args : {shipmentReceiptId: {type: GraphQLString}},
      resolve: (orderItemBilling, args, {loaders}) => loaders.ofbiz.load(`shipmentReceipts/find?receiptId=${orderItemBilling.shipmentReceiptId}`)
    }
  })
});

export {OrderItemBillingType};
    