
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PaymentType} from '../accounting/PaymentType.js';
import {InvoiceType} from '../accounting/InvoiceType.js';
import {BillingAccountType} from '../accounting/BillingAccountType.js';
import {GlAccountType} from '../accounting/GlAccountType.js';


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
    