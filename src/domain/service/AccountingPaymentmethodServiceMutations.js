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


const alwaysApproveCCProcessor = {
  type: ResponseType,
  description: 'mutation for ofbiz alwaysApproveCCProcessor method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},creditCard: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/alwaysApproveCCProcessor?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}creditCard=${args.creditCard}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}cardSecurityCode=${args.cardSecurityCode}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {alwaysApproveCCProcessor};


const alwaysApproveEFTProcessor = {
  type: ResponseType,
  description: 'mutation for ofbiz alwaysApproveEFTProcessor method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},eftAccount: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/alwaysApproveEFTProcessor?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}eftAccount=${args.eftAccount}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {alwaysApproveEFTProcessor};


const alwaysApproveGCProcessor = {
  type: ResponseType,
  description: 'mutation for ofbiz alwaysApproveGCProcessor method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},giftCard: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/alwaysApproveGCProcessor?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}giftCard=${args.giftCard}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {alwaysApproveGCProcessor};


const alwaysApproveWithCaptureCCProcessor = {
  type: ResponseType,
  description: 'mutation for ofbiz alwaysApproveWithCaptureCCProcessor method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},creditCard: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/alwaysApproveWithCaptureCCProcessor?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}creditCard=${args.creditCard}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}cardSecurityCode=${args.cardSecurityCode}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {alwaysApproveWithCaptureCCProcessor};


const alwaysBadCardNumberCCProcessor = {
  type: ResponseType,
  description: 'mutation for ofbiz alwaysBadCardNumberCCProcessor method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},creditCard: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/alwaysBadCardNumberCCProcessor?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}creditCard=${args.creditCard}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}cardSecurityCode=${args.cardSecurityCode}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {alwaysBadCardNumberCCProcessor};


const alwaysBadExpireCCProcessor = {
  type: ResponseType,
  description: 'mutation for ofbiz alwaysBadExpireCCProcessor method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},creditCard: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/alwaysBadExpireCCProcessor?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}creditCard=${args.creditCard}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}cardSecurityCode=${args.cardSecurityCode}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {alwaysBadExpireCCProcessor};


const alwaysDeclineCCProcessor = {
  type: ResponseType,
  description: 'mutation for ofbiz alwaysDeclineCCProcessor method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},creditCard: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/alwaysDeclineCCProcessor?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}creditCard=${args.creditCard}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}cardSecurityCode=${args.cardSecurityCode}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {alwaysDeclineCCProcessor};


const alwaysDeclineEFTProcessor = {
  type: ResponseType,
  description: 'mutation for ofbiz alwaysDeclineEFTProcessor method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},eftAccount: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/alwaysDeclineEFTProcessor?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}eftAccount=${args.eftAccount}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {alwaysDeclineEFTProcessor};


const alwaysDeclineGCProcessor = {
  type: ResponseType,
  description: 'mutation for ofbiz alwaysDeclineGCProcessor method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},giftCard: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/alwaysDeclineGCProcessor?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}giftCard=${args.giftCard}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {alwaysDeclineGCProcessor};


const alwaysFailCCProcessor = {
  type: ResponseType,
  description: 'mutation for ofbiz alwaysFailCCProcessor method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},creditCard: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/alwaysFailCCProcessor?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}creditCard=${args.creditCard}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}cardSecurityCode=${args.cardSecurityCode}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {alwaysFailCCProcessor};


const alwaysNsfCCProcessor = {
  type: ResponseType,
  description: 'mutation for ofbiz alwaysNsfCCProcessor method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},creditCard: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/alwaysNsfCCProcessor?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}creditCard=${args.creditCard}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}cardSecurityCode=${args.cardSecurityCode}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {alwaysNsfCCProcessor};


const authOrderPaymentPreference = {
  type: ResponseType,
  description: 'mutation for ofbiz authOrderPaymentPreference method',
  args:{orderPaymentPreferenceId: {type: GraphQLString},overrideAmount: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/authOrderPaymentPreference?orderPaymentPreferenceId=${args.orderPaymentPreferenceId}overrideAmount=${args.overrideAmount}`, null, req);
  }
};
export {authOrderPaymentPreference};


const authOrderPayments = {
  type: ResponseType,
  description: 'mutation for ofbiz authOrderPayments method',
  args:{orderId: {type: GraphQLString},reAuth: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/authOrderPayments?orderId=${args.orderId}reAuth=${args.reAuth}`, null, req);
  }
};
export {authOrderPayments};


const badExpireEvenCCProcessor = {
  type: ResponseType,
  description: 'mutation for ofbiz badExpireEvenCCProcessor method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},creditCard: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/badExpireEvenCCProcessor?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}creditCard=${args.creditCard}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}cardSecurityCode=${args.cardSecurityCode}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {badExpireEvenCCProcessor};


const buildCcExpireDate = {
  type: ResponseType,
  description: 'mutation for ofbiz buildCcExpireDate method',
  args:{expMonth: {type: GraphQLString},expYear: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/buildCcExpireDate?expMonth=${args.expMonth}expYear=${args.expYear}`, null, req);
  }
};
export {buildCcExpireDate};


const captureBillingAccountPayment = {
  type: ResponseType,
  description: 'mutation for ofbiz captureBillingAccountPayment method',
  args:{invoiceId: {type: GraphQLString},billingAccountId: {type: GraphQLString},captureAmount: {type: GraphQLFloat},orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/captureBillingAccountPayment?invoiceId=${args.invoiceId}billingAccountId=${args.billingAccountId}captureAmount=${args.captureAmount}orderId=${args.orderId}`, null, req);
  }
};
export {captureBillingAccountPayment};


const captureBillingAccountPayments = {
  type: ResponseType,
  description: 'mutation for ofbiz captureBillingAccountPayments method',
  args:{billingAccountId: {type: GraphQLString},invoiceId: {type: GraphQLString},captureAmount: {type: GraphQLFloat},orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/captureBillingAccountPayments?billingAccountId=${args.billingAccountId}invoiceId=${args.invoiceId}captureAmount=${args.captureAmount}orderId=${args.orderId}`, null, req);
  }
};
export {captureBillingAccountPayments};


const captureOrderPayments = {
  type: ResponseType,
  description: 'mutation for ofbiz captureOrderPayments method',
  args:{orderId: {type: GraphQLString},captureAmount: {type: GraphQLFloat},invoiceId: {type: GraphQLString},billingAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/captureOrderPayments?orderId=${args.orderId}captureAmount=${args.captureAmount}invoiceId=${args.invoiceId}billingAccountId=${args.billingAccountId}`, null, req);
  }
};
export {captureOrderPayments};


const capturePaymentsByInvoice = {
  type: ResponseType,
  description: 'mutation for ofbiz capturePaymentsByInvoice method',
  args:{invoiceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/capturePaymentsByInvoice?invoiceId=${args.invoiceId}`, null, req);
  }
};
export {capturePaymentsByInvoice};


const ccAuthInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz ccAuthInterface method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},creditCard: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/ccAuthInterface?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}creditCard=${args.creditCard}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}cardSecurityCode=${args.cardSecurityCode}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {ccAuthInterface};


const ccCaptureInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz ccCaptureInterface method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},captureAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/ccCaptureInterface?orderPaymentPreference=${args.orderPaymentPreference}captureAmount=${args.captureAmount}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}authTrans=${args.authTrans}currency=${args.currency}`, null, req);
  }
};
export {ccCaptureInterface};


const ccCreditInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz ccCreditInterface method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},referenceCode: {type: GraphQLString},creditAmount: {type: GraphQLFloat},creditCard: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/ccCreditInterface?billToParty=${args.billToParty}referenceCode=${args.referenceCode}creditAmount=${args.creditAmount}creditCard=${args.creditCard}paymentConfig=${args.paymentConfig}cardSecurityCode=${args.cardSecurityCode}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}currency=${args.currency}billingAddress=${args.billingAddress}orderItems=${args.orderItems}`, null, req);
  }
};
export {ccCreditInterface};


const clearCreditCardDataAndExpire = {
  type: ResponseType,
  description: 'mutation for ofbiz clearCreditCardDataAndExpire method',
  args:{paymentMethodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/clearCreditCardDataAndExpire?paymentMethodId=${args.paymentMethodId}`, null, req);
  }
};
export {clearCreditCardDataAndExpire};


const createCheckAccount = {
  type: ResponseType,
  description: 'mutation for ofbiz createCheckAccount method',
  args:{nameOnAccount: {type: GraphQLString},bankName: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString},companyNameOnAccount: {type: GraphQLString},routingNumber: {type: GraphQLString},paymentMethodId: {type: GraphQLString},accountType: {type: GraphQLString},description: {type: GraphQLString},partyId: {type: GraphQLString},accountNumber: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/createCheckAccount?nameOnAccount=${args.nameOnAccount}bankName=${args.bankName}paymentMethodTypeId=${args.paymentMethodTypeId}companyNameOnAccount=${args.companyNameOnAccount}routingNumber=${args.routingNumber}paymentMethodId=${args.paymentMethodId}accountType=${args.accountType}description=${args.description}partyId=${args.partyId}accountNumber=${args.accountNumber}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {createCheckAccount};


const createCreditCard = {
  type: ResponseType,
  description: 'mutation for ofbiz createCreditCard method',
  args:{lastNameOnCard: {type: GraphQLString},firstNameOnCard: {type: GraphQLString},cardType: {type: GraphQLString},expireDate: {type: GraphQLString},cardNumber: {type: GraphQLString},issueNumber: {type: GraphQLString},description: {type: GraphQLString},lastFailedAuthDate: {type: GraphQLString},consecutiveFailedNsf: {type: GraphQLInt},contactMechId: {type: GraphQLString},companyNameOnCard: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},expMonth: {type: GraphQLString},titleOnCard: {type: GraphQLString},expYear: {type: GraphQLString},paymentMethodId: {type: GraphQLString},middleNameOnCard: {type: GraphQLString},validFromDate: {type: GraphQLString},productStoreId: {type: GraphQLString},consecutiveFailedAuths: {type: GraphQLInt},partyId: {type: GraphQLString},lastFailedNsfDate: {type: GraphQLString},suffixOnCard: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/createCreditCard?lastNameOnCard=${args.lastNameOnCard}firstNameOnCard=${args.firstNameOnCard}cardType=${args.cardType}expireDate=${args.expireDate}cardNumber=${args.cardNumber}issueNumber=${args.issueNumber}description=${args.description}lastFailedAuthDate=${args.lastFailedAuthDate}consecutiveFailedNsf=${args.consecutiveFailedNsf}contactMechId=${args.contactMechId}companyNameOnCard=${args.companyNameOnCard}thruDate=${args.thruDate}fromDate=${args.fromDate}expMonth=${args.expMonth}titleOnCard=${args.titleOnCard}expYear=${args.expYear}paymentMethodId=${args.paymentMethodId}middleNameOnCard=${args.middleNameOnCard}validFromDate=${args.validFromDate}productStoreId=${args.productStoreId}consecutiveFailedAuths=${args.consecutiveFailedAuths}partyId=${args.partyId}lastFailedNsfDate=${args.lastFailedNsfDate}suffixOnCard=${args.suffixOnCard}`, null, req);
  }
};
export {createCreditCard};


const createCreditCardAndAddress = {
  type: ResponseType,
  description: 'mutation for ofbiz createCreditCardAndAddress method',
  args:{paymentMethodId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/createCreditCardAndAddress?paymentMethodId=${args.paymentMethodId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {createCreditCardAndAddress};


const createCreditCardTypeGlAccount = {
  type: ResponseType,
  description: 'mutation for ofbiz createCreditCardTypeGlAccount method',
  args:{cardType: {type: GraphQLString},glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/createCreditCardTypeGlAccount?cardType=${args.cardType}glAccountId=${args.glAccountId}organizationPartyId=${args.organizationPartyId}`, null, req);
  }
};
export {createCreditCardTypeGlAccount};


const createEftAccount = {
  type: ResponseType,
  description: 'mutation for ofbiz createEftAccount method',
  args:{routingNumber: {type: GraphQLString},nameOnAccount: {type: GraphQLString},accountType: {type: GraphQLString},bankName: {type: GraphQLString},accountNumber: {type: GraphQLString},fromDate: {type: GraphQLString},companyNameOnAccount: {type: GraphQLString},paymentMethodId: {type: GraphQLString},description: {type: GraphQLString},partyId: {type: GraphQLString},contactMechId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/createEftAccount?routingNumber=${args.routingNumber}nameOnAccount=${args.nameOnAccount}accountType=${args.accountType}bankName=${args.bankName}accountNumber=${args.accountNumber}fromDate=${args.fromDate}companyNameOnAccount=${args.companyNameOnAccount}paymentMethodId=${args.paymentMethodId}description=${args.description}partyId=${args.partyId}contactMechId=${args.contactMechId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createEftAccount};


const createEftAccountAndAddress = {
  type: ResponseType,
  description: 'mutation for ofbiz createEftAccountAndAddress method',
  args:{paymentMethodId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/createEftAccountAndAddress?paymentMethodId=${args.paymentMethodId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {createEftAccountAndAddress};


const createGiftCard = {
  type: ResponseType,
  description: 'mutation for ofbiz createGiftCard method',
  args:{cardNumber: {type: GraphQLString},fromDate: {type: GraphQLString},expMonth: {type: GraphQLString},expYear: {type: GraphQLString},paymentMethodId: {type: GraphQLString},description: {type: GraphQLString},pinNumber: {type: GraphQLString},expireDate: {type: GraphQLString},partyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/createGiftCard?cardNumber=${args.cardNumber}fromDate=${args.fromDate}expMonth=${args.expMonth}expYear=${args.expYear}paymentMethodId=${args.paymentMethodId}description=${args.description}pinNumber=${args.pinNumber}expireDate=${args.expireDate}partyId=${args.partyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createGiftCard};


const createPayPalPaymentMethod = {
  type: ResponseType,
  description: 'mutation for ofbiz createPayPalPaymentMethod method',
  args:{expressCheckoutToken: {type: GraphQLString},avsAddr: {type: GraphQLString},payerId: {type: GraphQLString},description: {type: GraphQLString},payerStatus: {type: GraphQLString},contactMechId: {type: GraphQLString},transactionId: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},paymentMethodId: {type: GraphQLString},avsZip: {type: GraphQLString},correlationId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/createPayPalPaymentMethod?expressCheckoutToken=${args.expressCheckoutToken}avsAddr=${args.avsAddr}payerId=${args.payerId}description=${args.description}payerStatus=${args.payerStatus}contactMechId=${args.contactMechId}transactionId=${args.transactionId}thruDate=${args.thruDate}fromDate=${args.fromDate}paymentMethodId=${args.paymentMethodId}avsZip=${args.avsZip}correlationId=${args.correlationId}partyId=${args.partyId}`, null, req);
  }
};
export {createPayPalPaymentMethod};


const createPaymentGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz createPaymentGroup method',
  args:{paymentGroupName: {type: GraphQLString},paymentGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/createPaymentGroup?paymentGroupName=${args.paymentGroupName}paymentGroupTypeId=${args.paymentGroupTypeId}`, null, req);
  }
};
export {createPaymentGroup};


const createPaymentGroupMember = {
  type: ResponseType,
  description: 'mutation for ofbiz createPaymentGroupMember method',
  args:{paymentGroupId: {type: GraphQLString},paymentId: {type: GraphQLString},fromDate: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/createPaymentGroupMember?paymentGroupId=${args.paymentGroupId}paymentId=${args.paymentId}fromDate=${args.fromDate}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {createPaymentGroupMember};


const createPaymentMethodType = {
  type: ResponseType,
  description: 'mutation for ofbiz createPaymentMethodType method',
  args:{defaultGlAccountId: {type: GraphQLString},description: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/createPaymentMethodType?defaultGlAccountId=${args.defaultGlAccountId}description=${args.description}paymentMethodTypeId=${args.paymentMethodTypeId}`, null, req);
  }
};
export {createPaymentMethodType};


const creditOrderPaymentPreference = {
  type: ResponseType,
  description: 'mutation for ofbiz creditOrderPaymentPreference method',
  args:{orderPaymentPreferenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/creditOrderPaymentPreference?orderPaymentPreferenceId=${args.orderPaymentPreferenceId}`, null, req);
  }
};
export {creditOrderPaymentPreference};


const deleteCreditCardTypeGlAccount = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteCreditCardTypeGlAccount method',
  args:{cardType: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/deleteCreditCardTypeGlAccount?cardType=${args.cardType}organizationPartyId=${args.organizationPartyId}`, null, req);
  }
};
export {deleteCreditCardTypeGlAccount};


const deletePaymentGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePaymentGroup method',
  args:{paymentGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/deletePaymentGroup?paymentGroupId=${args.paymentGroupId}`, null, req);
  }
};
export {deletePaymentGroup};


const deletePaymentGroupMember = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePaymentGroupMember method',
  args:{paymentGroupId: {type: GraphQLString},fromDate: {type: GraphQLString},paymentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/deletePaymentGroupMember?paymentGroupId=${args.paymentGroupId}fromDate=${args.fromDate}paymentId=${args.paymentId}`, null, req);
  }
};
export {deletePaymentGroupMember};


const deletePaymentMethod = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePaymentMethod method',
  args:{paymentMethodId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/deletePaymentMethod?paymentMethodId=${args.paymentMethodId}partyId=${args.partyId}`, null, req);
  }
};
export {deletePaymentMethod};


const deletePaymentMethodType = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePaymentMethodType method',
  args:{paymentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/deletePaymentMethodType?paymentMethodTypeId=${args.paymentMethodTypeId}`, null, req);
  }
};
export {deletePaymentMethodType};


const eftProcessInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz eftProcessInterface method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},eftAccount: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/eftProcessInterface?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}eftAccount=${args.eftAccount}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {eftProcessInterface};


const expirePaymentGroupMember = {
  type: ResponseType,
  description: 'mutation for ofbiz expirePaymentGroupMember method',
  args:{paymentGroupId: {type: GraphQLString},fromDate: {type: GraphQLString},paymentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/expirePaymentGroupMember?paymentGroupId=${args.paymentGroupId}fromDate=${args.fromDate}paymentId=${args.paymentId}`, null, req);
  }
};
export {expirePaymentGroupMember};


const giftCardProcessInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz giftCardProcessInterface method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},giftCard: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/giftCardProcessInterface?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}giftCard=${args.giftCard}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {giftCardProcessInterface};


