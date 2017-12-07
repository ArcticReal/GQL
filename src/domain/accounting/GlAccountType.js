
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InvoiceItemType} from '../accounting/InvoiceItemType.js';
import {OrderAdjustmentType} from '../order/OrderAdjustmentType.js';
import {PartyGlAccountType} from '../accounting/PartyGlAccountType.js';
import {GlAccountTypeType} from '../accounting/GlAccountTypeType.js';
import {GlReconciliationType} from '../accounting/GlReconciliationType.js';
import {QuoteAdjustmentType} from '../order/QuoteAdjustmentType.js';
import {GlBudgetXrefType} from '../accounting/GlBudgetXrefType.js';
import {GlAccountTypeDefaultType} from '../accounting/GlAccountTypeDefaultType.js';
import {InvoiceItemTypeGlAccountType} from '../accounting/InvoiceItemTypeGlAccountType.js';
import {GlAccountHistoryType} from '../accounting/GlAccountHistoryType.js';
import {VarianceReasonGlAccountType} from '../accounting/VarianceReasonGlAccountType.js';
import {GlAccountCategoryMemberType} from '../accounting/GlAccountCategoryMemberType.js';
import {InvoiceItemTypeType} from '../accounting/InvoiceItemTypeType.js';
import {GlResourceTypeType} from '../accounting/GlResourceTypeType.js';
import {PaymentApplicationType} from '../accounting/PaymentApplicationType.js';
import {PaymentMethodTypeType} from '../accounting/PaymentMethodTypeType.js';
import {GlAccountClassType} from '../accounting/GlAccountClassType.js';
import {FixedAssetTypeGlAccountType} from '../accounting/FixedAssetTypeGlAccountType.js';
import {ProductCategoryGlAccountType} from '../product/ProductCategoryGlAccountType.js';
import {AcctgTransEntryType} from '../accounting/AcctgTransEntryType.js';
import {ReturnAdjustmentType} from '../order/ReturnAdjustmentType.js';
import {GlAccountOrganizationType} from '../accounting/GlAccountOrganizationType.js';
import {FinAccountTypeGlAccountType} from '../accounting/FinAccountTypeGlAccountType.js';
import {ProductGlAccountType} from '../product/ProductGlAccountType.js';
import {GlAccountRoleType} from '../accounting/GlAccountRoleType.js';
import {FinAccountType} from '../accounting/FinAccountType.js';
import {PaymentType} from '../accounting/PaymentType.js';
import {PaymentMethodTypeGlAccountType} from '../accounting/PaymentMethodTypeGlAccountType.js';
import {TaxAuthorityGlAccountType} from '../accounting/TaxAuthorityGlAccountType.js';
import {OrderItemType} from '../order/OrderItemType.js';
import {GlXbrlClassType} from '../accounting/GlXbrlClassType.js';
import {PaymentMethodType} from '../accounting/PaymentMethodType.js';
import {GlAccountGroupMemberType} from '../accounting/GlAccountGroupMemberType.js';


