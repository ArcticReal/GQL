
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
import {PartyGlAccountType} from '../accounting/PartyGlAccount.js';
import {GlAccountTypeType} from '../accounting/GlAccountType.js';
import {GlReconciliationType} from '../accounting/GlReconciliation.js';
import {QuoteAdjustmentType} from '../order/QuoteAdjustment.js';
import {GlBudgetXrefType} from '../accounting/GlBudgetXref.js';
import {GlAccountTypeDefaultType} from '../accounting/GlAccountTypeDefault.js';
import {InvoiceItemTypeGlAccountType} from '../accounting/InvoiceItemTypeGlAccount.js';
import {GlAccountHistoryType} from '../accounting/GlAccountHistory.js';
import {VarianceReasonGlAccountType} from '../accounting/VarianceReasonGlAccount.js';
import {GlAccountCategoryMemberType} from '../accounting/GlAccountCategoryMember.js';
import {InvoiceItemTypeType} from '../accounting/InvoiceItemType.js';
import {GlResourceTypeType} from '../accounting/GlResourceType.js';
import {PaymentApplicationType} from '../accounting/PaymentApplication.js';
import {PaymentMethodTypeType} from '../accounting/PaymentMethodType.js';
import {GlAccountClassType} from '../accounting/GlAccountClass.js';
import {FixedAssetTypeGlAccountType} from '../accounting/FixedAssetTypeGlAccount.js';
import {ProductCategoryGlAccountType} from '../product/ProductCategoryGlAccount.js';
import {AcctgTransEntryType} from '../accounting/AcctgTransEntry.js';
import {ReturnAdjustmentType} from '../order/ReturnAdjustment.js';
import {GlAccountOrganizationType} from '../accounting/GlAccountOrganization.js';
import {FinAccountTypeGlAccountType} from '../accounting/FinAccountTypeGlAccount.js';
import {ProductGlAccountType} from '../product/ProductGlAccount.js';
import {GlAccountRoleType} from '../accounting/GlAccountRole.js';
import {FinAccountType} from '../accounting/FinAccount.js';
import {PaymentType} from '../accounting/Payment.js';
import {PaymentMethodTypeGlAccountType} from '../accounting/PaymentMethodTypeGlAccount.js';
import {TaxAuthorityGlAccountType} from '../accounting/TaxAuthorityGlAccount.js';
import {OrderItemType} from '../order/OrderItem.js';
import {GlXbrlClassType} from '../accounting/GlXbrlClass.js';
import {PaymentMethodType} from '../accounting/PaymentMethod.js';
import {GlAccountGroupMemberType} from '../accounting/GlAccountGroupMember.js';