const manualForcedCcAuthTransaction = {
  type: ResponseType,
  description: 'mutation for ofbiz manualForcedCcAuthTransaction method',
  args:{amount: {type: GraphQLFloat},paymentMethodId: {type: GraphQLString},productStoreId: {type: GraphQLString},securityCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/manualForcedCcAuthTransaction?amount=${args.amount}paymentMethodId=${args.paymentMethodId}productStoreId=${args.productStoreId}securityCode=${args.securityCode}`, null, req);
  }
};
export {manualForcedCcAuthTransaction};


const manualForcedCcTransaction = {
  type: ResponseType,
  description: 'mutation for ofbiz manualForcedCcTransaction method',
  args:{countryGeoId: {type: GraphQLString},lastName: {type: GraphQLString},amount: {type: GraphQLFloat},city: {type: GraphQLString},firstNameOnCard: {type: GraphQLString},address1: {type: GraphQLString},postalCode: {type: GraphQLString},cardType: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString},transactionType: {type: GraphQLString},expMonth: {type: GraphQLString},firstName: {type: GraphQLString},infoString: {type: GraphQLString},orderPaymentPreferenceId: {type: GraphQLString},lastNameOnCard: {type: GraphQLString},expYear: {type: GraphQLString},productStoreId: {type: GraphQLString},cardNumber: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},titleOnCard: {type: GraphQLString},address2: {type: GraphQLString},middleNameOnCard: {type: GraphQLString},stateProvinceGeoId: {type: GraphQLString},referenceCode: {type: GraphQLString},suffixOnCard: {type: GraphQLString},companyNameOnCard: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/manualForcedCcTransaction?countryGeoId=${args.countryGeoId}lastName=${args.lastName}amount=${args.amount}city=${args.city}firstNameOnCard=${args.firstNameOnCard}address1=${args.address1}postalCode=${args.postalCode}cardType=${args.cardType}paymentMethodTypeId=${args.paymentMethodTypeId}transactionType=${args.transactionType}expMonth=${args.expMonth}firstName=${args.firstName}infoString=${args.infoString}orderPaymentPreferenceId=${args.orderPaymentPreferenceId}lastNameOnCard=${args.lastNameOnCard}expYear=${args.expYear}productStoreId=${args.productStoreId}cardNumber=${args.cardNumber}cardSecurityCode=${args.cardSecurityCode}titleOnCard=${args.titleOnCard}address2=${args.address2}middleNameOnCard=${args.middleNameOnCard}stateProvinceGeoId=${args.stateProvinceGeoId}referenceCode=${args.referenceCode}suffixOnCard=${args.suffixOnCard}companyNameOnCard=${args.companyNameOnCard}`, null, req);
  }
};
export {manualForcedCcTransaction};


const payPalCaptureInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz payPalCaptureInterface method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},captureAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/payPalCaptureInterface?orderPaymentPreference=${args.orderPaymentPreference}captureAmount=${args.captureAmount}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}authTrans=${args.authTrans}currency=${args.currency}`, null, req);
  }
};
export {payPalCaptureInterface};


const payPalDoExpressCheckoutInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz payPalDoExpressCheckoutInterface method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/payPalDoExpressCheckoutInterface?orderPaymentPreference=${args.orderPaymentPreference}`, null, req);
  }
};
export {payPalDoExpressCheckoutInterface};


const payPalGetExpressCheckoutInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz payPalGetExpressCheckoutInterface method',
  args:{cart: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/payPalGetExpressCheckoutInterface?cart=${args.cart}`, null, req);
  }
};
export {payPalGetExpressCheckoutInterface};


const payPalProcessInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz payPalProcessInterface method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},payPalPaymentMethod: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/payPalProcessInterface?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}payPalPaymentMethod=${args.payPalPaymentMethod}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {payPalProcessInterface};


const payPalSetExpressCheckoutInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz payPalSetExpressCheckoutInterface method',
  args:{cart: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/payPalSetExpressCheckoutInterface?cart=${args.cart}`, null, req);
  }
};
export {payPalSetExpressCheckoutInterface};


const paymentCreditInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz paymentCreditInterface method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},referenceCode: {type: GraphQLString},creditAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/paymentCreditInterface?billToParty=${args.billToParty}referenceCode=${args.referenceCode}creditAmount=${args.creditAmount}paymentConfig=${args.paymentConfig}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}currency=${args.currency}billingAddress=${args.billingAddress}orderItems=${args.orderItems}`, null, req);
  }
};
export {paymentCreditInterface};


const paymentProcessInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz paymentProcessInterface method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/paymentProcessInterface?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {paymentProcessInterface};


const paymentRefundInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz paymentRefundInterface method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},refundAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/paymentRefundInterface?orderPaymentPreference=${args.orderPaymentPreference}refundAmount=${args.refundAmount}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}currency=${args.currency}`, null, req);
  }
};
export {paymentRefundInterface};


const paymentReleaseInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz paymentReleaseInterface method',
  args:{releaseAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/paymentReleaseInterface?releaseAmount=${args.releaseAmount}orderPaymentPreference=${args.orderPaymentPreference}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}authTrans=${args.authTrans}currency=${args.currency}`, null, req);
  }
};
export {paymentReleaseInterface};


const processAuthResult = {
  type: ResponseType,
  description: 'mutation for ofbiz processAuthResult method',
  args:{processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},authResult: {type: GraphQLBoolean},authRefNum: {type: GraphQLString},scoreCode: {type: GraphQLString},currencyUomId: {type: GraphQLString},authCode: {type: GraphQLString},serviceTypeEnum: {type: GraphQLString},authMessage: {type: GraphQLString},avsCode: {type: GraphQLString},authFlag: {type: GraphQLString},cvCode: {type: GraphQLString},authAltRefNum: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/processAuthResult?processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}authResult=${args.authResult}authRefNum=${args.authRefNum}scoreCode=${args.scoreCode}currencyUomId=${args.currencyUomId}authCode=${args.authCode}serviceTypeEnum=${args.serviceTypeEnum}authMessage=${args.authMessage}avsCode=${args.avsCode}authFlag=${args.authFlag}cvCode=${args.cvCode}internalRespMsgs=${args.internalRespMsgs}authAltRefNum=${args.authAltRefNum}`, null, req);
  }
};
export {processAuthResult};


