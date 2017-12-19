
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
import {ShipmentItemType} from '../../shipment/ShipmentItem/ShipmentItemType.js';


const ShipmentItemBillingType = new GraphQLObjectType({
  name: 'ShipmentItemBillingType',
  description: 'Type for ShipmentItemBilling in shipment',

  fields: () => ({
    shipment: {
      type: ShipmentItemType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentItemBilling, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentItems/find?shipmentId=${shipmentItemBilling.shipmentId}`)
    },
    invoice: {
      type: InvoiceItemType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (shipmentItemBilling, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceItems/find?invoiceId=${shipmentItemBilling.invoiceId}`)
    },
    invoiceItemSeqId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {ShipmentItemBillingType};
    