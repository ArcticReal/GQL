
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
import {OrderAdjustmentType} from '../../order/OrderAdjustment/OrderAdjustmentType.js';


const OrderAdjustmentBillingType = new GraphQLObjectType({
  name: 'OrderAdjustmentBillingType',
  description: 'Type for OrderAdjustmentBilling in order',

  fields: () => ({
    amount: {type: GraphQLFloat},
    invoice: {
      type: InvoiceItemType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (orderAdjustmentBilling, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceItems/find?invoiceId=${orderAdjustmentBilling.invoiceId}`)
    },
    invoiceItemSeqId: {type: GraphQLString},
    orderAdjustment: {
      type: OrderAdjustmentType,
      args : {orderAdjustmentId: {type: GraphQLString}},
      resolve: (orderAdjustmentBilling, args, {loaders}) => loaders.ofbiz.load(`order/orderAdjustments/find?orderAdjustmentId=${orderAdjustmentBilling.orderAdjustmentId}`)
    }
  })
});

export {OrderAdjustmentBillingType};
    