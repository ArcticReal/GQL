
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
import {FinAccountType} from '../accounting/FinAccountType.js';
import {OrderHeaderType} from '../order/OrderHeaderType.js';
import {PaymentType} from '../accounting/PaymentType.js';
import {ReturnItemResponseType} from '../order/ReturnItemResponseType.js';
import {PaymentMethodType} from '../accounting/PaymentMethodType.js';
import {ProductPricePurposeType} from '../product/ProductPricePurposeType.js';
import {PaymentGatewayResponseType} from '../accounting/PaymentGatewayResponseType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const OrderPaymentPreferenceType = new GraphQLObjectType({
  name: 'OrderPaymentPreferenceType',
  description: 'Type for OrderPaymentPreference in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    track2: {type: GraphQLString},
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderPaymentPreference, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${orderPaymentPreference.orderId}`)
    },
    lastModifiedDate: {type: GraphQLString},
    manualRefNum: {type: GraphQLString},
    swipedFlag: {type: GraphQLBoolean},
    manualAuthCode: {type: GraphQLString},
    securityCode: {type: GraphQLString},
    paymentMethodType: {
      type: PaymentMethodTypeType,
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (orderPaymentPreference, args, {loaders}) => loaders.ofbiz.load(`paymentMethodTypes/find?paymentMethodTypeId=${orderPaymentPreference.paymentMethodTypeId}`)
    },
    shipGroupSeqId: {type: GraphQLString},
    processAttempt: {type: GraphQLInt},
    needsNsfRetry: {type: GraphQLBoolean},
    finAccount: {
      type: FinAccountType,
      args : {finAccountId: {type: GraphQLString}},
      resolve: (orderPaymentPreference, args, {loaders}) => loaders.ofbiz.load(`finAccounts/find?finAccountId=${orderPaymentPreference.finAccountId}`)
    },
    lastModifiedByUserLogin: {type: GraphQLString},
    orderPaymentPreferenceId: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    paymentMethod: {
      type: PaymentMethodType,
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (orderPaymentPreference, args, {loaders}) => loaders.ofbiz.load(`paymentMethods/find?paymentMethodId=${orderPaymentPreference.paymentMethodId}`)
    },
    billingPostalCode: {type: GraphQLString},
    overflowFlag: {type: GraphQLBoolean},
    productPricePurpose: {
      type: ProductPricePurposeType,
      args : {productPricePurposeId: {type: GraphQLString}},
      resolve: (orderPaymentPreference, args, {loaders}) => loaders.ofbiz.load(`productPricePurposes/find?productPricePurposeId=${orderPaymentPreference.productPricePurposeId}`)
    },
    maxAmount: {type: GraphQLFloat},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (orderPaymentPreference, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${orderPaymentPreference.createdByUserLogin}`)
    },
    presentFlag: {type: GraphQLBoolean},
    returnItemResponse: {
      type: new GraphQLList(ReturnItemResponseType),
      args : {orderPaymentPreferenceId: {type: GraphQLString}},
      resolve: (orderPaymentPreference, args, {loaders}) => loaders.ofbizArray.load(`returnItemResponses/find?orderPaymentPreferenceId=${orderPaymentPreference.orderPaymentPreferenceId}`)
    },
    paymentGatewayResponse: {
      type: new GraphQLList(PaymentGatewayResponseType),
      args : {orderPaymentPreferenceId: {type: GraphQLString}},
      resolve: (orderPaymentPreference, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayResponses/find?orderPaymentPreferenceId=${orderPaymentPreference.orderPaymentPreferenceId}`)
    },
    payment: {
      type: new GraphQLList(PaymentType),
      args : {orderPaymentPreferenceId: {type: GraphQLString}},
      resolve: (orderPaymentPreference, args, {loaders}) => loaders.ofbizArray.load(`payments/find?orderPaymentPreferenceId=${orderPaymentPreference.orderPaymentPreferenceId}`)
    }
  })
});

export {OrderPaymentPreferenceType};
    