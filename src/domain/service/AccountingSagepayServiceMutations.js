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


const SagePayPaymentAuthentication = {
  type: ResponseType,
  description: 'mutation for ofbiz SagePayPaymentAuthentication method',
  args:{expiryDate: {type: GraphQLString},amount: {type: GraphQLString},vendorTxCode: {type: GraphQLString},cardType: {type: GraphQLString},cardHolder: {type: GraphQLString},description: {type: GraphQLString},currency: {type: GraphQLString},billingAddress: {type: GraphQLString},billingPostCode: {type: GraphQLString},cardNumber: {type: GraphQLString},deliveryPhone: {type: GraphQLString},deliveryCity: {type: GraphQLString},basket: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},issueNumber: {type: GraphQLString},deliveryAddress2: {type: GraphQLString},billingFirstnames: {type: GraphQLString},billingState: {type: GraphQLString},deliverySurname: {type: GraphQLString},billingAddress2: {type: GraphQLString},deliveryPostCode: {type: GraphQLString},deliveryAddress: {type: GraphQLString},deliveryCountry: {type: GraphQLString},deliveryState: {type: GraphQLString},billingSurname: {type: GraphQLString},billingCountry: {type: GraphQLString},isBillingSameAsDelivery: {type: GraphQLBoolean},deliveryFirstnames: {type: GraphQLString},billingCity: {type: GraphQLString},billingPhone: {type: GraphQLString},cv2: {type: GraphQLString},startDate: {type: GraphQLString},clientIPAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingSagepay/SagePayPaymentAuthentication?expiryDate=${args.expiryDate}&amount=${args.amount}&vendorTxCode=${args.vendorTxCode}&cardType=${args.cardType}&cardHolder=${args.cardHolder}&description=${args.description}&currency=${args.currency}&billingAddress=${args.billingAddress}&billingPostCode=${args.billingPostCode}&cardNumber=${args.cardNumber}&deliveryPhone=${args.deliveryPhone}&deliveryCity=${args.deliveryCity}&basket=${args.basket}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&issueNumber=${args.issueNumber}&deliveryAddress2=${args.deliveryAddress2}&billingFirstnames=${args.billingFirstnames}&billingState=${args.billingState}&deliverySurname=${args.deliverySurname}&billingAddress2=${args.billingAddress2}&deliveryPostCode=${args.deliveryPostCode}&deliveryAddress=${args.deliveryAddress}&deliveryCountry=${args.deliveryCountry}&deliveryState=${args.deliveryState}&billingSurname=${args.billingSurname}&billingCountry=${args.billingCountry}&isBillingSameAsDelivery=${args.isBillingSameAsDelivery}&deliveryFirstnames=${args.deliveryFirstnames}&billingCity=${args.billingCity}&billingPhone=${args.billingPhone}&cv2=${args.cv2}&startDate=${args.startDate}&clientIPAddress=${args.clientIPAddress}&`, null, req);
  }
};
export {SagePayPaymentAuthentication};


const SagePayPaymentAuthorisation = {
  type: ResponseType,
  description: 'mutation for ofbiz SagePayPaymentAuthorisation method',
  args:{amount: {type: GraphQLString},vendorTxCode: {type: GraphQLString},vpsTxId: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},securityKey: {type: GraphQLString},txAuthNo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingSagepay/SagePayPaymentAuthorisation?amount=${args.amount}&vendorTxCode=${args.vendorTxCode}&vpsTxId=${args.vpsTxId}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&securityKey=${args.securityKey}&txAuthNo=${args.txAuthNo}&`, null, req);
  }
};
export {SagePayPaymentAuthorisation};


