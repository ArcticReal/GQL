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
import {KeyValueType} from '../../framework/helpTypes.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';


const clearCommerceCCAuth = {
  type: GraphQLString,
  description: 'mutation for ofbiz clearCommerceCCAuth method',
  args:{billToParty: {type: new GraphQLList(KeyValueType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueType)},creditCard: {type: new GraphQLList(KeyValueType)},paymentConfig: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueType)},paymentGatewayConfigId: {type: GraphQLString},ccAction: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingClearcommerce/clearCommerceCCAuth?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}creditCard=${args.creditCard}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}cardSecurityCode=${args.cardSecurityCode}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}ccAction=${args.ccAction}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {clearCommerceCCAuth};


const clearCommerceCCCapture = {
  type: GraphQLString,
  description: 'mutation for ofbiz clearCommerceCCCapture method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueType)},captureAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingClearcommerce/clearCommerceCCCapture?orderPaymentPreference=${args.orderPaymentPreference}captureAmount=${args.captureAmount}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}authTrans=${args.authTrans}currency=${args.currency}`, null, req);
  }
};
export {clearCommerceCCCapture};


const clearCommerceCCCredit = {
  type: GraphQLString,
  description: 'mutation for ofbiz clearCommerceCCCredit method',
  args:{billToParty: {type: new GraphQLList(KeyValueType)},orderId: {type: GraphQLString},referenceCode: {type: GraphQLString},creditAmount: {type: GraphQLFloat},creditCard: {type: new GraphQLList(KeyValueType)},paymentConfig: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueType)},paymentGatewayConfigId: {type: GraphQLString},OrderFrequencyCycle: {type: GraphQLString},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueType)},OrderFrequencyInterval: {type: GraphQLString},TotalNumberPayments: {type: GraphQLString},pbOrder: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingClearcommerce/clearCommerceCCCredit?billToParty=${args.billToParty}orderId=${args.orderId}referenceCode=${args.referenceCode}creditAmount=${args.creditAmount}creditCard=${args.creditCard}paymentConfig=${args.paymentConfig}cardSecurityCode=${args.cardSecurityCode}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}OrderFrequencyCycle=${args.OrderFrequencyCycle}currency=${args.currency}billingAddress=${args.billingAddress}orderItems=${args.orderItems}OrderFrequencyInterval=${args.OrderFrequencyInterval}TotalNumberPayments=${args.TotalNumberPayments}pbOrder=${args.pbOrder}`, null, req);
  }
};
export {clearCommerceCCCredit};


const clearCommerceCCRefund = {
  type: GraphQLString,
  description: 'mutation for ofbiz clearCommerceCCRefund method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueType)},refundAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingClearcommerce/clearCommerceCCRefund?orderPaymentPreference=${args.orderPaymentPreference}refundAmount=${args.refundAmount}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}currency=${args.currency}`, null, req);
  }
};
export {clearCommerceCCRefund};


const clearCommerceCCRelease = {
  type: GraphQLString,
  description: 'mutation for ofbiz clearCommerceCCRelease method',
  args:{releaseAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueType)},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingClearcommerce/clearCommerceCCRelease?releaseAmount=${args.releaseAmount}orderPaymentPreference=${args.orderPaymentPreference}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}authTrans=${args.authTrans}currency=${args.currency}`, null, req);
  }
};
export {clearCommerceCCRelease};


const clearCommerceCCReport = {
  type: GraphQLString,
  description: 'mutation for ofbiz clearCommerceCCReport method',
  args:{billToParty: {type: new GraphQLList(KeyValueType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueType)},creditCard: {type: new GraphQLList(KeyValueType)},paymentConfig: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingClearcommerce/clearCommerceCCReport?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}creditCard=${args.creditCard}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}cardSecurityCode=${args.cardSecurityCode}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {clearCommerceCCReport};
