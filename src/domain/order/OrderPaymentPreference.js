
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
    returnItemResponses: {
      type: new GraphQLList(ReturnItemResponseType),
      args : {orderPaymentPreferenceId: {type: GraphQLString}},
      resolve: (orderPaymentPreference, args, {loaders}) => loaders.ofbizArray.load(`returnItemResponses/find?orderPaymentPreferenceId=${orderPaymentPreference.orderPaymentPreferenceId}`)
    },
    paymentGatewayResponses: {
      type: new GraphQLList(PaymentGatewayResponseType),
      args : {orderPaymentPreferenceId: {type: GraphQLString}},
      resolve: (orderPaymentPreference, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayResponses/find?orderPaymentPreferenceId=${orderPaymentPreference.orderPaymentPreferenceId}`)
    },
    payments: {
      type: new GraphQLList(PaymentType),
      args : {orderPaymentPreferenceId: {type: GraphQLString}},
      resolve: (orderPaymentPreference, args, {loaders}) => loaders.ofbizArray.load(`payments/find?orderPaymentPreferenceId=${orderPaymentPreference.orderPaymentPreferenceId}`)
    }
  })
});

export {OrderPaymentPreferenceType};
    




const OrderPaymentPreferenceInputType = new GraphQLInputObjectType({
  name: 'OrderPaymentPreferenceInputType',
  description: 'input type for OrderPaymentPreference in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    track2: {type: GraphQLString},
    orderId: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    manualRefNum: {type: GraphQLString},
    swipedFlag: {type: GraphQLBoolean},
    manualAuthCode: {type: GraphQLString},
    securityCode: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString},
    processAttempt: {type: GraphQLInt},
    needsNsfRetry: {type: GraphQLBoolean},
    finAccountId: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    orderPaymentPreferenceId: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    paymentMethodId: {type: GraphQLString},
    billingPostalCode: {type: GraphQLString},
    overflowFlag: {type: GraphQLBoolean},
    productPricePurposeId: {type: GraphQLString},
    maxAmount: {type: GraphQLFloat},
    createdByUserLogin: {type: GraphQLString},
    presentFlag: {type: GraphQLBoolean}
  })
});

export {OrderPaymentPreferenceInputType};
    