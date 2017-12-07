
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PaymentMethodTypeType} from '../accounting/PaymentMethodTypeType.js';
import {ReturnHeaderType} from '../order/ReturnHeaderType.js';
import {PayPalPaymentMethodType} from '../accounting/PayPalPaymentMethodType.js';
import {CheckAccountType} from '../accounting/CheckAccountType.js';
import {ShoppingListType} from '../order/ShoppingListType.js';
import {PaymentGatewayResponseType} from '../accounting/PaymentGatewayResponseType.js';
import {GlAccountType} from '../accounting/GlAccountType.js';
import {CreditCardType} from '../accounting/CreditCardType.js';
import {OrderPaymentPreferenceType} from '../order/OrderPaymentPreferenceType.js';
import {FinAccountType} from '../accounting/FinAccountType.js';
import {GiftCardType} from '../accounting/GiftCardType.js';
import {PaymentType} from '../accounting/PaymentType.js';
import {PartyAcctgPreferenceType} from '../accounting/PartyAcctgPreferenceType.js';
import {PartyType} from '../party/PartyType.js';
import {EftAccountType} from '../accounting/EftAccountType.js';


const PaymentMethodType = new GraphQLObjectType({
  name: 'PaymentMethodType',
  description: 'Type for PaymentMethod in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    finAccount: {
      type: FinAccountType,
      args : {finAccountId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbiz.load(`finAccounts/find?finAccountId=${paymentMethod.finAccountId}`)
    },
    paymentMethodId: {type: GraphQLString},
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${paymentMethod.glAccountId}`)
    },
    description: {type: GraphQLString},
    paymentMethodType: {
      type: PaymentMethodTypeType,
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbiz.load(`paymentMethodTypes/find?paymentMethodTypeId=${paymentMethod.paymentMethodTypeId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${paymentMethod.partyId}`)
    },
    thruDate: {type: GraphQLString},
    creditCard: {
      type: new GraphQLList(CreditCardType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`creditCards/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    giftCard: {
      type: new GraphQLList(GiftCardType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`giftCards/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    orderPaymentPreference: {
      type: new GraphQLList(OrderPaymentPreferenceType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`orderPaymentPreferences/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    payment: {
      type: new GraphQLList(PaymentType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`payments/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    returnHeader: {
      type: new GraphQLList(ReturnHeaderType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`returnHeaders/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    checkAccount: {
      type: new GraphQLList(CheckAccountType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`checkAccounts/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    partyAcctgPreference: {
      type: new GraphQLList(PartyAcctgPreferenceType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`partyAcctgPreferences/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    paymentGatewayResponse: {
      type: new GraphQLList(PaymentGatewayResponseType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayResponses/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    shoppingList: {
      type: new GraphQLList(ShoppingListType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`shoppingLists/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    payPalPaymentMethod: {
      type: new GraphQLList(PayPalPaymentMethodType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`payPalPaymentMethods/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    eftAccount: {
      type: new GraphQLList(EftAccountType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`eftAccounts/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    finAccount: {
      type: new GraphQLList(FinAccountType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`finAccounts/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    }
  })
});

export {PaymentMethodType};
    