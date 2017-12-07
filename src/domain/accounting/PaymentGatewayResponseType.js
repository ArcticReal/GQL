
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
import {PaymentType} from '../accounting/PaymentType.js';
import {PaymentGatewayRespMsgType} from '../accounting/PaymentGatewayRespMsgType.js';
import {PaymentMethodType} from '../accounting/PaymentMethodType.js';
import {OrderPaymentPreferenceType} from '../order/OrderPaymentPreferenceType.js';


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
      resolve: (paymentGatewayResponse, args, {loaders}) => loaders.ofbiz.load(`paymentMethodTypes/find?paymentMethodTypeId=${paymentGatewayResponse.paymentMethodTypeId}`)
    },
    transactionDate: {type: GraphQLString},
    resultNsf: {type: GraphQLBoolean},
    referenceNum: {type: GraphQLString},
    orderPaymentPreference: {
      type: OrderPaymentPreferenceType,
      args : {orderPaymentPreferenceId: {type: GraphQLString}},
      resolve: (paymentGatewayResponse, args, {loaders}) => loaders.ofbiz.load(`orderPaymentPreferences/find?orderPaymentPreferenceId=${paymentGatewayResponse.orderPaymentPreferenceId}`)
    },
    currencyUomId: {type: GraphQLString},
    gatewayCode: {type: GraphQLString},
    resultDeclined: {type: GraphQLBoolean},
    paymentGatewayResponseId: {type: GraphQLString},
    paymentMethod: {
      type: PaymentMethodType,
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (paymentGatewayResponse, args, {loaders}) => loaders.ofbiz.load(`paymentMethods/find?paymentMethodId=${paymentGatewayResponse.paymentMethodId}`)
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
    payment: {
      type: new GraphQLList(PaymentType),
      args : {paymentGatewayResponseId: {type: GraphQLString}},
      resolve: (paymentGatewayResponse, args, {loaders}) => loaders.ofbizArray.load(`payments/find?paymentGatewayResponseId=${paymentGatewayResponse.paymentGatewayResponseId}`)
    },
    paymentGatewayRespMsg: {
      type: new GraphQLList(PaymentGatewayRespMsgType),
      args : {paymentGatewayResponseId: {type: GraphQLString}},
      resolve: (paymentGatewayResponse, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayRespMsgs/find?paymentGatewayResponseId=${paymentGatewayResponse.paymentGatewayResponseId}`)
    }
  })
});

export {PaymentGatewayResponseType};
    