const SagePayPaymentRefund = {
  type: ResponseType,
  description: 'mutation for ofbiz SagePayPaymentRefund method',
  args:{relatedVendorTxCode: {type: GraphQLString},amount: {type: GraphQLString},vendorTxCode: {type: GraphQLString},description: {type: GraphQLString},currency: {type: GraphQLString},relatedTxAuthNo: {type: GraphQLString},relatedVPSTxId: {type: GraphQLString},relatedSecurityKey: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingSagepay/SagePayPaymentRefund?relatedVendorTxCode=${args.relatedVendorTxCode}&amount=${args.amount}&vendorTxCode=${args.vendorTxCode}&description=${args.description}&currency=${args.currency}&relatedTxAuthNo=${args.relatedTxAuthNo}&relatedVPSTxId=${args.relatedVPSTxId}&relatedSecurityKey=${args.relatedSecurityKey}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&`, null, req);
  }
};
export {SagePayPaymentRefund};


const SagePayPaymentRelease = {
  type: ResponseType,
  description: 'mutation for ofbiz SagePayPaymentRelease method',
  args:{releaseAmount: {type: GraphQLString},vpsTxId: {type: GraphQLString},vendorTxCode: {type: GraphQLString},securityKey: {type: GraphQLString},txAuthNo: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingSagepay/SagePayPaymentRelease?releaseAmount=${args.releaseAmount}&vpsTxId=${args.vpsTxId}&vendorTxCode=${args.vendorTxCode}&securityKey=${args.securityKey}&txAuthNo=${args.txAuthNo}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&`, null, req);
  }
};
export {SagePayPaymentRelease};


const SagePayPaymentVoid = {
  type: ResponseType,
  description: 'mutation for ofbiz SagePayPaymentVoid method',
  args:{vpsTxId: {type: GraphQLString},vendorTxCode: {type: GraphQLString},securityKey: {type: GraphQLString},txAuthNo: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingSagepay/SagePayPaymentVoid?vpsTxId=${args.vpsTxId}&vendorTxCode=${args.vendorTxCode}&securityKey=${args.securityKey}&txAuthNo=${args.txAuthNo}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&`, null, req);
  }
};
export {SagePayPaymentVoid};


const sagepayCCAuth = {
  type: ResponseType,
  description: 'mutation for ofbiz sagepayCCAuth method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},creditCard: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingSagepay/sagepayCCAuth?billToParty=${args.billToParty}&orderId=${args.orderId}&processAmount=${args.processAmount}&orderPaymentPreference=${args.orderPaymentPreference}&creditCard=${args.creditCard}&orderItems=${args.orderItems}&paymentConfig=${args.paymentConfig}&cardSecurityCode=${args.cardSecurityCode}&billToEmail=${args.billToEmail}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&shippingAddress=${args.shippingAddress}&currency=${args.currency}&billingAddress=${args.billingAddress}&customerIpAddress=${args.customerIpAddress}&`, null, req);
  }
};
export {sagepayCCAuth};


const sagepayCCCapture = {
  type: ResponseType,
  description: 'mutation for ofbiz sagepayCCCapture method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},captureAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingSagepay/sagepayCCCapture?orderPaymentPreference=${args.orderPaymentPreference}&captureAmount=${args.captureAmount}&paymentConfig=${args.paymentConfig}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&authTrans=${args.authTrans}&currency=${args.currency}&`, null, req);
  }
};
export {sagepayCCCapture};


const sagepayCCRefund = {
  type: ResponseType,
  description: 'mutation for ofbiz sagepayCCRefund method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},refundAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingSagepay/sagepayCCRefund?orderPaymentPreference=${args.orderPaymentPreference}&refundAmount=${args.refundAmount}&paymentConfig=${args.paymentConfig}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&currency=${args.currency}&`, null, req);
  }
};
export {sagepayCCRefund};


const sagepayCCRelease = {
  type: ResponseType,
  description: 'mutation for ofbiz sagepayCCRelease method',
  args:{releaseAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingSagepay/sagepayCCRelease?releaseAmount=${args.releaseAmount}&orderPaymentPreference=${args.orderPaymentPreference}&paymentConfig=${args.paymentConfig}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&authTrans=${args.authTrans}&currency=${args.currency}&`, null, req);
  }
};
export {sagepayCCRelease};
