
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

import {InvoiceItemType} from '../accounting/InvoiceItem.js';
import {ShipmentItemType} from '../shipment/ShipmentItem.js';


const ShipmentItemBillingType = new GraphQLObjectType({
  name: 'ShipmentItemBillingType',
  description: 'Type for ShipmentItemBilling in shipment',

  fields: () => ({
    shipment: {
      type: ShipmentItemType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentItemBilling, args, {loaders}) => loaders.ofbiz.load(`shipmentItems/find?shipmentId=${shipmentItemBilling.shipmentId}`)
    },
    invoice: {
      type: InvoiceItemType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (shipmentItemBilling, args, {loaders}) => loaders.ofbiz.load(`invoiceItems/find?invoiceId=${shipmentItemBilling.invoiceId}`)
    },
    invoiceItemSeqId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {ShipmentItemBillingType};
    




const ShipmentItemBillingInputType = new GraphQLInputObjectType({
  name: 'ShipmentItemBillingInputType',
  description: 'input type for ShipmentItemBilling in shipment',

  fields: () => ({
    shipmentId: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {ShipmentItemBillingInputType};
    