const processCaptureResult = {
  type: ResponseType,
  description: 'mutation for ofbiz processCaptureResult method',
  args:{captureResult: {type: GraphQLBoolean},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},captureRefNum: {type: GraphQLString},captureAmount: {type: GraphQLFloat},captureFlag: {type: GraphQLString},currencyUomId: {type: GraphQLString},serviceTypeEnum: {type: GraphQLString},captureAltRefNum: {type: GraphQLString},captureMessage: {type: GraphQLString},invoiceId: {type: GraphQLString},payToPartyId: {type: GraphQLString},captureCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/processCaptureResult?captureResult=${args.captureResult}orderPaymentPreference=${args.orderPaymentPreference}captureRefNum=${args.captureRefNum}captureAmount=${args.captureAmount}captureFlag=${args.captureFlag}currencyUomId=${args.currencyUomId}serviceTypeEnum=${args.serviceTypeEnum}captureAltRefNum=${args.captureAltRefNum}captureMessage=${args.captureMessage}invoiceId=${args.invoiceId}payToPartyId=${args.payToPartyId}captureCode=${args.captureCode}internalRespMsgs=${args.internalRespMsgs}`, null, req);
  }
};
export {processCaptureResult};


const processCaptureSplitPayment = {
  type: ResponseType,
  description: 'mutation for ofbiz processCaptureSplitPayment method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},splitAmount: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/processCaptureSplitPayment?orderPaymentPreference=${args.orderPaymentPreference}splitAmount=${args.splitAmount}`, null, req);
  }
};
export {processCaptureSplitPayment};


const processCreditResult = {
  type: ResponseType,
  description: 'mutation for ofbiz processCreditResult method',
  args:{creditResult: {type: GraphQLBoolean},creditRefNum: {type: GraphQLString},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},creditAmount: {type: GraphQLFloat},creditMessage: {type: GraphQLString},currencyUomId: {type: GraphQLString},creditCode: {type: GraphQLString},creditFlag: {type: GraphQLString},creditAltRefNum: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/processCreditResult?creditResult=${args.creditResult}creditRefNum=${args.creditRefNum}orderPaymentPreference=${args.orderPaymentPreference}creditAmount=${args.creditAmount}creditMessage=${args.creditMessage}currencyUomId=${args.currencyUomId}creditCode=${args.creditCode}creditFlag=${args.creditFlag}creditAltRefNum=${args.creditAltRefNum}internalRespMsgs=${args.internalRespMsgs}`, null, req);
  }
};
export {processCreditResult};


const processPaymentServiceError = {
  type: ResponseType,
  description: 'mutation for ofbiz processPaymentServiceError method',
  args:{paymentServiceTypeEnumId: {type: GraphQLString},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},transCodeEnumId: {type: GraphQLString},serviceResultMap: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/processPaymentServiceError?paymentServiceTypeEnumId=${args.paymentServiceTypeEnumId}orderPaymentPreference=${args.orderPaymentPreference}transCodeEnumId=${args.transCodeEnumId}serviceResultMap=${args.serviceResultMap}`, null, req);
  }
};
export {processPaymentServiceError};


