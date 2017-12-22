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


const activateGiftCard = {
  type: ResponseType,
  description: 'mutation for ofbiz activateGiftCard method',
  args:{paymentConfig: {type: GraphQLString},amount: {type: GraphQLFloat},vlPromoCode: {type: GraphQLString},currency: {type: GraphQLString},orderId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingValuelink/activateGiftCard?paymentConfig=${args.paymentConfig}amount=${args.amount}vlPromoCode=${args.vlPromoCode}currency=${args.currency}orderId=${args.orderId}partyId=${args.partyId}`, null, req);
  }
};
export {activateGiftCard};


const assignWorkingKey = {
  type: ResponseType,
  description: 'mutation for ofbiz assignWorkingKey method',
  args:{paymentConfig: {type: GraphQLString},desHexString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingValuelink/assignWorkingKey?paymentConfig=${args.paymentConfig}desHexString=${args.desHexString}`, null, req);
  }
};
export {assignWorkingKey};


const balanceInquireGiftCard = {
  type: ResponseType,
  description: 'mutation for ofbiz balanceInquireGiftCard method',
  args:{paymentConfig: {type: GraphQLString},pin: {type: GraphQLString},currency: {type: GraphQLString},cardNumber: {type: GraphQLString},orderId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingValuelink/balanceInquireGiftCard?paymentConfig=${args.paymentConfig}pin=${args.pin}currency=${args.currency}cardNumber=${args.cardNumber}orderId=${args.orderId}partyId=${args.partyId}`, null, req);
  }
};
export {balanceInquireGiftCard};


const createVLKeys = {
  type: ResponseType,
  description: 'mutation for ofbiz createVLKeys method',
  args:{paymentConfig: {type: GraphQLString},kekOnly: {type: GraphQLBoolean},kekTest: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingValuelink/createVLKeys?paymentConfig=${args.paymentConfig}kekOnly=${args.kekOnly}kekTest=${args.kekTest}`, null, req);
  }
};
export {createVLKeys};


const disableGiftCardPin = {
  type: ResponseType,
  description: 'mutation for ofbiz disableGiftCardPin method',
  args:{paymentConfig: {type: GraphQLString},pin: {type: GraphQLString},cardNumber: {type: GraphQLString},orderId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingValuelink/disableGiftCardPin?paymentConfig=${args.paymentConfig}pin=${args.pin}cardNumber=${args.cardNumber}orderId=${args.orderId}partyId=${args.partyId}`, null, req);
  }
};
export {disableGiftCardPin};


const linkPhysicalGiftCard = {
  type: ResponseType,
  description: 'mutation for ofbiz linkPhysicalGiftCard method',
  args:{paymentConfig: {type: GraphQLString},physicalPin: {type: GraphQLString},physicalCard: {type: GraphQLString},virtualCard: {type: GraphQLString},virtualPin: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingValuelink/linkPhysicalGiftCard?paymentConfig=${args.paymentConfig}physicalPin=${args.physicalPin}physicalCard=${args.physicalCard}virtualCard=${args.virtualCard}virtualPin=${args.virtualPin}partyId=${args.partyId}`, null, req);
  }
};
export {linkPhysicalGiftCard};


const redeemGiftCard = {
  type: ResponseType,
  description: 'mutation for ofbiz redeemGiftCard method',
  args:{paymentConfig: {type: GraphQLString},amount: {type: GraphQLFloat},pin: {type: GraphQLString},currency: {type: GraphQLString},cardNumber: {type: GraphQLString},orderId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingValuelink/redeemGiftCard?paymentConfig=${args.paymentConfig}amount=${args.amount}pin=${args.pin}currency=${args.currency}cardNumber=${args.cardNumber}orderId=${args.orderId}partyId=${args.partyId}`, null, req);
  }
};
export {redeemGiftCard};


const refundGiftCard = {
  type: ResponseType,
  description: 'mutation for ofbiz refundGiftCard method',
  args:{paymentConfig: {type: GraphQLString},amount: {type: GraphQLFloat},pin: {type: GraphQLString},currency: {type: GraphQLString},cardNumber: {type: GraphQLString},orderId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingValuelink/refundGiftCard?paymentConfig=${args.paymentConfig}amount=${args.amount}pin=${args.pin}currency=${args.currency}cardNumber=${args.cardNumber}orderId=${args.orderId}partyId=${args.partyId}`, null, req);
  }
};
export {refundGiftCard};


const reloadGiftCard = {
  type: ResponseType,
  description: 'mutation for ofbiz reloadGiftCard method',
  args:{paymentConfig: {type: GraphQLString},amount: {type: GraphQLFloat},pin: {type: GraphQLString},currency: {type: GraphQLString},cardNumber: {type: GraphQLString},orderId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingValuelink/reloadGiftCard?paymentConfig=${args.paymentConfig}amount=${args.amount}pin=${args.pin}currency=${args.currency}cardNumber=${args.cardNumber}orderId=${args.orderId}partyId=${args.partyId}`, null, req);
  }
};
export {reloadGiftCard};


const testKekEncryption = {
  type: ResponseType,
  description: 'mutation for ofbiz testKekEncryption method',
  args:{paymentConfig: {type: GraphQLString},mode: {type: GraphQLInt},kekTest: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingValuelink/testKekEncryption?paymentConfig=${args.paymentConfig}mode=${args.mode}kekTest=${args.kekTest}`, null, req);
  }
};
export {testKekEncryption};


