
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
import {PaymentType} from '../accounting/Payment.js';
import {PaymentGatewayRespMsgType} from '../accounting/PaymentGatewayRespMsg.js';
import {PaymentMethodType} from '../accounting/PaymentMethod.js';
import {OrderPaymentPreferenceType} from '../order/OrderPaymentPreference.js';


const PaymentGatewayResponseType = new GraphQLObjectType({
  name: 'PaymentGatewayResponseType',
  description: 'Type for PaymentGatewayResponse in accounting',

  fields: () => ({
    amount: {type: GraphQLFloat},
    paymentServiceTypeEnumId: {type: GraphQLString},
    transCodeEnumId: {type: GraphQLString},
    paymentMethodType: {
      type: PaymentMethodTypeType,
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (paymentGatewayResponse, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentMethodTypes/find?paymentMethodTypeId=${paymentGatewayResponse.paymentMethodTypeId}`)
    },
    transactionDate: {type: GraphQLString},
    resultNsf: {type: GraphQLBoolean},
    referenceNum: {type: GraphQLString},
    orderPaymentPreference: {
      type: OrderPaymentPreferenceType,
      args : {orderPaymentPreferenceId: {type: GraphQLString}},
      resolve: (paymentGatewayResponse, args, {loaders}) => loaders.ofbiz.load(`order/orderPaymentPreferences/find?orderPaymentPreferenceId=${paymentGatewayResponse.orderPaymentPreferenceId}`)
    },
    currencyUomId: {type: GraphQLString},
    gatewayCode: {type: GraphQLString},
    resultDeclined: {type: GraphQLBoolean},
    paymentGatewayResponseId: {type: GraphQLString},
    paymentMethod: {
      type: PaymentMethodType,
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentGatewayResponse, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentMethods/find?paymentMethodId=${paymentGatewayResponse.paymentMethodId}`)
    },
    subReference: {type: GraphQLString},
    gatewayFlag: {type: GraphQLString},
    gatewayCvResult: {type: GraphQLString},
    gatewayAvsResult: {type: GraphQLString},
    resultBadCardNumber: {type: GraphQLBoolean},
    altReference: {type: GraphQLString},
    gatewayMessage: {type: GraphQLString},
    gatewayScoreResult: {type: GraphQLString},
    resultBadExpire: {type: GraphQLBoolean},
    payments: {
      type: new GraphQLList(PaymentType),
      args : {},
      resolve: (paymentGatewayResponse, args, {loaders}) => loaders.ofbizArray.load(`accounting/payments/find?paymentGatewayResponseId=${paymentGatewayResponse.paymentGatewayResponseId}`)
    },
    paymentGatewayRespMsgs: {
      type: new GraphQLList(PaymentGatewayRespMsgType),
      args : {},
      resolve: (paymentGatewayResponse, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentGatewayRespMsgs/find?paymentGatewayResponseId=${paymentGatewayResponse.paymentGatewayResponseId}`)
    }
  })
});

export {PaymentGatewayResponseType};
    




const PaymentGatewayResponseInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewayResponseInputType',
  description: 'input type for PaymentGatewayResponse',

  fields: () => ({
    altReference: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    currencyUomId: {type: GraphQLString},
    gatewayAvsResult: {type: GraphQLString},
    gatewayCode: {type: GraphQLString},
    gatewayCvResult: {type: GraphQLString},
    gatewayFlag: {type: GraphQLString},
    gatewayMessage: {type: GraphQLString},
    gatewayScoreResult: {type: GraphQLString},
    orderPaymentPreferenceId: {type: GraphQLString},
    paymentGatewayResponseId: {type: GraphQLString},
    paymentMethodId: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString},
    paymentServiceTypeEnumId: {type: GraphQLString},
    referenceNum: {type: GraphQLString},
    resultBadCardNumber: {type: GraphQLBoolean},
    resultBadExpire: {type: GraphQLBoolean},
    resultDeclined: {type: GraphQLBoolean},
    resultNsf: {type: GraphQLBoolean},
    subReference: {type: GraphQLString},
    transCodeEnumId: {type: GraphQLString},
    transactionDate: {type: GraphQLString}
  })
});

export {PaymentGatewayResponseInputType};
    