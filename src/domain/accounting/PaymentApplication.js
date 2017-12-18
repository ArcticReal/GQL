
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

import {PaymentType} from '../accounting/Payment.js';
import {InvoiceType} from '../accounting/Invoice.js';
import {BillingAccountType} from '../accounting/BillingAccount.js';
import {GlAccountType} from '../accounting/GlAccount.js';


const PaymentApplicationType = new GraphQLObjectType({
  name: 'PaymentApplicationType',
  description: 'Type for PaymentApplication in accounting',

  fields: () => ({
    toPayment: {
      type: PaymentType,
      args : {toPaymentId: {type: GraphQLString}},
      resolve: (paymentApplication, args, {loaders}) => loaders.ofbiz.load(`accounting/payments/find?paymentId=${paymentApplication.toPaymentId}`)
    },
    payment: {
      type: PaymentType,
      args : {paymentId: {type: GraphQLString}},
      resolve: (paymentApplication, args, {loaders}) => loaders.ofbiz.load(`accounting/payments/find?paymentId=${paymentApplication.paymentId}`)
    },
    amountApplied: {type: GraphQLFloat},
    overrideGlAccount: {
      type: GlAccountType,
      args : {overrideGlAccountId: {type: GraphQLString}},
      resolve: (paymentApplication, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${paymentApplication.overrideGlAccountId}`)
    },
    taxAuthGeoId: {type: GraphQLString},
    invoice: {
      type: InvoiceType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (paymentApplication, args, {loaders}) => loaders.ofbiz.load(`accounting/invoices/find?invoiceId=${paymentApplication.invoiceId}`)
    },
    invoiceItemSeqId: {type: GraphQLString},
    billingAccount: {
      type: BillingAccountType,
      args : {billingAccountId: {type: GraphQLString}},
      resolve: (paymentApplication, args, {loaders}) => loaders.ofbiz.load(`accounting/billingAccounts/find?billingAccountId=${paymentApplication.billingAccountId}`)
    },
    paymentApplicationId: {type: GraphQLString}
  })
});

export {PaymentApplicationType};
    




const PaymentApplicationInputType = new GraphQLInputObjectType({
  name: 'PaymentApplicationInputType',
  description: 'input type for PaymentApplication',

  fields: () => ({
    amountApplied: {type: GraphQLFloat},
    billingAccountId: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    overrideGlAccountId: {type: GraphQLString},
    paymentApplicationId: {type: GraphQLString},
    paymentId: {type: GraphQLString},
    taxAuthGeoId: {type: GraphQLString},
    toPaymentId: {type: GraphQLString}
  })
});

export {PaymentApplicationInputType};
    