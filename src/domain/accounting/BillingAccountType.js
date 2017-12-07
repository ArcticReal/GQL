
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PostalAddressType} from '../party/PostalAddressType.js';
import {PaymentApplicationType} from '../accounting/PaymentApplicationType.js';
import {ReturnHeaderType} from '../order/ReturnHeaderType.js';
import {BillingAccountRoleType} from '../accounting/BillingAccountRoleType.js';
import {OrderHeaderType} from '../order/OrderHeaderType.js';
import {ReturnItemResponseType} from '../order/ReturnItemResponseType.js';
import {InvoiceType} from '../accounting/InvoiceType.js';
import {BillingAccountTermType} from '../accounting/BillingAccountTermType.js';


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
      resolve: (billingAccount, args, {loaders}) => loaders.ofbiz.load(`postalAddresss/find?contactMechId=${billingAccount.contactMechId}`)
    },
    thruDate: {type: GraphQLString},
    billingAccountTerm: {
      type: new GraphQLList(BillingAccountTermType),
      args : {billingAccountId: {type: GraphQLString}},
      resolve: (billingAccount, args, {loaders}) => loaders.ofbizArray.load(`billingAccountTerms/find?billingAccountId=${billingAccount.billingAccountId}`)
    },
    billingAccountRole: {
      type: new GraphQLList(BillingAccountRoleType),
      args : {billingAccountId: {type: GraphQLString}},
      resolve: (billingAccount, args, {loaders}) => loaders.ofbizArray.load(`billingAccountRoles/find?billingAccountId=${billingAccount.billingAccountId}`)
    },
    paymentApplication: {
      type: new GraphQLList(PaymentApplicationType),
      args : {billingAccountId: {type: GraphQLString}},
      resolve: (billingAccount, args, {loaders}) => loaders.ofbizArray.load(`paymentApplications/find?billingAccountId=${billingAccount.billingAccountId}`)
    },
    returnHeader: {
      type: new GraphQLList(ReturnHeaderType),
      args : {billingAccountId: {type: GraphQLString}},
      resolve: (billingAccount, args, {loaders}) => loaders.ofbizArray.load(`returnHeaders/find?billingAccountId=${billingAccount.billingAccountId}`)
    },
    returnItemResponse: {
      type: new GraphQLList(ReturnItemResponseType),
      args : {billingAccountId: {type: GraphQLString}},
      resolve: (billingAccount, args, {loaders}) => loaders.ofbizArray.load(`returnItemResponses/find?billingAccountId=${billingAccount.billingAccountId}`)
    },
    invoice: {
      type: new GraphQLList(InvoiceType),
      args : {billingAccountId: {type: GraphQLString}},
      resolve: (billingAccount, args, {loaders}) => loaders.ofbizArray.load(`invoices/find?billingAccountId=${billingAccount.billingAccountId}`)
    },
    orderHeader: {
      type: new GraphQLList(OrderHeaderType),
      args : {billingAccountId: {type: GraphQLString}},
      resolve: (billingAccount, args, {loaders}) => loaders.ofbizArray.load(`orderHeaders/find?billingAccountId=${billingAccount.billingAccountId}`)
    }
  })
});

export {BillingAccountType};
    