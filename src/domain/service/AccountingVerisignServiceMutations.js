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


const payflowCCCapture = {
  type: GraphQLString,
  description: 'mutation for ofbiz payflowCCCapture method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueType)},captureAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingVerisign/payflowCCCapture?orderPaymentPreference=${args.orderPaymentPreference}captureAmount=${args.captureAmount}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}authTrans=${args.authTrans}currency=${args.currency}`, null, req);
  }
};
export {payflowCCCapture};


const payflowCCProcessor = {
  type: GraphQLString,
  description: 'mutation for ofbiz payflowCCProcessor method',
  args:{billToParty: {type: new GraphQLList(KeyValueType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueType)},creditCard: {type: new GraphQLList(KeyValueType)},paymentConfig: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingVerisign/payflowCCProcessor?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}creditCard=${args.creditCard}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}cardSecurityCode=${args.cardSecurityCode}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {payflowCCProcessor};


const payflowCCRefund = {
  type: GraphQLString,
  description: 'mutation for ofbiz payflowCCRefund method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueType)},refundAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingVerisign/payflowCCRefund?orderPaymentPreference=${args.orderPaymentPreference}refundAmount=${args.refundAmount}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}currency=${args.currency}`, null, req);
  }
};
export {payflowCCRefund};


const payflowCCVoid = {
  type: GraphQLString,
  description: 'mutation for ofbiz payflowCCVoid method',
  args:{releaseAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueType)},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingVerisign/payflowCCVoid?releaseAmount=${args.releaseAmount}orderPaymentPreference=${args.orderPaymentPreference}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}authTrans=${args.authTrans}currency=${args.currency}`, null, req);
  }
};
export {payflowCCVoid};


const payflowDoExpressCheckout = {
  type: GraphQLString,
  description: 'mutation for ofbiz payflowDoExpressCheckout method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingVerisign/payflowDoExpressCheckout?orderPaymentPreference=${args.orderPaymentPreference}`, null, req);
  }
};
export {payflowDoExpressCheckout};


const payflowGetExpressCheckout = {
  type: GraphQLString,
  description: 'mutation for ofbiz payflowGetExpressCheckout method',
  args:{cart: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingVerisign/payflowGetExpressCheckout?cart=${args.cart}`, null, req);
  }
};
export {payflowGetExpressCheckout};


const payflowPayPalCapture = {
  type: GraphQLString,
  description: 'mutation for ofbiz payflowPayPalCapture method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueType)},captureAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingVerisign/payflowPayPalCapture?orderPaymentPreference=${args.orderPaymentPreference}captureAmount=${args.captureAmount}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}authTrans=${args.authTrans}currency=${args.currency}`, null, req);
  }
};
export {payflowPayPalCapture};


const payflowPayPalProcessor = {
  type: GraphQLString,
  description: 'mutation for ofbiz payflowPayPalProcessor method',
  args:{billToParty: {type: new GraphQLList(KeyValueType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueType)},payPalPaymentMethod: {type: new GraphQLList(KeyValueType)},paymentConfig: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingVerisign/payflowPayPalProcessor?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}payPalPaymentMethod=${args.payPalPaymentMethod}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {payflowPayPalProcessor};


const payflowPayPalRefund = {
  type: GraphQLString,
  description: 'mutation for ofbiz payflowPayPalRefund method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueType)},refundAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingVerisign/payflowPayPalRefund?orderPaymentPreference=${args.orderPaymentPreference}refundAmount=${args.refundAmount}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}currency=${args.currency}`, null, req);
  }
};
export {payflowPayPalRefund};


const payflowPayPalVoid = {
  type: GraphQLString,
  description: 'mutation for ofbiz payflowPayPalVoid method',
  args:{releaseAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueType)},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingVerisign/payflowPayPalVoid?releaseAmount=${args.releaseAmount}orderPaymentPreference=${args.orderPaymentPreference}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}authTrans=${args.authTrans}currency=${args.currency}`, null, req);
  }
};
export {payflowPayPalVoid};


const payflowSetExpressCheckout = {
  type: GraphQLString,
  description: 'mutation for ofbiz payflowSetExpressCheckout method',
  args:{cart: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingVerisign/payflowSetExpressCheckout?cart=${args.cart}`, null, req);
  }
};
export {payflowSetExpressCheckout};