const GlAccountType = new GraphQLObjectType({
  name: 'GlAccountType',
  description: 'Type for GlAccount in accounting',

  fields: () => ({
    accountCode: {type: GraphQLString},
    glAccountType: {
      type: GlAccountTypeType,
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbiz.load(`glAccountTypes/find?glAccountTypeId=${glAccount.glAccountTypeId}`)
    },
    glResourceType: {
      type: GlResourceTypeType,
      args : {glResourceTypeId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbiz.load(`glResourceTypes/find?glResourceTypeId=${glAccount.glResourceTypeId}`)
    },
    productId: {type: GraphQLString},
    parentGlAccount: {
      type: GlAccountType,
      args : {parentGlAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${glAccount.parentGlAccountId}`)
    },
    accountName: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    glAccountClass: {
      type: GlAccountClassType,
      args : {glAccountClassId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbiz.load(`glAccountClasss/find?glAccountClassId=${glAccount.glAccountClassId}`)
    },
    description: {type: GraphQLString},
    externalId: {type: GraphQLString},
    glXbrlClass: {
      type: GlXbrlClassType,
      args : {glXbrlClassId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbiz.load(`glXbrlClasss/find?glXbrlClassId=${glAccount.glXbrlClassId}`)
    },
    glAccountRole: {
      type: new GraphQLList(GlAccountRoleType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`glAccountRoles/find?glAccountId=${glAccount.glAccountId}`)
    },
    payment: {
      type: new GraphQLList(PaymentType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`payments/find?glAccountId=${glAccount.glAccountId}`)
    },
    returnAdjustment: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`returnAdjustments/find?glAccountId=${glAccount.glAccountId}`)
    },
    invoiceItemTypeGlAccount: {
      type: new GraphQLList(InvoiceItemTypeGlAccountType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`invoiceItemTypeGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    glAccount: {
      type: new GraphQLList(GlAccountType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`glAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    fixedAssetTypeGlAccount: {
      type: new GraphQLList(FixedAssetTypeGlAccountType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetTypeGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    glAccountHistory: {
      type: new GraphQLList(GlAccountHistoryType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`glAccountHistorys/find?glAccountId=${glAccount.glAccountId}`)
    },
    varianceReasonGlAccount: {
      type: new GraphQLList(VarianceReasonGlAccountType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`varianceReasonGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    fixedAssetTypeGlAccount: {
      type: new GraphQLList(FixedAssetTypeGlAccountType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetTypeGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    orderItem: {
      type: new GraphQLList(OrderItemType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`orderItems/find?glAccountId=${glAccount.glAccountId}`)
    },
    glReconciliation: {
      type: new GraphQLList(GlReconciliationType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`glReconciliations/find?glAccountId=${glAccount.glAccountId}`)
    },
    finAccount: {
      type: new GraphQLList(FinAccountType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`finAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    productCategoryGlAccount: {
      type: new GraphQLList(ProductCategoryGlAccountType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`productCategoryGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    glAccountOrganization: {
      type: new GraphQLList(GlAccountOrganizationType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`glAccountOrganizations/find?glAccountId=${glAccount.glAccountId}`)
    },
    glAccountCategoryMember: {
      type: new GraphQLList(GlAccountCategoryMemberType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`glAccountCategoryMembers/find?glAccountId=${glAccount.glAccountId}`)
    },
    partyGlAccount: {
      type: new GraphQLList(PartyGlAccountType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`partyGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    glBudgetXref: {
      type: new GraphQLList(GlBudgetXrefType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`glBudgetXrefs/find?glAccountId=${glAccount.glAccountId}`)
    },
    paymentApplication: {
      type: new GraphQLList(PaymentApplicationType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`paymentApplications/find?glAccountId=${glAccount.glAccountId}`)
    },
    glAccountTypeDefault: {
      type: new GraphQLList(GlAccountTypeDefaultType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`glAccountTypeDefaults/find?glAccountId=${glAccount.glAccountId}`)
    },
    paymentMethod: {
      type: new GraphQLList(PaymentMethodType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`paymentMethods/find?glAccountId=${glAccount.glAccountId}`)
    },
    paymentMethodTypeGlAccount: {
      type: new GraphQLList(PaymentMethodTypeGlAccountType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`paymentMethodTypeGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    glAccountGroupMember: {
      type: new GraphQLList(GlAccountGroupMemberType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`glAccountGroupMembers/find?glAccountId=${glAccount.glAccountId}`)
    },
    orderAdjustment: {
      type: new GraphQLList(OrderAdjustmentType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`orderAdjustments/find?glAccountId=${glAccount.glAccountId}`)
    },
    invoiceItem: {
      type: new GraphQLList(InvoiceItemType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`invoiceItems/find?glAccountId=${glAccount.glAccountId}`)
    },
    productGlAccount: {
      type: new GraphQLList(ProductGlAccountType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`productGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    fixedAssetTypeGlAccount: {
      type: new GraphQLList(FixedAssetTypeGlAccountType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetTypeGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    paymentMethodType: {
      type: new GraphQLList(PaymentMethodTypeType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`paymentMethodTypes/find?glAccountId=${glAccount.glAccountId}`)
    },
    quoteAdjustment: {
      type: new GraphQLList(QuoteAdjustmentType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`quoteAdjustments/find?glAccountId=${glAccount.glAccountId}`)
    },
    invoiceItemType: {
      type: new GraphQLList(InvoiceItemTypeType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`invoiceItemTypes/find?glAccountId=${glAccount.glAccountId}`)
    },
    fixedAssetTypeGlAccount: {
      type: new GraphQLList(FixedAssetTypeGlAccountType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetTypeGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    fixedAssetTypeGlAccount: {
      type: new GraphQLList(FixedAssetTypeGlAccountType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetTypeGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    acctgTransEntry: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`acctgTransEntrys/find?glAccountId=${glAccount.glAccountId}`)
    },
    taxAuthorityGlAccount: {
      type: new GraphQLList(TaxAuthorityGlAccountType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`taxAuthorityGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    finAccountTypeGlAccount: {
      type: new GraphQLList(FinAccountTypeGlAccountType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`finAccountTypeGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    }
  })
});

export {GlAccountType};
    