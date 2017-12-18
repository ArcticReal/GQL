
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

import {PostalAddressType} from '../party/PostalAddress.js';
import {PaymentApplicationType} from '../accounting/PaymentApplication.js';
import {ReturnHeaderType} from '../order/ReturnHeader.js';
import {BillingAccountRoleType} from '../accounting/BillingAccountRole.js';
import {OrderHeaderType} from '../order/OrderHeader.js';
import {ReturnItemResponseType} from '../order/ReturnItemResponse.js';
import {InvoiceType} from '../accounting/Invoice.js';
import {BillingAccountTermType} from '../accounting/BillingAccountTerm.js';


const BillingAccountType = new GraphQLObjectType({
  name: 'BillingAccountType',
  description: 'Type for BillingAccount in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    accountLimit: {type: GraphQLFloat},
    externalAccountId: {type: GraphQLString},
    accountCurrencyUomId: {type: GraphQLString},
    description: {type: GraphQLString},
    billingAccountId: {type: GraphQLString},
    contactMech: {
      type: PostalAddressType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (billingAccount, args, {loaders}) => loaders.ofbiz.load(`party/postalAddresss/find?contactMechId=${billingAccount.contactMechId}`)
    },
    thruDate: {type: GraphQLString},
    billingAccountTerms: {
      type: new GraphQLList(BillingAccountTermType),
      args : {},
      resolve: (billingAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/billingAccount/billingAccountTerms/find?billingAccountId=${billingAccount.billingAccountId}`)
    },
    billingAccountRoles: {
      type: new GraphQLList(BillingAccountRoleType),
      args : {},
      resolve: (billingAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/billingAccount/billingAccountRoles/find?billingAccountId=${billingAccount.billingAccountId}`)
    },
    paymentApplications: {
      type: new GraphQLList(PaymentApplicationType),
      args : {},
      resolve: (billingAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentApplications/find?billingAccountId=${billingAccount.billingAccountId}`)
    },
    returnHeaders: {
      type: new GraphQLList(ReturnHeaderType),
      args : {},
      resolve: (billingAccount, args, {loaders}) => loaders.ofbizArray.load(`order/returnHeaders/find?billingAccountId=${billingAccount.billingAccountId}`)
    },
    returnItemResponses: {
      type: new GraphQLList(ReturnItemResponseType),
      args : {},
      resolve: (billingAccount, args, {loaders}) => loaders.ofbizArray.load(`order/returnItem/returnItemResponses/find?billingAccountId=${billingAccount.billingAccountId}`)
    },
    invoices: {
      type: new GraphQLList(InvoiceType),
      args : {},
      resolve: (billingAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoices/find?billingAccountId=${billingAccount.billingAccountId}`)
    },
    orderHeaders: {
      type: new GraphQLList(OrderHeaderType),
      args : {},
      resolve: (billingAccount, args, {loaders}) => loaders.ofbizArray.load(`order/orderHeaders/find?billingAccountId=${billingAccount.billingAccountId}`)
    }
  })
});

export {BillingAccountType};
    




const BillingAccountInputType = new GraphQLInputObjectType({
  name: 'BillingAccountInputType',
  description: 'input type for BillingAccount',

  fields: () => ({
    accountCurrencyUomId: {type: GraphQLString},
    accountLimit: {type: GraphQLFloat},
    billingAccountId: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    description: {type: GraphQLString},
    externalAccountId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {BillingAccountInputType};
    