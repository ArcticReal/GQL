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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const payPalCapture = {
  type: ResponseType,
  description: 'mutation for ofbiz payPalCapture method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},captureAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaypal/payPalCapture?orderPaymentPreference=${args.orderPaymentPreference}&captureAmount=${args.captureAmount}&paymentConfig=${args.paymentConfig}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&authTrans=${args.authTrans}&currency=${args.currency}&`, null, req);
  }
};
export {payPalCapture};


const payPalCheckoutUpdate = {
  type: ResponseType,
  description: 'mutation for ofbiz payPalCheckoutUpdate method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaypal/payPalCheckoutUpdate?`, null, req);
  }
};
export {payPalCheckoutUpdate};


const payPalDoExpressCheckout = {
  type: ResponseType,
  description: 'mutation for ofbiz payPalDoExpressCheckout method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaypal/payPalDoExpressCheckout?orderPaymentPreference=${args.orderPaymentPreference}&`, null, req);
  }
};
export {payPalDoExpressCheckout};


const payPalGetExpressCheckout = {
  type: ResponseType,
  description: 'mutation for ofbiz payPalGetExpressCheckout method',
  args:{cart: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaypal/payPalGetExpressCheckout?cart=${args.cart}&`, null, req);
  }
};
export {payPalGetExpressCheckout};


const payPalProcessor = {
  type: ResponseType,
  description: 'mutation for ofbiz payPalProcessor method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},payPalPaymentMethod: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaypal/payPalProcessor?billToParty=${args.billToParty}&orderId=${args.orderId}&processAmount=${args.processAmount}&orderPaymentPreference=${args.orderPaymentPreference}&payPalPaymentMethod=${args.payPalPaymentMethod}&orderItems=${args.orderItems}&paymentConfig=${args.paymentConfig}&billToEmail=${args.billToEmail}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&shippingAddress=${args.shippingAddress}&currency=${args.currency}&billingAddress=${args.billingAddress}&customerIpAddress=${args.customerIpAddress}&`, null, req);
  }
};
export {payPalProcessor};


const payPalRefund = {
  type: ResponseType,
  description: 'mutation for ofbiz payPalRefund method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},refundAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaypal/payPalRefund?orderPaymentPreference=${args.orderPaymentPreference}&refundAmount=${args.refundAmount}&paymentConfig=${args.paymentConfig}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&currency=${args.currency}&`, null, req);
  }
};
export {payPalRefund};


const payPalSetExpressCheckout = {
  type: ResponseType,
  description: 'mutation for ofbiz payPalSetExpressCheckout method',
  args:{cart: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaypal/payPalSetExpressCheckout?cart=${args.cart}&`, null, req);
  }
};
export {payPalSetExpressCheckout};


const payPalVoid = {
  type: ResponseType,
  description: 'mutation for ofbiz payPalVoid method',
  args:{releaseAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaypal/payPalVoid?releaseAmount=${args.releaseAmount}&orderPaymentPreference=${args.orderPaymentPreference}&paymentConfig=${args.paymentConfig}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&authTrans=${args.authTrans}&currency=${args.currency}&`, null, req);
  }
};
export {payPalVoid};
