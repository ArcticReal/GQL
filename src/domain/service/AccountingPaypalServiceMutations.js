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


const payPalCapture = {
  type: GraphQLString,
  description: 'mutation for ofbiz payPalCapture method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueType)},captureAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaypal/payPalCapture?orderPaymentPreference=${args.orderPaymentPreference}captureAmount=${args.captureAmount}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}authTrans=${args.authTrans}currency=${args.currency}`, null, req);
  }
};
export {payPalCapture};


const payPalCheckoutUpdate = {
  type: GraphQLString,
  description: 'mutation for ofbiz payPalCheckoutUpdate method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaypal/payPalCheckoutUpdate?`, null, req);
  }
};
export {payPalCheckoutUpdate};


const payPalDoExpressCheckout = {
  type: GraphQLString,
  description: 'mutation for ofbiz payPalDoExpressCheckout method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaypal/payPalDoExpressCheckout?orderPaymentPreference=${args.orderPaymentPreference}`, null, req);
  }
};
export {payPalDoExpressCheckout};


const payPalGetExpressCheckout = {
  type: GraphQLString,
  description: 'mutation for ofbiz payPalGetExpressCheckout method',
  args:{cart: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaypal/payPalGetExpressCheckout?cart=${args.cart}`, null, req);
  }
};
export {payPalGetExpressCheckout};


const payPalProcessor = {
  type: GraphQLString,
  description: 'mutation for ofbiz payPalProcessor method',
  args:{billToParty: {type: new GraphQLList(KeyValueType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueType)},payPalPaymentMethod: {type: new GraphQLList(KeyValueType)},paymentConfig: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaypal/payPalProcessor?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}payPalPaymentMethod=${args.payPalPaymentMethod}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {payPalProcessor};


const payPalRefund = {
  type: GraphQLString,
  description: 'mutation for ofbiz payPalRefund method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueType)},refundAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaypal/payPalRefund?orderPaymentPreference=${args.orderPaymentPreference}refundAmount=${args.refundAmount}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}currency=${args.currency}`, null, req);
  }
};
export {payPalRefund};


const payPalSetExpressCheckout = {
  type: GraphQLString,
  description: 'mutation for ofbiz payPalSetExpressCheckout method',
  args:{cart: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaypal/payPalSetExpressCheckout?cart=${args.cart}`, null, req);
  }
};
export {payPalSetExpressCheckout};


const payPalVoid = {
  type: GraphQLString,
  description: 'mutation for ofbiz payPalVoid method',
  args:{releaseAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueType)},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaypal/payPalVoid?releaseAmount=${args.releaseAmount}orderPaymentPreference=${args.orderPaymentPreference}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}authTrans=${args.authTrans}currency=${args.currency}`, null, req);
  }
};
export {payPalVoid};