const processRefundResult = {
  type: ResponseType,
  description: 'mutation for ofbiz processRefundResult method',
  args:{refundResult: {type: GraphQLBoolean},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},refundRefNum: {type: GraphQLString},refundAmount: {type: GraphQLFloat},refundMessage: {type: GraphQLString},currencyUomId: {type: GraphQLString},serviceTypeEnum: {type: GraphQLString},refundFlag: {type: GraphQLString},invoiceId: {type: GraphQLString},refundAltRefNum: {type: GraphQLString},payFromPartyId: {type: GraphQLString},payToPartyId: {type: GraphQLString},refundCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/processRefundResult?refundResult=${args.refundResult}orderPaymentPreference=${args.orderPaymentPreference}refundRefNum=${args.refundRefNum}refundAmount=${args.refundAmount}refundMessage=${args.refundMessage}currencyUomId=${args.currencyUomId}serviceTypeEnum=${args.serviceTypeEnum}refundFlag=${args.refundFlag}invoiceId=${args.invoiceId}refundAltRefNum=${args.refundAltRefNum}payFromPartyId=${args.payFromPartyId}payToPartyId=${args.payToPartyId}refundCode=${args.refundCode}internalRespMsgs=${args.internalRespMsgs}`, null, req);
  }
};
export {processRefundResult};


const processReleaseResult = {
  type: ResponseType,
  description: 'mutation for ofbiz processReleaseResult method',
  args:{releaseAmount: {type: GraphQLFloat},releaseRefNum: {type: GraphQLString},releaseResult: {type: GraphQLBoolean},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},releaseFlag: {type: GraphQLString},currencyUomId: {type: GraphQLString},releaseAltRefNum: {type: GraphQLString},releaseCode: {type: GraphQLString},releaseMessage: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/processReleaseResult?releaseAmount=${args.releaseAmount}releaseRefNum=${args.releaseRefNum}releaseResult=${args.releaseResult}orderPaymentPreference=${args.orderPaymentPreference}releaseFlag=${args.releaseFlag}currencyUomId=${args.currencyUomId}releaseAltRefNum=${args.releaseAltRefNum}releaseCode=${args.releaseCode}releaseMessage=${args.releaseMessage}internalRespMsgs=${args.internalRespMsgs}`, null, req);
  }
};
export {processReleaseResult};


const refundOrderPaymentPreference = {
  type: ResponseType,
  description: 'mutation for ofbiz refundOrderPaymentPreference method',
  args:{amount: {type: GraphQLFloat},orderPaymentPreferenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/refundOrderPaymentPreference?amount=${args.amount}orderPaymentPreferenceId=${args.orderPaymentPreferenceId}`, null, req);
  }
};
export {refundOrderPaymentPreference};


const refundPayment = {
  type: ResponseType,
  description: 'mutation for ofbiz refundPayment method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},refundAmount: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/refundPayment?orderPaymentPreference=${args.orderPaymentPreference}refundAmount=${args.refundAmount}`, null, req);
  }
};
export {refundPayment};


const releaseOrderPaymentPreference = {
  type: ResponseType,
  description: 'mutation for ofbiz releaseOrderPaymentPreference method',
  args:{orderPaymentPreferenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/releaseOrderPaymentPreference?orderPaymentPreferenceId=${args.orderPaymentPreferenceId}`, null, req);
  }
};
export {releaseOrderPaymentPreference};


const releaseOrderPayments = {
  type: ResponseType,
  description: 'mutation for ofbiz releaseOrderPayments method',
  args:{orderId: {type: GraphQLString},orderPaymentPreferenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/releaseOrderPayments?orderId=${args.orderId}orderPaymentPreferenceId=${args.orderPaymentPreferenceId}`, null, req);
  }
};
export {releaseOrderPayments};


const retryFailedAuthNsfs = {
  type: ResponseType,
  description: 'mutation for ofbiz retryFailedAuthNsfs method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/retryFailedAuthNsfs?`, null, req);
  }
};
export {retryFailedAuthNsfs};


const retryFailedAuths = {
  type: ResponseType,
  description: 'mutation for ofbiz retryFailedAuths method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/retryFailedAuths?`, null, req);
  }
};
export {retryFailedAuths};


const retryFailedOrderAuth = {
  type: ResponseType,
  description: 'mutation for ofbiz retryFailedOrderAuth method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/retryFailedOrderAuth?orderId=${args.orderId}`, null, req);
  }
};
export {retryFailedOrderAuth};


const savePaymentGatewayResponse = {
  type: ResponseType,
  description: 'mutation for ofbiz savePaymentGatewayResponse method',
  args:{paymentGatewayResponse: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/savePaymentGatewayResponse?paymentGatewayResponse=${args.paymentGatewayResponse}`, null, req);
  }
};
export {savePaymentGatewayResponse};


const savePaymentGatewayResponseAndMessages = {
  type: ResponseType,
  description: 'mutation for ofbiz savePaymentGatewayResponseAndMessages method',
  args:{paymentGatewayResponse: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/savePaymentGatewayResponseAndMessages?paymentGatewayResponse=${args.paymentGatewayResponse}messages=${args.messages}`, null, req);
  }
};
export {savePaymentGatewayResponseAndMessages};


const setPaymentMethodAddress = {
  type: ResponseType,
  description: 'mutation for ofbiz setPaymentMethodAddress method',
  args:{paymentMethodId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/setPaymentMethodAddress?paymentMethodId=${args.paymentMethodId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {setPaymentMethodAddress};


const testCCCapture = {
  type: ResponseType,
  description: 'mutation for ofbiz testCCCapture method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},captureAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/testCCCapture?orderPaymentPreference=${args.orderPaymentPreference}captureAmount=${args.captureAmount}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}authTrans=${args.authTrans}currency=${args.currency}`, null, req);
  }
};
export {testCCCapture};


const testCCCaptureWithReAuth = {
  type: ResponseType,
  description: 'mutation for ofbiz testCCCaptureWithReAuth method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},captureAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/testCCCaptureWithReAuth?orderPaymentPreference=${args.orderPaymentPreference}captureAmount=${args.captureAmount}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}authTrans=${args.authTrans}currency=${args.currency}`, null, req);
  }
};
export {testCCCaptureWithReAuth};


const testCCProcessor = {
  type: ResponseType,
  description: 'mutation for ofbiz testCCProcessor method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},creditCard: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/testCCProcessor?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}creditCard=${args.creditCard}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}cardSecurityCode=${args.cardSecurityCode}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {testCCProcessor};


const testCCProcessorCaptureAlwaysDecline = {
  type: ResponseType,
  description: 'mutation for ofbiz testCCProcessorCaptureAlwaysDecline method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},captureAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/testCCProcessorCaptureAlwaysDecline?orderPaymentPreference=${args.orderPaymentPreference}captureAmount=${args.captureAmount}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}authTrans=${args.authTrans}currency=${args.currency}`, null, req);
  }
};
export {testCCProcessorCaptureAlwaysDecline};


const testCCProcessorWithCapture = {
  type: ResponseType,
  description: 'mutation for ofbiz testCCProcessorWithCapture method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},creditCard: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/testCCProcessorWithCapture?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}creditCard=${args.creditCard}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}cardSecurityCode=${args.cardSecurityCode}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {testCCProcessorWithCapture};


const testCCRefund = {
  type: ResponseType,
  description: 'mutation for ofbiz testCCRefund method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},refundAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/testCCRefund?orderPaymentPreference=${args.orderPaymentPreference}refundAmount=${args.refundAmount}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}currency=${args.currency}`, null, req);
  }
};
export {testCCRefund};


const testCCRefundFailure = {
  type: ResponseType,
  description: 'mutation for ofbiz testCCRefundFailure method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},refundAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/testCCRefundFailure?orderPaymentPreference=${args.orderPaymentPreference}refundAmount=${args.refundAmount}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}currency=${args.currency}`, null, req);
  }
};
export {testCCRefundFailure};


