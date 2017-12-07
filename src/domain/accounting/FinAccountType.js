
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ReturnHeaderType} from '../order/ReturnHeaderType.js';
import {FinAccountAttributeType} from '../accounting/FinAccountAttributeType.js';
import {PartyType} from '../party/PartyType.js';
import {FinAccountAuthType} from '../accounting/FinAccountAuthType.js';
import {FinAccountTransType} from '../accounting/FinAccountTransType.js';
import {FinAccountStatusType} from '../accounting/FinAccountStatusType.js';
import {PaymentMethodType} from '../accounting/PaymentMethodType.js';
import {FinAccountRoleType} from '../accounting/FinAccountRoleType.js';
import {GlAccountType} from '../accounting/GlAccountType.js';
import {FinAccountTypeType} from '../accounting/FinAccountTypeType.js';
import {OrderPaymentPreferenceType} from '../order/OrderPaymentPreferenceType.js';


const FinAccountType = new GraphQLObjectType({
  name: 'FinAccountType',
  description: 'Type for FinAccount in accounting',

  fields: () => ({
    finAccountType: {
      type: FinAccountTypeType,
      args : {finAccountTypeId: {type: GraphQLString}},
      resolve: (finAccount, args, {loaders}) => loaders.ofbiz.load(`finAccountTypes/find?finAccountTypeId=${finAccount.finAccountTypeId}`)
    },
    thruDate: {type: GraphQLString},
    isRefundable: {type: GraphQLBoolean},
    availableBalance: {type: GraphQLFloat},
    fromDate: {type: GraphQLString},
    ownerParty: {
      type: PartyType,
      args : {ownerPartyId: {type: GraphQLString}},
      resolve: (finAccount, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${finAccount.ownerPartyId}`)
    },
    finAccountId: {type: GraphQLString},
    postToGlAccount: {
      type: GlAccountType,
      args : {postToGlAccountId: {type: GraphQLString}},
      resolve: (finAccount, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${finAccount.postToGlAccountId}`)
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
      resolve: (finAccount, args, {loaders}) => loaders.ofbiz.load(`paymentMethods/find?paymentMethodId=${finAccount.replenishPaymentId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (finAccount, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${finAccount.organizationPartyId}`)
    },
    finAccountCode: {type: GraphQLString},
    finAccountRole: {
      type: new GraphQLList(FinAccountRoleType),
      args : {finAccountId: {type: GraphQLString}},
      resolve: (finAccount, args, {loaders}) => loaders.ofbizArray.load(`finAccountRoles/find?finAccountId=${finAccount.finAccountId}`)
    },
    orderPaymentPreference: {
      type: new GraphQLList(OrderPaymentPreferenceType),
      args : {finAccountId: {type: GraphQLString}},
      resolve: (finAccount, args, {loaders}) => loaders.ofbizArray.load(`orderPaymentPreferences/find?finAccountId=${finAccount.finAccountId}`)
    },
    finAccountAttribute: {
      type: new GraphQLList(FinAccountAttributeType),
      args : {finAccountId: {type: GraphQLString}},
      resolve: (finAccount, args, {loaders}) => loaders.ofbizArray.load(`finAccountAttributes/find?finAccountId=${finAccount.finAccountId}`)
    },
    finAccountTrans: {
      type: new GraphQLList(FinAccountTransType),
      args : {finAccountId: {type: GraphQLString}},
      resolve: (finAccount, args, {loaders}) => loaders.ofbizArray.load(`finAccountTranss/find?finAccountId=${finAccount.finAccountId}`)
    },
    paymentMethod: {
      type: new GraphQLList(PaymentMethodType),
      args : {finAccountId: {type: GraphQLString}},
      resolve: (finAccount, args, {loaders}) => loaders.ofbizArray.load(`paymentMethods/find?finAccountId=${finAccount.finAccountId}`)
    },
    finAccountStatus: {
      type: new GraphQLList(FinAccountStatusType),
      args : {finAccountId: {type: GraphQLString}},
      resolve: (finAccount, args, {loaders}) => loaders.ofbizArray.load(`finAccountStatuss/find?finAccountId=${finAccount.finAccountId}`)
    },
    returnHeader: {
      type: new GraphQLList(ReturnHeaderType),
      args : {finAccountId: {type: GraphQLString}},
      resolve: (finAccount, args, {loaders}) => loaders.ofbizArray.load(`returnHeaders/find?finAccountId=${finAccount.finAccountId}`)
    },
    finAccountAuth: {
      type: new GraphQLList(FinAccountAuthType),
      args : {finAccountId: {type: GraphQLString}},
      resolve: (finAccount, args, {loaders}) => loaders.ofbizArray.load(`finAccountAuths/find?finAccountId=${finAccount.finAccountId}`)
    }
  })
});

export {FinAccountType};
    