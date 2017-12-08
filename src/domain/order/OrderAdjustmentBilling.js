
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
import {OrderAdjustmentType} from '../order/OrderAdjustment.js';


const OrderAdjustmentBillingType = new GraphQLObjectType({
  name: 'OrderAdjustmentBillingType',
  description: 'Type for OrderAdjustmentBilling in order',

  fields: () => ({
    amount: {type: GraphQLFloat},
    invoice: {
      type: InvoiceItemType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (orderAdjustmentBilling, args, {loaders}) => loaders.ofbiz.load(`invoiceItems/find?invoiceId=${orderAdjustmentBilling.invoiceId}`)
    },
    invoiceItemSeqId: {type: GraphQLString},
    orderAdjustment: {
      type: OrderAdjustmentType,
      args : {orderAdjustmentId: {type: GraphQLString}},
      resolve: (orderAdjustmentBilling, args, {loaders}) => loaders.ofbiz.load(`orderAdjustments/find?orderAdjustmentId=${orderAdjustmentBilling.orderAdjustmentId}`)
    }
  })
});

export {OrderAdjustmentBillingType};
    




const OrderAdjustmentBillingInputType = new GraphQLInputObjectType({
  name: 'OrderAdjustmentBillingInputType',
  description: 'input type for OrderAdjustmentBilling in order',

  fields: () => ({
    amount: {type: GraphQLFloat},
    invoiceId: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    orderAdjustmentId: {type: GraphQLString}
  })
});

export {OrderAdjustmentBillingInputType};
    