const GlAccountType = new GraphQLObjectType({
  name: 'GlAccountType',
  description: 'Type for GlAccount in accounting',

  fields: () => ({
    accountCode: {type: GraphQLString},
    glAccountType: {
      type: GlAccountTypeType,
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccount/glAccountTypes/find?glAccountTypeId=${glAccount.glAccountTypeId}`)
    },
    glResourceType: {
      type: GlResourceTypeType,
      args : {glResourceTypeId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/glResourceTypes/find?glResourceTypeId=${glAccount.glResourceTypeId}`)
    },
    productId: {type: GraphQLString},
    parentGlAccount: {
      type: GlAccountType,
      args : {parentGlAccountId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${glAccount.parentGlAccountId}`)
    },
    accountName: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    glAccountClass: {
      type: GlAccountClassType,
      args : {glAccountClassId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccount/glAccountClasss/find?glAccountClassId=${glAccount.glAccountClassId}`)
    },
    description: {type: GraphQLString},
    externalId: {type: GraphQLString},
    glXbrlClass: {
      type: GlXbrlClassType,
      args : {glXbrlClassId: {type: GraphQLString}},
      resolve: (glAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/glXbrlClasss/find?glXbrlClassId=${glAccount.glXbrlClassId}`)
    },
    glAccountRoles: {
      type: new GraphQLList(GlAccountRoleType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/glAccountRoles/find?glAccountId=${glAccount.glAccountId}`)
    },
    payments: {
      type: new GraphQLList(PaymentType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/payments/find?glAccountId=${glAccount.glAccountId}`)
    },
    returnAdjustments: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`order/returnAdjustments/find?glAccountId=${glAccount.glAccountId}`)
    },
    invoiceItemTypeGlAccounts: {
      type: new GraphQLList(InvoiceItemTypeGlAccountType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceItemTypeGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    glAccounts: {
      type: new GraphQLList(GlAccountType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    fixedAssetTypeGlAccounts: {
      type: new GraphQLList(FixedAssetTypeGlAccountType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetTypeGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    glAccountHistories: {
      type: new GraphQLList(GlAccountHistoryType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/glAccountHistorys/find?glAccountId=${glAccount.glAccountId}`)
    },
    varianceReasonGlAccounts: {
      type: new GraphQLList(VarianceReasonGlAccountType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/varianceReasonGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    orderItems: {
      type: new GraphQLList(OrderItemType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`order/orderItems/find?glAccountId=${glAccount.glAccountId}`)
    },
    glReconciliations: {
      type: new GraphQLList(GlReconciliationType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/glReconciliations/find?glAccountId=${glAccount.glAccountId}`)
    },
    finAccounts: {
      type: new GraphQLList(FinAccountType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    productCategoryGlAccounts: {
      type: new GraphQLList(ProductCategoryGlAccountType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`product/product/productCategoryGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    glAccountOrganizations: {
      type: new GraphQLList(GlAccountOrganizationType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/glAccountOrganizations/find?glAccountId=${glAccount.glAccountId}`)
    },
    glAccountCategoryMembers: {
      type: new GraphQLList(GlAccountCategoryMemberType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/glAccountCategoryMembers/find?glAccountId=${glAccount.glAccountId}`)
    },
    partyGlAccounts: {
      type: new GraphQLList(PartyGlAccountType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/partyGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    glBudgetXrefs: {
      type: new GraphQLList(GlBudgetXrefType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/budget/glBudgetXrefs/find?glAccountId=${glAccount.glAccountId}`)
    },
    paymentApplications: {
      type: new GraphQLList(PaymentApplicationType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentApplications/find?glAccountId=${glAccount.glAccountId}`)
    },
    glAccountTypeDefaults: {
      type: new GraphQLList(GlAccountTypeDefaultType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/glAccountTypeDefaults/find?glAccountId=${glAccount.glAccountId}`)
    },
    paymentMethods: {
      type: new GraphQLList(PaymentMethodType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentMethods/find?glAccountId=${glAccount.glAccountId}`)
    },
    paymentMethodTypeGlAccounts: {
      type: new GraphQLList(PaymentMethodTypeGlAccountType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/paymentMethodTypeGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    glAccountGroupMembers: {
      type: new GraphQLList(GlAccountGroupMemberType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/glAccountGroupMembers/find?glAccountId=${glAccount.glAccountId}`)
    },
    orderAdjustments: {
      type: new GraphQLList(OrderAdjustmentType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`order/orderAdjustments/find?glAccountId=${glAccount.glAccountId}`)
    },
    invoiceItems: {
      type: new GraphQLList(InvoiceItemType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceItems/find?glAccountId=${glAccount.glAccountId}`)
    },
    productGlAccounts: {
      type: new GraphQLList(ProductGlAccountType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`product/product/productGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    paymentMethodTypes: {
      type: new GraphQLList(PaymentMethodTypeType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentMethodTypes/find?glAccountId=${glAccount.glAccountId}`)
    },
    quoteAdjustments: {
      type: new GraphQLList(QuoteAdjustmentType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteAdjustments/find?glAccountId=${glAccount.glAccountId}`)
    },
    invoiceItemTypes: {
      type: new GraphQLList(InvoiceItemTypeType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceItemTypes/find?glAccountId=${glAccount.glAccountId}`)
    },
    acctgTransEntries: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTrans/acctgTransEntrys/find?glAccountId=${glAccount.glAccountId}`)
    },
    taxAuthorityGlAccounts: {
      type: new GraphQLList(TaxAuthorityGlAccountType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/taxAuthorityGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    },
    finAccountTypeGlAccounts: {
      type: new GraphQLList(FinAccountTypeGlAccountType),
      args : {},
      resolve: (glAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccount/finAccountTypeGlAccounts/find?glAccountId=${glAccount.glAccountId}`)
    }
  })
});

export {GlAccountType};
    




const GlAccountInputType = new GraphQLInputObjectType({
  name: 'GlAccountInputType',
  description: 'input type for GlAccount in accounting',

  fields: () => ({
    accountCode: {type: GraphQLString},
    glAccountTypeId: {type: GraphQLString},
    glResourceTypeId: {type: GraphQLString},
    productId: {type: GraphQLString},
    parentGlAccountId: {type: GraphQLString},
    accountName: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    glAccountClassId: {type: GraphQLString},
    description: {type: GraphQLString},
    externalId: {type: GraphQLString},
    glXbrlClassId: {type: GraphQLString}
  })
});

export {GlAccountInputType};
    