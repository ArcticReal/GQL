
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

import {PaymentMethodTypeType} from '../accounting/PaymentMethodType.js';
import {ReturnHeaderType} from '../order/ReturnHeader.js';
import {PayPalPaymentMethodType} from '../accounting/PayPalPaymentMethod.js';
import {CheckAccountType} from '../accounting/CheckAccount.js';
import {ShoppingListType} from '../order/ShoppingList.js';
import {PaymentGatewayResponseType} from '../accounting/PaymentGatewayResponse.js';
import {GlAccountType} from '../accounting/GlAccount.js';
import {CreditCardType} from '../accounting/CreditCard.js';
import {OrderPaymentPreferenceType} from '../order/OrderPaymentPreference.js';
import {FinAccountType} from '../accounting/FinAccount.js';
import {GiftCardType} from '../accounting/GiftCard.js';
import {PaymentType} from '../accounting/Payment.js';
import {PartyAcctgPreferenceType} from '../accounting/PartyAcctgPreference.js';
import {PartyType} from '../party/Party.js';
import {EftAccountType} from '../accounting/EftAccount.js';


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
    creditCards: {
      type: new GraphQLList(CreditCardType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`creditCards/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    giftCards: {
      type: new GraphQLList(GiftCardType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`giftCards/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    orderPaymentPreferences: {
      type: new GraphQLList(OrderPaymentPreferenceType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`orderPaymentPreferences/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    payments: {
      type: new GraphQLList(PaymentType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`payments/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    returnHeaders: {
      type: new GraphQLList(ReturnHeaderType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`returnHeaders/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    checkAccounts: {
      type: new GraphQLList(CheckAccountType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`checkAccounts/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    partyAcctgPreferences: {
      type: new GraphQLList(PartyAcctgPreferenceType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`partyAcctgPreferences/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    paymentGatewayResponses: {
      type: new GraphQLList(PaymentGatewayResponseType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayResponses/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    shoppingLists: {
      type: new GraphQLList(ShoppingListType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`shoppingLists/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    payPalPaymentMethods: {
      type: new GraphQLList(PayPalPaymentMethodType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`payPalPaymentMethods/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    eftAccounts: {
      type: new GraphQLList(EftAccountType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`eftAccounts/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    },
    finAccounts: {
      type: new GraphQLList(FinAccountType),
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentMethod, args, {loaders}) => loaders.ofbizArray.load(`finAccounts/find?paymentMethodId=${paymentMethod.paymentMethodId}`)
    }
  })
});

export {PaymentMethodType};
    




const PaymentMethodInputType = new GraphQLInputObjectType({
  name: 'PaymentMethodInputType',
  description: 'input type for PaymentMethod in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    finAccountId: {type: GraphQLString},
    paymentMethodId: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    description: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PaymentMethodInputType};
    