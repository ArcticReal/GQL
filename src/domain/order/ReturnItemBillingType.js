
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
import {InvoiceItemType} from '../accounting/InvoiceItemType.js';
import {ShipmentReceiptType} from '../shipment/ShipmentReceiptType.js';


const ReturnItemBillingType = new GraphQLObjectType({
  name: 'ReturnItemBillingType',
  description: 'Type for ReturnItemBilling in order',

  fields: () => ({
    amount: {type: GraphQLFloat},
    quantity: {type: GraphQLFloat},
    return: {
      type: ReturnItemType,
      args : {returnId: {type: GraphQLString}},
      resolve: (returnItemBilling, args, {loaders}) => loaders.ofbiz.load(`returnItems/find?returnId=${returnItemBilling.returnId}`)
    },
    returnItemSeqId: {type: GraphQLString},
    invoice: {
      type: InvoiceItemType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (returnItemBilling, args, {loaders}) => loaders.ofbiz.load(`invoiceItems/find?invoiceId=${returnItemBilling.invoiceId}`)
    },
    invoiceItemSeqId: {type: GraphQLString},
    shipmentReceipt: {
      type: ShipmentReceiptType,
      args : {shipmentReceiptId: {type: GraphQLString}},
      resolve: (returnItemBilling, args, {loaders}) => loaders.ofbiz.load(`shipmentReceipts/find?receiptId=${returnItemBilling.shipmentReceiptId}`)
    }
  })
});

export {ReturnItemBillingType};
    