const testCCRelease = {
  type: ResponseType,
  description: 'mutation for ofbiz testCCRelease method',
  args:{releaseAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/testCCRelease?releaseAmount=${args.releaseAmount}orderPaymentPreference=${args.orderPaymentPreference}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}authTrans=${args.authTrans}currency=${args.currency}`, null, req);
  }
};
export {testCCRelease};


const testEFTProcessor = {
  type: ResponseType,
  description: 'mutation for ofbiz testEFTProcessor method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},eftAccount: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/testEFTProcessor?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}eftAccount=${args.eftAccount}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {testEFTProcessor};


const testEFTRelease = {
  type: ResponseType,
  description: 'mutation for ofbiz testEFTRelease method',
  args:{releaseAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/testEFTRelease?releaseAmount=${args.releaseAmount}orderPaymentPreference=${args.orderPaymentPreference}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}authTrans=${args.authTrans}currency=${args.currency}`, null, req);
  }
};
export {testEFTRelease};


const testGCRelease = {
  type: ResponseType,
  description: 'mutation for ofbiz testGCRelease method',
  args:{releaseAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/testGCRelease?releaseAmount=${args.releaseAmount}orderPaymentPreference=${args.orderPaymentPreference}paymentConfig=${args.paymentConfig}paymentGatewayConfigId=${args.paymentGatewayConfigId}authTrans=${args.authTrans}currency=${args.currency}`, null, req);
  }
};
export {testGCRelease};


const testRandomAuthorize = {
  type: ResponseType,
  description: 'mutation for ofbiz testRandomAuthorize method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},creditCard: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},cardSecurityCode: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/testRandomAuthorize?billToParty=${args.billToParty}orderId=${args.orderId}processAmount=${args.processAmount}orderPaymentPreference=${args.orderPaymentPreference}creditCard=${args.creditCard}orderItems=${args.orderItems}paymentConfig=${args.paymentConfig}cardSecurityCode=${args.cardSecurityCode}billToEmail=${args.billToEmail}paymentGatewayConfigId=${args.paymentGatewayConfigId}shippingAddress=${args.shippingAddress}currency=${args.currency}billingAddress=${args.billingAddress}customerIpAddress=${args.customerIpAddress}`, null, req);
  }
};
export {testRandomAuthorize};


const updateCheckAccount = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCheckAccount method',
  args:{nameOnAccount: {type: GraphQLString},paymentMethodId: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},companyNameOnAccount: {type: GraphQLString},routingNumber: {type: GraphQLString},accountType: {type: GraphQLString},description: {type: GraphQLString},bankName: {type: GraphQLString},partyId: {type: GraphQLString},accountNumber: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/updateCheckAccount?nameOnAccount=${args.nameOnAccount}paymentMethodId=${args.paymentMethodId}paymentMethodTypeId=${args.paymentMethodTypeId}fromDate=${args.fromDate}companyNameOnAccount=${args.companyNameOnAccount}routingNumber=${args.routingNumber}accountType=${args.accountType}description=${args.description}bankName=${args.bankName}partyId=${args.partyId}accountNumber=${args.accountNumber}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {updateCheckAccount};


const updateCreditCard = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCreditCard method',
  args:{paymentMethodId: {type: GraphQLString},firstNameOnCard: {type: GraphQLString},issueNumber: {type: GraphQLString},cardType: {type: GraphQLString},description: {type: GraphQLString},lastFailedAuthDate: {type: GraphQLString},consecutiveFailedNsf: {type: GraphQLInt},contactMechId: {type: GraphQLString},companyNameOnCard: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},expMonth: {type: GraphQLString},titleOnCard: {type: GraphQLString},lastNameOnCard: {type: GraphQLString},expYear: {type: GraphQLString},middleNameOnCard: {type: GraphQLString},validFromDate: {type: GraphQLString},expireDate: {type: GraphQLString},productStoreId: {type: GraphQLString},consecutiveFailedAuths: {type: GraphQLInt},partyId: {type: GraphQLString},lastFailedNsfDate: {type: GraphQLString},cardNumber: {type: GraphQLString},suffixOnCard: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/updateCreditCard?paymentMethodId=${args.paymentMethodId}firstNameOnCard=${args.firstNameOnCard}issueNumber=${args.issueNumber}cardType=${args.cardType}description=${args.description}lastFailedAuthDate=${args.lastFailedAuthDate}consecutiveFailedNsf=${args.consecutiveFailedNsf}contactMechId=${args.contactMechId}companyNameOnCard=${args.companyNameOnCard}thruDate=${args.thruDate}fromDate=${args.fromDate}expMonth=${args.expMonth}titleOnCard=${args.titleOnCard}lastNameOnCard=${args.lastNameOnCard}expYear=${args.expYear}middleNameOnCard=${args.middleNameOnCard}validFromDate=${args.validFromDate}expireDate=${args.expireDate}productStoreId=${args.productStoreId}consecutiveFailedAuths=${args.consecutiveFailedAuths}partyId=${args.partyId}lastFailedNsfDate=${args.lastFailedNsfDate}cardNumber=${args.cardNumber}suffixOnCard=${args.suffixOnCard}`, null, req);
  }
};
export {updateCreditCard};


const updateCreditCardAndAddress = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCreditCardAndAddress method',
  args:{paymentMethodId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/updateCreditCardAndAddress?paymentMethodId=${args.paymentMethodId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {updateCreditCardAndAddress};


const updateCreditCardTypeGlAccount = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCreditCardTypeGlAccount method',
  args:{cardType: {type: GraphQLString},glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/updateCreditCardTypeGlAccount?cardType=${args.cardType}glAccountId=${args.glAccountId}organizationPartyId=${args.organizationPartyId}`, null, req);
  }
};
export {updateCreditCardTypeGlAccount};


