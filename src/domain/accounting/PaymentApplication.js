
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
      resolve: (paymentApplication, args, {loaders}) => loaders.ofbiz.load(`payments/find?paymentId=${paymentApplication.toPaymentId}`)
    },
    payment: {
      type: PaymentType,
      args : {paymentId: {type: GraphQLString}},
      resolve: (paymentApplication, args, {loaders}) => loaders.ofbiz.load(`payments/find?paymentId=${paymentApplication.paymentId}`)
    },
    amountApplied: {type: GraphQLFloat},
    overrideGlAccount: {
      type: GlAccountType,
      args : {overrideGlAccountId: {type: GraphQLString}},
      resolve: (paymentApplication, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${paymentApplication.overrideGlAccountId}`)
    },
    taxAuthGeoId: {type: GraphQLString},
    invoice: {
      type: InvoiceType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (paymentApplication, args, {loaders}) => loaders.ofbiz.load(`invoices/find?invoiceId=${paymentApplication.invoiceId}`)
    },
    invoiceItemSeqId: {type: GraphQLString},
    billingAccount: {
      type: BillingAccountType,
      args : {billingAccountId: {type: GraphQLString}},
      resolve: (paymentApplication, args, {loaders}) => loaders.ofbiz.load(`billingAccounts/find?billingAccountId=${paymentApplication.billingAccountId}`)
    },
    paymentApplicationId: {type: GraphQLString}
  })
});

export {PaymentApplicationType};
    




const PaymentApplicationInputType = new GraphQLInputObjectType({
  name: 'PaymentApplicationInputType',
  description: 'input type for PaymentApplication in accounting',

  fields: () => ({
    toPaymentId: {type: GraphQLString},
    paymentId: {type: GraphQLString},
    amountApplied: {type: GraphQLFloat},
    overrideGlAccountId: {type: GraphQLString},
    taxAuthGeoId: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    billingAccountId: {type: GraphQLString},
    paymentApplicationId: {type: GraphQLString}
  })
});

export {PaymentApplicationInputType};
    