
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

import {ReturnHeaderType} from '../order/ReturnHeader.js';
import {FinAccountAttributeType} from '../accounting/FinAccountAttribute.js';
import {PartyType} from '../party/Party.js';
import {FinAccountAuthType} from '../accounting/FinAccountAuth.js';
import {FinAccountTransType} from '../accounting/FinAccountTrans.js';
import {FinAccountStatusType} from '../accounting/FinAccountStatus.js';
import {PaymentMethodType} from '../accounting/PaymentMethod.js';
import {FinAccountRoleType} from '../accounting/FinAccountRole.js';
import {GlAccountType} from '../accounting/GlAccount.js';
import {FinAccountTypeType} from '../accounting/FinAccountType.js';
import {OrderPaymentPreferenceType} from '../order/OrderPaymentPreference.js';


const FinAccountType = new GraphQLObjectType({
  name: 'FinAccountType',
  description: 'Type for FinAccount in accounting',

  fields: () => ({
    finAccountType: {
      type: FinAccountTypeType,
      args : {finAccountTypeId: {type: GraphQLString}},
      resolve: (finAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/finAccount/finAccountTypes/find?finAccountTypeId=${finAccount.finAccountTypeId}`)
    },
    thruDate: {type: GraphQLString},
    isRefundable: {type: GraphQLBoolean},
    availableBalance: {type: GraphQLFloat},
    fromDate: {type: GraphQLString},
    ownerParty: {
      type: PartyType,
      args : {ownerPartyId: {type: GraphQLString}},
      resolve: (finAccount, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${finAccount.ownerPartyId}`)
    },
    finAccountId: {type: GraphQLString},
    postToGlAccount: {
      type: GlAccountType,
      args : {postToGlAccountId: {type: GraphQLString}},
      resolve: (finAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${finAccount.postToGlAccountId}`)
    },
    currencyUomId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    finAccountName: {type: GraphQLString},
    finAccountPin: {type: GraphQLString},
    actualBalance: {type: GraphQLFloat},
    replenishLevel: {type: GraphQLFloat},
    replenishPayment: {
      type: PaymentMethodType,
      args : {replenishPaymentId: {type: GraphQLString}},
      resolve: (finAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentMethods/find?paymentMethodId=${finAccount.replenishPaymentId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (finAccount, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${finAccount.organizationPartyId}`)
    },
    finAccountCode: {type: GraphQLString},
    finAccountRoles: {
      type: new GraphQLList(FinAccountRoleType),
      args : {},
      resolve: (finAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccount/finAccountRoles/find?finAccountId=${finAccount.finAccountId}`)
    },
    orderPaymentPreferences: {
      type: new GraphQLList(OrderPaymentPreferenceType),
      args : {},
      resolve: (finAccount, args, {loaders}) => loaders.ofbizArray.load(`order/orderPaymentPreferences/find?finAccountId=${finAccount.finAccountId}`)
    },
    finAccountAttributes: {
      type: new GraphQLList(FinAccountAttributeType),
      args : {},
      resolve: (finAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccount/finAccountAttributes/find?finAccountId=${finAccount.finAccountId}`)
    },
    finAccountTranses: {
      type: new GraphQLList(FinAccountTransType),
      args : {},
      resolve: (finAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccount/finAccountTranss/find?finAccountId=${finAccount.finAccountId}`)
    },
    paymentMethods: {
      type: new GraphQLList(PaymentMethodType),
      args : {},
      resolve: (finAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentMethods/find?finAccountId=${finAccount.finAccountId}`)
    },
    finAccountStatuses: {
      type: new GraphQLList(FinAccountStatusType),
      args : {},
      resolve: (finAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccount/finAccountStatuss/find?finAccountId=${finAccount.finAccountId}`)
    },
    returnHeaders: {
      type: new GraphQLList(ReturnHeaderType),
      args : {},
      resolve: (finAccount, args, {loaders}) => loaders.ofbizArray.load(`order/returnHeaders/find?finAccountId=${finAccount.finAccountId}`)
    },
    finAccountAuths: {
      type: new GraphQLList(FinAccountAuthType),
      args : {},
      resolve: (finAccount, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccount/finAccountAuths/find?finAccountId=${finAccount.finAccountId}`)
    }
  })
});

export {FinAccountType};
    




const FinAccountInputType = new GraphQLInputObjectType({
  name: 'FinAccountInputType',
  description: 'input type for FinAccount in accounting',

  fields: () => ({
    finAccountTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    isRefundable: {type: GraphQLBoolean},
    availableBalance: {type: GraphQLFloat},
    fromDate: {type: GraphQLString},
    ownerPartyId: {type: GraphQLString},
    finAccountId: {type: GraphQLString},
    postToGlAccountId: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    finAccountName: {type: GraphQLString},
    finAccountPin: {type: GraphQLString},
    actualBalance: {type: GraphQLFloat},
    replenishLevel: {type: GraphQLFloat},
    replenishPaymentId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    finAccountCode: {type: GraphQLString}
  })
});

export {FinAccountInputType};
    