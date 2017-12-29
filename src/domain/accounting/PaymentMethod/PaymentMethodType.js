
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

import {PaymentMethodTypeType} from '../../accounting/PaymentMethodType/PaymentMethodTypeType.js';
import {ReturnHeaderType} from '../../order/ReturnHeader/ReturnHeaderType.js';
import {PayPalPaymentMethodType} from '../../accounting/PayPalPaymentMethod/PayPalPaymentMethodType.js';
import {CheckAccountType} from '../../accounting/CheckAccount/CheckAccountType.js';
import {ShoppingListType} from '../../order/ShoppingList/ShoppingListType.js';
import {PaymentGatewayResponseType} from '../../accounting/PaymentGatewayResponse/PaymentGatewayResponseType.js';
import {GlAccountType} from '../../accounting/GlAccount/GlAccountType.js';
import {CreditCardType} from '../../accounting/CreditCard/CreditCardType.js';
import {OrderPaymentPreferenceType} from '../../order/OrderPaymentPreference/OrderPaymentPreferenceType.js';
import {FinAccountType} from '../../accounting/FinAccount/FinAccountType.js';
import {GiftCardType} from '../../accounting/GiftCard/GiftCardType.js';
import {PaymentType} from '../../accounting/Payment/PaymentType.js';
import {PartyAcctgPreferenceType} from '../../accounting/PartyAcctgPreference/PartyAcctgPreferenceType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {EftAccountType} from '../../accounting/EftAccount/EftAccountType.js';


const PaymentMethodType = new GraphQLObjectType({
  name: 'PaymentMethodType',
  description: 'Type for PaymentMethod in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    finAccount: {
      type: FinAccountType,
      args : {finAccountId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbiz.load(`accounting/finAccounts/find?finAccountId=${paymentMethod.finAccountId}`)
    },
    paymentMethodId: {type: GraphQLString},
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${paymentMethod.glAccountId}`)
    },
    description: {type: GraphQLString},
    paymentMethodType: {
      type: PaymentMethodTypeType,
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentMethodTypes/find?paymentMethodTypeId=${paymentMethod.paymentMethodTypeId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${paymentMethod.partyId}`)
    },
    thruDate: {type: GraphQLString},
    creditCards: {
      type: new GraphQLList(CreditCardType),
      args : {},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`accounting/creditCards/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    giftCards: {
      type: new GraphQLList(GiftCardType),
      args : {},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`accounting/giftCards/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    orderPaymentPreferences: {
      type: new GraphQLList(OrderPaymentPreferenceType),
      args : {},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`order/orderPaymentPreferences/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    payments: {
      type: new GraphQLList(PaymentType),
      args : {},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`accounting/payments/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    returnHeaders: {
      type: new GraphQLList(ReturnHeaderType),
      args : {},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`order/returnHeaders/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    checkAccounts: {
      type: new GraphQLList(CheckAccountType),
      args : {},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`accounting/checkAccounts/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    partyAcctgPreferences: {
      type: new GraphQLList(PartyAcctgPreferenceType),
      args : {},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`accounting/partyAcctgPreferences/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    paymentGatewayResponses: {
      type: new GraphQLList(PaymentGatewayResponseType),
      args : {},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentGatewayResponses/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    shoppingLists: {
      type: new GraphQLList(ShoppingListType),
      args : {},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`order/shoppingLists/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    payPalPaymentMethods: {
      type: new GraphQLList(PayPalPaymentMethodType),
      args : {},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/payPalPaymentMethods/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    eftAccounts: {
      type: new GraphQLList(EftAccountType),
      args : {},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`accounting/eftAccounts/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    finAccounts: {
      type: new GraphQLList(FinAccountType),
      args : {},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccounts/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    }
  })
});

export {PaymentMethodType};
    