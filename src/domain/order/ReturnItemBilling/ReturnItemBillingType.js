
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

import {ReturnItemType} from '../../order/ReturnItem/ReturnItemType.js';
import {InvoiceItemType} from '../../accounting/InvoiceItem/InvoiceItemType.js';
import {ShipmentReceiptType} from '../../shipment/ShipmentReceipt/ShipmentReceiptType.js';


const ReturnItemBillingType = new GraphQLObjectType({
  name: 'ReturnItemBillingType',
  description: 'Type for ReturnItemBilling in order',

  fields: () => ({
    amount: {type: GraphQLFloat},
    quantity: {type: GraphQLFloat},
    return: {
      type: ReturnItemType,
      args : {returnId: {type: GraphQLString}},
      resolve: (returnItemBilling, args, {loaders}) => loaders.ofbiz.load(`order/returnItems/find?returnId=${returnItemBilling.returnId}`)
    },
    returnItemSeqId: {type: GraphQLString},
    invoice: {
      type: InvoiceItemType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (returnItemBilling, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceItems/find?invoiceId=${returnItemBilling.invoiceId}`)
    },
    invoiceItemSeqId: {type: GraphQLString},
    shipmentReceipt: {
      type: ShipmentReceiptType,
      args : {shipmentReceiptId: {type: GraphQLString}},
      resolve: (returnItemBilling, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentReceipts/find?receiptId=${returnItemBilling.shipmentReceiptId}`)
    }
  })
});

export {ReturnItemBillingType};
    