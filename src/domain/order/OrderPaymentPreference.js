
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
import {FinAccountType} from '../accounting/FinAccount.js';
import {OrderHeaderType} from '../order/OrderHeader.js';
import {PaymentType} from '../accounting/Payment.js';
import {ReturnItemResponseType} from '../order/ReturnItemResponse.js';
import {PaymentMethodType} from '../accounting/PaymentMethod.js';
import {ProductPricePurposeType} from '../product/ProductPricePurpose.js';
import {PaymentGatewayResponseType} from '../accounting/PaymentGatewayResponse.js';
import {UserLoginType} from '../login/UserLogin.js';


const OrderPaymentPreferenceType = new GraphQLObjectType({
  name: 'OrderPaymentPreferenceType',
  description: 'Type for OrderPaymentPreference in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    track2: {type: GraphQLString},
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderPaymentPreference, args, {loaders}) => loaders.ofbiz.load(`order/orderHeaders/find?orderId=${orderPaymentPreference.orderId}`)
    },
    lastModifiedDate: {type: GraphQLString},
    manualRefNum: {type: GraphQLString},
    swipedFlag: {type: GraphQLBoolean},
    manualAuthCode: {type: GraphQLString},
    securityCode: {type: GraphQLString},
    paymentMethodType: {
      type: PaymentMethodTypeType,
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (orderPaymentPreference, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentMethodTypes/find?paymentMethodTypeId=${orderPaymentPreference.paymentMethodTypeId}`)
    },
    shipGroupSeqId: {type: GraphQLString},
    processAttempt: {type: GraphQLInt},
    needsNsfRetry: {type: GraphQLBoolean},
    finAccount: {
      type: FinAccountType,
      args : {finAccountId: {type: GraphQLString}},
      resolve: (orderPaymentPreference, args, {loaders}) => loaders.ofbiz.load(`accounting/finAccounts/find?finAccountId=${orderPaymentPreference.finAccountId}`)
    },
    lastModifiedByUserLogin: {type: GraphQLString},
    orderPaymentPreferenceId: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    paymentMethod: {
      type: PaymentMethodType,
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (orderPaymentPreference, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentMethods/find?paymentMethodId=${orderPaymentPreference.paymentMethodId}`)
    },
    billingPostalCode: {type: GraphQLString},
    overflowFlag: {type: GraphQLBoolean},
    productPricePurpose: {
      type: ProductPricePurposeType,
      args : {productPricePurposeId: {type: GraphQLString}},
      resolve: (orderPaymentPreference, args, {loaders}) => loaders.ofbiz.load(`product/product/productPricePurposes/find?productPricePurposeId=${orderPaymentPreference.productPricePurposeId}`)
    },
    maxAmount: {type: GraphQLFloat},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (orderPaymentPreference, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${orderPaymentPreference.createdByUserLogin}`)
    },
    presentFlag: {type: GraphQLBoolean},
    returnItemResponses: {
      type: new GraphQLList(ReturnItemResponseType),
      args : {},
      resolve: (orderPaymentPreference, args, {loaders}) => loaders.ofbizArray.load(`order/returnItem/returnItemResponses/find?orderPaymentPreferenceId=${orderPaymentPreference.orderPaymentPreferenceId}`)
    },
    paymentGatewayResponses: {
      type: new GraphQLList(PaymentGatewayResponseType),
      args : {},
      resolve: (orderPaymentPreference, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentGatewayResponses/find?orderPaymentPreferenceId=${orderPaymentPreference.orderPaymentPreferenceId}`)
    },
    payments: {
      type: new GraphQLList(PaymentType),
      args : {},
      resolve: (orderPaymentPreference, args, {loaders}) => loaders.ofbizArray.load(`accounting/payments/find?orderPaymentPreferenceId=${orderPaymentPreference.orderPaymentPreferenceId}`)
    }
  })
});

export {OrderPaymentPreferenceType};
    




const OrderPaymentPreferenceInputType = new GraphQLInputObjectType({
  name: 'OrderPaymentPreferenceInputType',
  description: 'input type for OrderPaymentPreference',

  fields: () => ({
    billingPostalCode: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    finAccountId: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    manualAuthCode: {type: GraphQLString},
    manualRefNum: {type: GraphQLString},
    maxAmount: {type: GraphQLFloat},
    needsNsfRetry: {type: GraphQLBoolean},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    orderPaymentPreferenceId: {type: GraphQLString},
    overflowFlag: {type: GraphQLBoolean},
    paymentMethodId: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString},
    presentFlag: {type: GraphQLBoolean},
    processAttempt: {type: GraphQLInt},
    productPricePurposeId: {type: GraphQLString},
    securityCode: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    swipedFlag: {type: GraphQLBoolean},
    track2: {type: GraphQLString}
  })
});

export {OrderPaymentPreferenceInputType};
    