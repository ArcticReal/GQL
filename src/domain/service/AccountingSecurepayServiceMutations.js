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


const ofbScAuthorize = {
  type: GraphQLString,
  description: 'mutation for ofbiz ofbScAuthorize method',
  args:{billToParty: {type: new GraphQLList(KeyValueType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueType)},creditCard: {type: new GraphQLList(KeyValueType)},paymentConfig: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingSecurepay/ofbScAuthorize?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}creditCard=${args.creditCard}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}cardSecurityCode=${args.cardSecurityCode}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {ofbScAuthorize};


const ofbScCCCredit = {
  type: GraphQLString,
  description: 'mutation for ofbiz ofbScCCCredit method',
  args:{billToParty: {type: new GraphQLList(KeyValueType)},referenceCode: {type: GraphQLString},creditAmount: {type: GraphQLFloat},creditCard: {type: new GraphQLList(KeyValueType)},paymentConfig: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueType)},paymentGatewayConfigId: {type: GraphQLString},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingSecurepay/ofbScCCCredit?billToParty=${args.billToParty}referenceCode=${args.referenceCode}creditAmount=${args.creditAmount}creditCard=${args.creditCard}paymentConfig=${args.paymentConfig}cardSecurityCode=${args.cardSecurityCode}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}currency=${args.currency}billingAddress=${args.billingAddress}orderItems=${args.orderItems}`, null, req);
  }
};
export {ofbScCCCredit};


const ofbScCapture = {
  type: GraphQLString,
  description: 'mutation for ofbiz ofbScCapture method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueType)},captureAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingSecurepay/ofbScCapture?orderPaymentPreference=${args.orderPaymentPreference}captureAmount=${args.captureAmount}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}authTrans=${args.authTrans}currency=${args.currency}`, null, req);
  }
};
export {ofbScCapture};


const ofbScRefund = {
  type: GraphQLString,
  description: 'mutation for ofbiz ofbScRefund method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueType)},refundAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingSecurepay/ofbScRefund?orderPaymentPreference=${args.orderPaymentPreference}refundAmount=${args.refundAmount}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}currency=${args.currency}`, null, req);
  }
};
export {ofbScRefund};


const ofbScRelease = {
  type: GraphQLString,
  description: 'mutation for ofbiz ofbScRelease method',
  args:{releaseAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueType)},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingSecurepay/ofbScRelease?releaseAmount=${args.releaseAmount}orderPaymentPreference=${args.orderPaymentPreference}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}authTrans=${args.authTrans}currency=${args.currency}`, null, req);
  }
};
export {ofbScRelease};