const updateEftAccount = {
  type: ResponseType,
  description: 'mutation for ofbiz updateEftAccount method',
  args:{routingNumber: {type: GraphQLString},nameOnAccount: {type: GraphQLString},paymentMethodId: {type: GraphQLString},accountType: {type: GraphQLString},bankName: {type: GraphQLString},accountNumber: {type: GraphQLString},fromDate: {type: GraphQLString},companyNameOnAccount: {type: GraphQLString},description: {type: GraphQLString},partyId: {type: GraphQLString},contactMechId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/updateEftAccount?routingNumber=${args.routingNumber}nameOnAccount=${args.nameOnAccount}paymentMethodId=${args.paymentMethodId}accountType=${args.accountType}bankName=${args.bankName}accountNumber=${args.accountNumber}fromDate=${args.fromDate}companyNameOnAccount=${args.companyNameOnAccount}description=${args.description}partyId=${args.partyId}contactMechId=${args.contactMechId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateEftAccount};


const updateEftAccountAndAddress = {
  type: ResponseType,
  description: 'mutation for ofbiz updateEftAccountAndAddress method',
  args:{paymentMethodId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/updateEftAccountAndAddress?paymentMethodId=${args.paymentMethodId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {updateEftAccountAndAddress};


const updateGiftCard = {
  type: ResponseType,
  description: 'mutation for ofbiz updateGiftCard method',
  args:{paymentMethodId: {type: GraphQLString},cardNumber: {type: GraphQLString},fromDate: {type: GraphQLString},expMonth: {type: GraphQLString},expYear: {type: GraphQLString},description: {type: GraphQLString},pinNumber: {type: GraphQLString},expireDate: {type: GraphQLString},partyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/updateGiftCard?paymentMethodId=${args.paymentMethodId}cardNumber=${args.cardNumber}fromDate=${args.fromDate}expMonth=${args.expMonth}expYear=${args.expYear}description=${args.description}pinNumber=${args.pinNumber}expireDate=${args.expireDate}partyId=${args.partyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateGiftCard};


const updatePayPalPaymentMethod = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePayPalPaymentMethod method',
  args:{paymentMethodId: {type: GraphQLString},expressCheckoutToken: {type: GraphQLString},avsAddr: {type: GraphQLString},payerId: {type: GraphQLString},avsZip: {type: GraphQLString},correlationId: {type: GraphQLString},payerStatus: {type: GraphQLString},contactMechId: {type: GraphQLString},transactionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/updatePayPalPaymentMethod?paymentMethodId=${args.paymentMethodId}expressCheckoutToken=${args.expressCheckoutToken}avsAddr=${args.avsAddr}payerId=${args.payerId}avsZip=${args.avsZip}correlationId=${args.correlationId}payerStatus=${args.payerStatus}contactMechId=${args.contactMechId}transactionId=${args.transactionId}`, null, req);
  }
};
export {updatePayPalPaymentMethod};


const updatePaymentGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePaymentGroup method',
  args:{paymentGroupId: {type: GraphQLString},paymentGroupName: {type: GraphQLString},paymentGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/updatePaymentGroup?paymentGroupId=${args.paymentGroupId}paymentGroupName=${args.paymentGroupName}paymentGroupTypeId=${args.paymentGroupTypeId}`, null, req);
  }
};
export {updatePaymentGroup};


const updatePaymentGroupMember = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePaymentGroupMember method',
  args:{paymentGroupId: {type: GraphQLString},fromDate: {type: GraphQLString},paymentId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/updatePaymentGroupMember?paymentGroupId=${args.paymentGroupId}fromDate=${args.fromDate}paymentId=${args.paymentId}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {updatePaymentGroupMember};


const updatePaymentMethodAddress = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePaymentMethodAddress method',
  args:{oldContactMechId: {type: GraphQLString},contactMechId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/updatePaymentMethodAddress?oldContactMechId=${args.oldContactMechId}contactMechId=${args.contactMechId}partyId=${args.partyId}`, null, req);
  }
};
export {updatePaymentMethodAddress};


const updatePaymentMethodType = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePaymentMethodType method',
  args:{paymentMethodTypeId: {type: GraphQLString},defaultGlAccountId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/updatePaymentMethodType?paymentMethodTypeId=${args.paymentMethodTypeId}defaultGlAccountId=${args.defaultGlAccountId}description=${args.description}`, null, req);
  }
};
export {updatePaymentMethodType};


const verifyCreditCard = {
  type: ResponseType,
  description: 'mutation for ofbiz verifyCreditCard method',
  args:{mode: {type: GraphQLString},paymentMethodId: {type: GraphQLString},oldPaymentMethodId: {type: GraphQLString},productStoreId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentmethod/verifyCreditCard?mode=${args.mode}paymentMethodId=${args.paymentMethodId}oldPaymentMethodId=${args.oldPaymentMethodId}productStoreId=${args.productStoreId}`, null, req);
  }
};
export {verifyCreditCard};
