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


const pcChargeCCAuth = {
  type: ResponseType,
  description: 'mutation for ofbiz pcChargeCCAuth method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},creditCard: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPccharge/pcChargeCCAuth?billToParty=${args.billToParty}&orderId=${args.orderId}&processAmount=${args.processAmount}&orderPaymentPreference=${args.orderPaymentPreference}&creditCard=${args.creditCard}&orderItems=${args.orderItems}&paymentConfig=${args.paymentConfig}&cardSecurityCode=${args.cardSecurityCode}&billToEmail=${args.billToEmail}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&shippingAddress=${args.shippingAddress}&currency=${args.currency}&billingAddress=${args.billingAddress}&customerIpAddress=${args.customerIpAddress}&`, null, req);
  }
};
export {pcChargeCCAuth};


const pcChargeCCCapture = {
  type: ResponseType,
  description: 'mutation for ofbiz pcChargeCCCapture method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},captureAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPccharge/pcChargeCCCapture?orderPaymentPreference=${args.orderPaymentPreference}&captureAmount=${args.captureAmount}&paymentConfig=${args.paymentConfig}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&authTrans=${args.authTrans}&currency=${args.currency}&`, null, req);
  }
};
export {pcChargeCCCapture};


const pcChargeCCRefund = {
  type: ResponseType,
  description: 'mutation for ofbiz pcChargeCCRefund method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},refundAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPccharge/pcChargeCCRefund?orderPaymentPreference=${args.orderPaymentPreference}&refundAmount=${args.refundAmount}&paymentConfig=${args.paymentConfig}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&currency=${args.currency}&`, null, req);
  }
};
export {pcChargeCCRefund};


const pcChargeCCRelease = {
  type: ResponseType,
  description: 'mutation for ofbiz pcChargeCCRelease method',
  args:{releaseAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPccharge/pcChargeCCRelease?releaseAmount=${args.releaseAmount}&orderPaymentPreference=${args.orderPaymentPreference}&paymentConfig=${args.paymentConfig}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&authTrans=${args.authTrans}&currency=${args.currency}&`, null, req);
  }
};
export {pcChargeCCRelease};