const transactionHistoryGiftCard = {
  type: ResponseType,
  description: 'mutation for ofbiz transactionHistoryGiftCard method',
  args:{paymentConfig: {type: GraphQLString},pin: {type: GraphQLString},cardNumber: {type: GraphQLString},orderId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingValuelink/transactionHistoryGiftCard?paymentConfig=${args.paymentConfig}pin=${args.pin}cardNumber=${args.cardNumber}orderId=${args.orderId}partyId=${args.partyId}`, null, req);
  }
};
export {transactionHistoryGiftCard};


const valueLinkGcPurchase = {
  type: ResponseType,
  description: 'mutation for ofbiz valueLinkGcPurchase method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},orderItem: {type: new GraphQLList(KeyValueInputType)},contentId: {type: GraphQLString},productContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingValuelink/valueLinkGcPurchase?fromDate=${args.fromDate}productId=${args.productId}orderItem=${args.orderItem}contentId=${args.contentId}productContentTypeId=${args.productContentTypeId}`, null, req);
  }
};
export {valueLinkGcPurchase};


const valueLinkGcReload = {
  type: ResponseType,
  description: 'mutation for ofbiz valueLinkGcReload method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},orderItem: {type: new GraphQLList(KeyValueInputType)},contentId: {type: GraphQLString},productContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingValuelink/valueLinkGcReload?fromDate=${args.fromDate}productId=${args.productId}orderItem=${args.orderItem}contentId=${args.contentId}productContentTypeId=${args.productContentTypeId}`, null, req);
  }
};
export {valueLinkGcReload};


const valueLinkProcessor = {
  type: ResponseType,
  description: 'mutation for ofbiz valueLinkProcessor method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},giftCard: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingValuelink/valueLinkProcessor?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}giftCard=${args.giftCard}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {valueLinkProcessor};


const valueLinkRefund = {
  type: ResponseType,
  description: 'mutation for ofbiz valueLinkRefund method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},refundAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingValuelink/valueLinkRefund?orderPaymentPreference=${args.orderPaymentPreference}refundAmount=${args.refundAmount}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}currency=${args.currency}`, null, req);
  }
};
export {valueLinkRefund};


const valueLinkRelease = {
  type: ResponseType,
  description: 'mutation for ofbiz valueLinkRelease method',
  args:{releaseAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingValuelink/valueLinkRelease?releaseAmount=${args.releaseAmount}orderPaymentPreference=${args.orderPaymentPreference}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}authTrans=${args.authTrans}currency=${args.currency}`, null, req);
  }
};
export {valueLinkRelease};


const vlTimeOutReversal = {
  type: ResponseType,
  description: 'mutation for ofbiz vlTimeOutReversal method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingValuelink/vlTimeOutReversal?`, null, req);
  }
};
export {vlTimeOutReversal};


const voidActivateGiftCard = {
  type: ResponseType,
  description: 'mutation for ofbiz voidActivateGiftCard method',
  args:{paymentConfig: {type: GraphQLString},amount: {type: GraphQLFloat},currency: {type: GraphQLString},pin: {type: GraphQLString},orderId: {type: GraphQLString},partyId: {type: GraphQLString},cardNumber: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingValuelink/voidActivateGiftCard?paymentConfig=${args.paymentConfig}amount=${args.amount}currency=${args.currency}pin=${args.pin}orderId=${args.orderId}partyId=${args.partyId}cardNumber=${args.cardNumber}`, null, req);
  }
};
export {voidActivateGiftCard};


const voidRedeemGiftCard = {
  type: ResponseType,
  description: 'mutation for ofbiz voidRedeemGiftCard method',
  args:{paymentConfig: {type: GraphQLString},amount: {type: GraphQLFloat},pin: {type: GraphQLString},currency: {type: GraphQLString},cardNumber: {type: GraphQLString},orderId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingValuelink/voidRedeemGiftCard?paymentConfig=${args.paymentConfig}amount=${args.amount}pin=${args.pin}currency=${args.currency}cardNumber=${args.cardNumber}orderId=${args.orderId}partyId=${args.partyId}`, null, req);
  }
};
export {voidRedeemGiftCard};


const voidRefundGiftCard = {
  type: ResponseType,
  description: 'mutation for ofbiz voidRefundGiftCard method',
  args:{paymentConfig: {type: GraphQLString},amount: {type: GraphQLFloat},pin: {type: GraphQLString},currency: {type: GraphQLString},cardNumber: {type: GraphQLString},orderId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingValuelink/voidRefundGiftCard?paymentConfig=${args.paymentConfig}amount=${args.amount}pin=${args.pin}currency=${args.currency}cardNumber=${args.cardNumber}orderId=${args.orderId}partyId=${args.partyId}`, null, req);
  }
};
export {voidRefundGiftCard};


const voidReloadGiftCard = {
  type: ResponseType,
  description: 'mutation for ofbiz voidReloadGiftCard method',
  args:{paymentConfig: {type: GraphQLString},amount: {type: GraphQLFloat},pin: {type: GraphQLString},currency: {type: GraphQLString},cardNumber: {type: GraphQLString},orderId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingValuelink/voidReloadGiftCard?paymentConfig=${args.paymentConfig}amount=${args.amount}pin=${args.pin}currency=${args.currency}cardNumber=${args.cardNumber}orderId=${args.orderId}partyId=${args.partyId}`, null, req);
  }
};
export {voidReloadGiftCard};
