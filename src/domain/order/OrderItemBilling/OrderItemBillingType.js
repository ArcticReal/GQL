
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

import {InvoiceItemType} from '../../accounting/InvoiceItem/InvoiceItemType.js';
import {ShipmentReceiptType} from '../../shipment/ShipmentReceipt/ShipmentReceiptType.js';
import {OrderItemType} from '../../order/OrderItem/OrderItemType.js';
import {ItemIssuanceType} from '../../shipment/ItemIssuance/ItemIssuanceType.js';


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
      resolve: (orderItemBilling, args, {loaders}) => loaders.ofbiz.load(`order/orderItems/find?orderId=${orderItemBilling.orderId}`)
    },
    itemIssuance: {
      type: ItemIssuanceType,
      args : {itemIssuanceId: {type: GraphQLString}},
      resolve: (orderItemBilling, args, {loaders}) => loaders.ofbiz.load(`shipment/itemIssuances/find?itemIssuanceId=${orderItemBilling.itemIssuanceId}`)
    },
    invoice: {
      type: InvoiceItemType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (orderItemBilling, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceItems/find?invoiceId=${orderItemBilling.invoiceId}`)
    },
    invoiceItemSeqId: {type: GraphQLString},
    shipmentReceipt: {
      type: ShipmentReceiptType,
      args : {shipmentReceiptId: {type: GraphQLString}},
      resolve: (orderItemBilling, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentReceipts/find?receiptId=${orderItemBilling.shipmentReceiptId}`)
    }
  })
});

export {OrderItemBillingType};
    