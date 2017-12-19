
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
import {FinAccountType} from '../../accounting/FinAccount/FinAccountType.js';
import {OrderHeaderType} from '../../order/OrderHeader/OrderHeaderType.js';
import {PaymentType} from '../../accounting/Payment/PaymentType.js';
import {ReturnItemResponseType} from '../../order/ReturnItemResponse/ReturnItemResponseType.js';
import {PaymentMethodType} from '../../accounting/PaymentMethod/PaymentMethodType.js';
import {ProductPricePurposeType} from '../../product/ProductPricePurpose/ProductPricePurposeType.js';
import {PaymentGatewayResponseType} from '../../accounting/PaymentGatewayResponse/PaymentGatewayResponseType.js';
import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';


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
    