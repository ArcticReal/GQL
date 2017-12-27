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


const addFundsToGiftCertificate = {
  type: ResponseType,
  description: 'mutation for ofbiz addFundsToGiftCertificate method',
  args:{amount: {type: GraphQLFloat},productStoreId: {type: GraphQLString},cardNumber: {type: GraphQLString},pinNumber: {type: GraphQLString},currency: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/addFundsToGiftCertificate?amount=${args.amount}&productStoreId=${args.productStoreId}&cardNumber=${args.cardNumber}&pinNumber=${args.pinNumber}&currency=${args.currency}&partyId=${args.partyId}&`, null, req);
  }
};
export {addFundsToGiftCertificate};


const assignGlRecToFinAccTrans = {
  type: ResponseType,
  description: 'mutation for ofbiz assignGlRecToFinAccTrans method',
  args:{finAccountTransId: {type: GraphQLString},glReconciliationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/assignGlRecToFinAccTrans?finAccountTransId=${args.finAccountTransId}&glReconciliationId=${args.glReconciliationId}&`, null, req);
  }
};
export {assignGlRecToFinAccTrans};


const autoFinAccountReconciliation = {
  type: ResponseType,
  description: 'mutation for ofbiz autoFinAccountReconciliation method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/autoFinAccountReconciliation?`, null, req);
  }
};
export {autoFinAccountReconciliation};


const cancelBankReconciliation = {
  type: ResponseType,
  description: 'mutation for ofbiz cancelBankReconciliation method',
  args:{glReconciliationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/cancelBankReconciliation?glReconciliationId=${args.glReconciliationId}&`, null, req);
  }
};
export {cancelBankReconciliation};


const checkFinAccountBalance = {
  type: ResponseType,
  description: 'mutation for ofbiz checkFinAccountBalance method',
  args:{finAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/checkFinAccountBalance?finAccountId=${args.finAccountId}&`, null, req);
  }
};
export {checkFinAccountBalance};


const checkFinAccountStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz checkFinAccountStatus method',
  args:{finAccountAuthId: {type: GraphQLString},finAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/checkFinAccountStatus?finAccountAuthId=${args.finAccountAuthId}&finAccountId=${args.finAccountId}&`, null, req);
  }
};
export {checkFinAccountStatus};


const checkGiftCertificateBalance = {
  type: ResponseType,
  description: 'mutation for ofbiz checkGiftCertificateBalance method',
  args:{pinNumber: {type: GraphQLString},cardNumber: {type: GraphQLString},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/checkGiftCertificateBalance?pinNumber=${args.pinNumber}&cardNumber=${args.cardNumber}&currency=${args.currency}&`, null, req);
  }
};
export {checkGiftCertificateBalance};


const createFinAccount = {
  type: ResponseType,
  description: 'mutation for ofbiz createFinAccount method',
  args:{finAccountTypeId: {type: GraphQLString},thruDate: {type: GraphQLString},isRefundable: {type: GraphQLString},fromDate: {type: GraphQLString},ownerPartyId: {type: GraphQLString},finAccountId: {type: GraphQLString},postToGlAccountId: {type: GraphQLString},currencyUomId: {type: GraphQLString},statusId: {type: GraphQLString},finAccountName: {type: GraphQLString},finAccountPin: {type: GraphQLString},replenishLevel: {type: GraphQLFloat},replenishPaymentId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},finAccountCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/createFinAccount?finAccountTypeId=${args.finAccountTypeId}&thruDate=${args.thruDate}&isRefundable=${args.isRefundable}&fromDate=${args.fromDate}&ownerPartyId=${args.ownerPartyId}&finAccountId=${args.finAccountId}&postToGlAccountId=${args.postToGlAccountId}&currencyUomId=${args.currencyUomId}&statusId=${args.statusId}&finAccountName=${args.finAccountName}&finAccountPin=${args.finAccountPin}&replenishLevel=${args.replenishLevel}&replenishPaymentId=${args.replenishPaymentId}&organizationPartyId=${args.organizationPartyId}&finAccountCode=${args.finAccountCode}&`, null, req);
  }
};
export {createFinAccount};


const createFinAccountAndCredit = {
  type: ResponseType,
  description: 'mutation for ofbiz createFinAccountAndCredit method',
  args:{amount: {type: GraphQLFloat},partyId: {type: GraphQLString},finAccountTypeId: {type: GraphQLString},finAccountId: {type: GraphQLString},comments: {type: GraphQLString},currencyUomId: {type: GraphQLString},finAccountName: {type: GraphQLString},replenishLevel: {type: GraphQLFloat},replenishPaymentId: {type: GraphQLString},reasonEnumId: {type: GraphQLString},productStoreId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/createFinAccountAndCredit?amount=${args.amount}&partyId=${args.partyId}&finAccountTypeId=${args.finAccountTypeId}&finAccountId=${args.finAccountId}&comments=${args.comments}&currencyUomId=${args.currencyUomId}&finAccountName=${args.finAccountName}&replenishLevel=${args.replenishLevel}&replenishPaymentId=${args.replenishPaymentId}&reasonEnumId=${args.reasonEnumId}&productStoreId=${args.productStoreId}&`, null, req);
  }
};
export {createFinAccountAndCredit};


const createFinAccountAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createFinAccountAttribute method',
  args:{finAccountId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/createFinAccountAttribute?finAccountId=${args.finAccountId}&attrName=${args.attrName}&attrDescription=${args.attrDescription}&attrValue=${args.attrValue}&`, null, req);
  }
};
export {createFinAccountAttribute};


const createFinAccountAuth = {
  type: ResponseType,
  description: 'mutation for ofbiz createFinAccountAuth method',
  args:{fromDate: {type: GraphQLString},finAccountId: {type: GraphQLString},amount: {type: GraphQLFloat},currencyUomId: {type: GraphQLString},authorizationDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/createFinAccountAuth?fromDate=${args.fromDate}&finAccountId=${args.finAccountId}&amount=${args.amount}&currencyUomId=${args.currencyUomId}&authorizationDate=${args.authorizationDate}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createFinAccountAuth};


const createFinAccountForStore = {
  type: ResponseType,
  description: 'mutation for ofbiz createFinAccountForStore method',
  args:{productStoreId: {type: GraphQLString},finAccountTypeId: {type: GraphQLString},thruDate: {type: GraphQLString},isRefundable: {type: GraphQLString},availableBalance: {type: GraphQLFloat},fromDate: {type: GraphQLString},ownerPartyId: {type: GraphQLString},postToGlAccountId: {type: GraphQLString},currencyUomId: {type: GraphQLString},statusId: {type: GraphQLString},finAccountName: {type: GraphQLString},finAccountPin: {type: GraphQLString},actualBalance: {type: GraphQLFloat},replenishLevel: {type: GraphQLFloat},replenishPaymentId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},finAccountCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/createFinAccountForStore?productStoreId=${args.productStoreId}&finAccountTypeId=${args.finAccountTypeId}&thruDate=${args.thruDate}&isRefundable=${args.isRefundable}&availableBalance=${args.availableBalance}&fromDate=${args.fromDate}&ownerPartyId=${args.ownerPartyId}&postToGlAccountId=${args.postToGlAccountId}&currencyUomId=${args.currencyUomId}&statusId=${args.statusId}&finAccountName=${args.finAccountName}&finAccountPin=${args.finAccountPin}&actualBalance=${args.actualBalance}&replenishLevel=${args.replenishLevel}&replenishPaymentId=${args.replenishPaymentId}&organizationPartyId=${args.organizationPartyId}&finAccountCode=${args.finAccountCode}&`, null, req);
  }
};
export {createFinAccountForStore};


const createFinAccountRole = {
  type: ResponseType,
  description: 'mutation for ofbiz createFinAccountRole method',
  args:{finAccountId: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/createFinAccountRole?finAccountId=${args.finAccountId}&roleTypeId=${args.roleTypeId}&partyId=${args.partyId}&fromDate=${args.fromDate}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createFinAccountRole};


const createFinAccountStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz createFinAccountStatus method',
  args:{finAccountId: {type: GraphQLString},statusId: {type: GraphQLString},statusDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/createFinAccountStatus?finAccountId=${args.finAccountId}&statusId=${args.statusId}&statusDate=${args.statusDate}&`, null, req);
  }
};
export {createFinAccountStatus};


const createFinAccountTrans = {
  type: ResponseType,
  description: 'mutation for ofbiz createFinAccountTrans method',
  args:{orderItemSeqId: {type: GraphQLString},amount: {type: GraphQLFloat},comments: {type: GraphQLString},entryDate: {type: GraphQLString},orderId: {type: GraphQLString},glReconciliationId: {type: GraphQLString},glAccountId: {type: GraphQLString},transactionDate: {type: GraphQLString},finAccountId: {type: GraphQLString},finAccountTransTypeId: {type: GraphQLString},statusId: {type: GraphQLString},paymentId: {type: GraphQLString},reasonEnumId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/createFinAccountTrans?orderItemSeqId=${args.orderItemSeqId}&amount=${args.amount}&comments=${args.comments}&entryDate=${args.entryDate}&orderId=${args.orderId}&glReconciliationId=${args.glReconciliationId}&glAccountId=${args.glAccountId}&transactionDate=${args.transactionDate}&finAccountId=${args.finAccountId}&finAccountTransTypeId=${args.finAccountTransTypeId}&statusId=${args.statusId}&paymentId=${args.paymentId}&reasonEnumId=${args.reasonEnumId}&partyId=${args.partyId}&`, null, req);
  }
};
export {createFinAccountTrans};


const createFinAccountTransAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createFinAccountTransAttribute method',
  args:{finAccountTransId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/createFinAccountTransAttribute?finAccountTransId=${args.finAccountTransId}&attrName=${args.attrName}&attrDescription=${args.attrDescription}&attrValue=${args.attrValue}&`, null, req);
  }
};
export {createFinAccountTransAttribute};


const createFinAccountTransType = {
  type: ResponseType,
  description: 'mutation for ofbiz createFinAccountTransType method',
  args:{parentTypeId: {type: GraphQLString},finAccountTransTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/createFinAccountTransType?parentTypeId=${args.parentTypeId}&finAccountTransTypeId=${args.finAccountTransTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {createFinAccountTransType};


const createFinAccountTransTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz createFinAccountTransTypeAttr method',
  args:{finAccountTransTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/createFinAccountTransTypeAttr?finAccountTransTypeId=${args.finAccountTransTypeId}&attrName=${args.attrName}&description=${args.description}&`, null, req);
  }
};
export {createFinAccountTransTypeAttr};


const createFinAccountType = {
  type: ResponseType,
  description: 'mutation for ofbiz createFinAccountType method',
  args:{parentTypeId: {type: GraphQLString},replenishEnumId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},finAccountTypeId: {type: GraphQLString},isRefundable: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/createFinAccountType?parentTypeId=${args.parentTypeId}&replenishEnumId=${args.replenishEnumId}&hasTable=${args.hasTable}&description=${args.description}&finAccountTypeId=${args.finAccountTypeId}&isRefundable=${args.isRefundable}&`, null, req);
  }
};
export {createFinAccountType};


const createFinAccountTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz createFinAccountTypeAttr method',
  args:{finAccountTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString},attrValue: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/createFinAccountTypeAttr?finAccountTypeId=${args.finAccountTypeId}&attrName=${args.attrName}&description=${args.description}&attrValue=${args.attrValue}&`, null, req);
  }
};
export {createFinAccountTypeAttr};


const createGcFulFillmentRecord = {
  type: ResponseType,
  description: 'mutation for ofbiz createGcFulFillmentRecord method',
  args:{typeEnumId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},referenceNum: {type: GraphQLString},amount: {type: GraphQLFloat},authCode: {type: GraphQLString},merchantId: {type: GraphQLString},orderId: {type: GraphQLString},pinNumber: {type: GraphQLString},partyId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},cardNumber: {type: GraphQLString},responseCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/createGcFulFillmentRecord?typeEnumId=${args.typeEnumId}&orderItemSeqId=${args.orderItemSeqId}&referenceNum=${args.referenceNum}&amount=${args.amount}&authCode=${args.authCode}&merchantId=${args.merchantId}&orderId=${args.orderId}&pinNumber=${args.pinNumber}&partyId=${args.partyId}&surveyResponseId=${args.surveyResponseId}&cardNumber=${args.cardNumber}&responseCode=${args.responseCode}&`, null, req);
  }
};
export {createGcFulFillmentRecord};


const createGiftCertificate = {
  type: ResponseType,
  description: 'mutation for ofbiz createGiftCertificate method',
  args:{initialAmount: {type: GraphQLFloat},productStoreId: {type: GraphQLString},currency: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/createGiftCertificate?initialAmount=${args.initialAmount}&productStoreId=${args.productStoreId}&currency=${args.currency}&partyId=${args.partyId}&`, null, req);
  }
};
export {createGiftCertificate};


const createPartyFinAccountFromPurchase = {
  type: ResponseType,
  description: 'mutation for ofbiz createPartyFinAccountFromPurchase method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},orderItem: {type: new GraphQLList(KeyValueInputType)},contentId: {type: GraphQLString},productContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/createPartyFinAccountFromPurchase?fromDate=${args.fromDate}&productId=${args.productId}&orderItem=${args.orderItem}&contentId=${args.contentId}&productContentTypeId=${args.productContentTypeId}&`, null, req);
  }
};
export {createPartyFinAccountFromPurchase};


const createPaymentAndFinAccountTrans = {
  type: ResponseType,
  description: 'mutation for ofbiz createPaymentAndFinAccountTrans method',
  args:{finAccountTransTypeId: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},finAccountTransId: {type: GraphQLString},partyIdFrom: {type: GraphQLString},amount: {type: GraphQLFloat},paymentPreferenceId: {type: GraphQLString},comments: {type: GraphQLString},actualCurrencyAmount: {type: GraphQLFloat},overrideGlAccountId: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString},paymentGroupTypeId: {type: GraphQLString},actualCurrencyUomId: {type: GraphQLString},isDepositWithDrawPayment: {type: GraphQLString},paymentTypeId: {type: GraphQLString},currencyUomId: {type: GraphQLString},statusId: {type: GraphQLString},paymentMethodId: {type: GraphQLString},paymentGatewayResponseId: {type: GraphQLString},paymentId: {type: GraphQLString},paymentRefNum: {type: GraphQLString},partyIdTo: {type: GraphQLString},effectiveDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/createPaymentAndFinAccountTrans?finAccountTransTypeId=${args.finAccountTransTypeId}&roleTypeIdTo=${args.roleTypeIdTo}&finAccountTransId=${args.finAccountTransId}&partyIdFrom=${args.partyIdFrom}&amount=${args.amount}&paymentPreferenceId=${args.paymentPreferenceId}&comments=${args.comments}&actualCurrencyAmount=${args.actualCurrencyAmount}&overrideGlAccountId=${args.overrideGlAccountId}&paymentMethodTypeId=${args.paymentMethodTypeId}&paymentGroupTypeId=${args.paymentGroupTypeId}&actualCurrencyUomId=${args.actualCurrencyUomId}&isDepositWithDrawPayment=${args.isDepositWithDrawPayment}&paymentTypeId=${args.paymentTypeId}&currencyUomId=${args.currencyUomId}&statusId=${args.statusId}&paymentMethodId=${args.paymentMethodId}&paymentGatewayResponseId=${args.paymentGatewayResponseId}&paymentId=${args.paymentId}&paymentRefNum=${args.paymentRefNum}&partyIdTo=${args.partyIdTo}&effectiveDate=${args.effectiveDate}&`, null, req);
  }
};
export {createPaymentAndFinAccountTrans};


const createServiceCredit = {
  type: ResponseType,
  description: 'mutation for ofbiz createServiceCredit method',
  args:{amount: {type: GraphQLFloat},partyId: {type: GraphQLString},finAccountTypeId: {type: GraphQLString},finAccountId: {type: GraphQLString},comments: {type: GraphQLString},currencyUomId: {type: GraphQLString},finAccountName: {type: GraphQLString},reasonEnumId: {type: GraphQLString},productStoreId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/createServiceCredit?amount=${args.amount}&partyId=${args.partyId}&finAccountTypeId=${args.finAccountTypeId}&finAccountId=${args.finAccountId}&comments=${args.comments}&currencyUomId=${args.currencyUomId}&finAccountName=${args.finAccountName}&reasonEnumId=${args.reasonEnumId}&productStoreId=${args.productStoreId}&`, null, req);
  }
};
export {createServiceCredit};


const deleteFinAccount = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteFinAccount method',
  args:{finAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/deleteFinAccount?finAccountId=${args.finAccountId}&`, null, req);
  }
};
export {deleteFinAccount};


const deleteFinAccountAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteFinAccountAttribute method',
  args:{finAccountId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/deleteFinAccountAttribute?finAccountId=${args.finAccountId}&attrName=${args.attrName}&`, null, req);
  }
};
export {deleteFinAccountAttribute};


const deleteFinAccountRole = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteFinAccountRole method',
  args:{fromDate: {type: GraphQLString},finAccountId: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/deleteFinAccountRole?fromDate=${args.fromDate}&finAccountId=${args.finAccountId}&roleTypeId=${args.roleTypeId}&partyId=${args.partyId}&`, null, req);
  }
};
export {deleteFinAccountRole};


const deleteFinAccountTransAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteFinAccountTransAttribute method',
  args:{finAccountTransId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/deleteFinAccountTransAttribute?finAccountTransId=${args.finAccountTransId}&attrName=${args.attrName}&`, null, req);
  }
};
export {deleteFinAccountTransAttribute};


const deleteFinAccountTransType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteFinAccountTransType method',
  args:{finAccountTransTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/deleteFinAccountTransType?finAccountTransTypeId=${args.finAccountTransTypeId}&`, null, req);
  }
};
export {deleteFinAccountTransType};


const deleteFinAccountTransTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteFinAccountTransTypeAttr method',
  args:{finAccountTransTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/deleteFinAccountTransTypeAttr?finAccountTransTypeId=${args.finAccountTransTypeId}&attrName=${args.attrName}&`, null, req);
  }
};
export {deleteFinAccountTransTypeAttr};


const deleteFinAccountType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteFinAccountType method',
  args:{finAccountTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/deleteFinAccountType?finAccountTypeId=${args.finAccountTypeId}&`, null, req);
  }
};
export {deleteFinAccountType};


const deleteFinAccountTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteFinAccountTypeAttr method',
  args:{finAccountTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/deleteFinAccountTypeAttr?finAccountTypeId=${args.finAccountTypeId}&attrName=${args.attrName}&`, null, req);
  }
};
export {deleteFinAccountTypeAttr};


const depositWithdrawPayments = {
  type: ResponseType,
  description: 'mutation for ofbiz depositWithdrawPayments method',
  args:{finAccountId: {type: GraphQLString},groupInOneTransaction: {type: GraphQLString},paymentGroupName: {type: GraphQLString},paymentGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/depositWithdrawPayments?paymentIds=${args.paymentIds}&finAccountId=${args.finAccountId}&groupInOneTransaction=${args.groupInOneTransaction}&paymentGroupName=${args.paymentGroupName}&paymentGroupTypeId=${args.paymentGroupTypeId}&`, null, req);
  }
};
export {depositWithdrawPayments};


const expireFinAccountAuth = {
  type: ResponseType,
  description: 'mutation for ofbiz expireFinAccountAuth method',
  args:{finAccountAuthId: {type: GraphQLString},expireDateTime: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/expireFinAccountAuth?finAccountAuthId=${args.finAccountAuthId}&expireDateTime=${args.expireDateTime}&`, null, req);
  }
};
export {expireFinAccountAuth};


const expirePaymentAssociationsOnFinAccountTransCancel = {
  type: ResponseType,
  description: 'mutation for ofbiz expirePaymentAssociationsOnFinAccountTransCancel method',
  args:{finAccountTransId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/expirePaymentAssociationsOnFinAccountTransCancel?finAccountTransId=${args.finAccountTransId}&`, null, req);
  }
};
export {expirePaymentAssociationsOnFinAccountTransCancel};


const finAccountDeposit = {
  type: ResponseType,
  description: 'mutation for ofbiz finAccountDeposit method',
  args:{finAccountId: {type: GraphQLString},amount: {type: GraphQLFloat},orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},isRefund: {type: GraphQLBoolean},currency: {type: GraphQLString},productStoreId: {type: GraphQLString},reasonEnumId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/finAccountDeposit?finAccountId=${args.finAccountId}&amount=${args.amount}&orderItemSeqId=${args.orderItemSeqId}&orderId=${args.orderId}&isRefund=${args.isRefund}&currency=${args.currency}&productStoreId=${args.productStoreId}&reasonEnumId=${args.reasonEnumId}&partyId=${args.partyId}&`, null, req);
  }
};
export {finAccountDeposit};


const finAccountRefund = {
  type: ResponseType,
  description: 'mutation for ofbiz finAccountRefund method',
  args:{finAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/finAccountRefund?finAccountId=${args.finAccountId}&`, null, req);
  }
};
export {finAccountRefund};


const finAccountReplenish = {
  type: ResponseType,
  description: 'mutation for ofbiz finAccountReplenish method',
  args:{finAccountId: {type: GraphQLString},productStoreId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/finAccountReplenish?finAccountId=${args.finAccountId}&productStoreId=${args.productStoreId}&`, null, req);
  }
};
export {finAccountReplenish};


const finAccountWithdraw = {
  type: ResponseType,
  description: 'mutation for ofbiz finAccountWithdraw method',
  args:{finAccountId: {type: GraphQLString},amount: {type: GraphQLFloat},orderItemSeqId: {type: GraphQLString},requireBalance: {type: GraphQLBoolean},orderId: {type: GraphQLString},currency: {type: GraphQLString},productStoreId: {type: GraphQLString},reasonEnumId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/finAccountWithdraw?finAccountId=${args.finAccountId}&amount=${args.amount}&orderItemSeqId=${args.orderItemSeqId}&requireBalance=${args.requireBalance}&orderId=${args.orderId}&currency=${args.currency}&productStoreId=${args.productStoreId}&reasonEnumId=${args.reasonEnumId}&partyId=${args.partyId}&`, null, req);
  }
};
export {finAccountWithdraw};


const getAssociatedAcctgTransEntriesWithFinAccountTrans = {
  type: ResponseType,
  description: 'mutation for ofbiz getAssociatedAcctgTransEntriesWithFinAccountTrans method',
  args:{finAccountTransId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/getAssociatedAcctgTransEntriesWithFinAccountTrans?finAccountTransId=${args.finAccountTransId}&`, null, req);
  }
};
export {getAssociatedAcctgTransEntriesWithFinAccountTrans};


const getFinAccountTransListAndTotals = {
  type: ResponseType,
  description: 'mutation for ofbiz getFinAccountTransListAndTotals method',
  args:{finAccountId: {type: GraphQLString},fromEntryDate: {type: GraphQLString},finAccountTransTypeId: {type: GraphQLString},thruEntryDate: {type: GraphQLString},statusId: {type: GraphQLString},glReconciliationId: {type: GraphQLString},fromTransactionDate: {type: GraphQLString},openingBalance: {type: GraphQLFloat},thruTransactionDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/getFinAccountTransListAndTotals?finAccountId=${args.finAccountId}&fromEntryDate=${args.fromEntryDate}&finAccountTransTypeId=${args.finAccountTransTypeId}&thruEntryDate=${args.thruEntryDate}&statusId=${args.statusId}&glReconciliationId=${args.glReconciliationId}&fromTransactionDate=${args.fromTransactionDate}&openingBalance=${args.openingBalance}&thruTransactionDate=${args.thruTransactionDate}&`, null, req);
  }
};
export {getFinAccountTransListAndTotals};


const getFinAccountTransRunningTotalAndBalances = {
  type: ResponseType,
  description: 'mutation for ofbiz getFinAccountTransRunningTotalAndBalances method',
  args:{finAccountTransId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},runningTotal: {type: GraphQLFloat},reconciledBalance: {type: GraphQLFloat},numberOfTransactions: {type: GraphQLInt},openingBalance: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/getFinAccountTransRunningTotalAndBalances?finAccountTransId=${args.finAccountTransId}&organizationPartyId=${args.organizationPartyId}&runningTotal=${args.runningTotal}&reconciledBalance=${args.reconciledBalance}&numberOfTransactions=${args.numberOfTransactions}&openingBalance=${args.openingBalance}&`, null, req);
  }
};
export {getFinAccountTransRunningTotalAndBalances};


const getReconciliationClosingBalance = {
  type: ResponseType,
  description: 'mutation for ofbiz getReconciliationClosingBalance method',
  args:{glReconciliationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/getReconciliationClosingBalance?glReconciliationId=${args.glReconciliationId}&`, null, req);
  }
};
export {getReconciliationClosingBalance};


const getTransactionTotalByGlReconcileId = {
  type: ResponseType,
  description: 'mutation for ofbiz getTransactionTotalByGlReconcileId method',
  args:{glReconciliationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/getTransactionTotalByGlReconcileId?glReconciliationId=${args.glReconciliationId}&`, null, req);
  }
};
export {getTransactionTotalByGlReconcileId};


const isGlReconciliationReconciled = {
  type: ResponseType,
  description: 'mutation for ofbiz isGlReconciliationReconciled method',
  args:{glReconciliationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/isGlReconciliationReconciled?glReconciliationId=${args.glReconciliationId}&`, null, req);
  }
};
export {isGlReconciliationReconciled};


const ofbFaAuthorize = {
  type: ResponseType,
  description: 'mutation for ofbiz ofbFaAuthorize method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},finAccountId: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},finAccountPin: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString},finAccountCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/ofbFaAuthorize?billToParty=${args.billToParty}&orderId=${args.orderId}&processAmount=${args.processAmount}&orderPaymentPreference=${args.orderPaymentPreference}&orderItems=${args.orderItems}&paymentConfig=${args.paymentConfig}&finAccountId=${args.finAccountId}&billToEmail=${args.billToEmail}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&finAccountPin=${args.finAccountPin}&shippingAddress=${args.shippingAddress}&currency=${args.currency}&billingAddress=${args.billingAddress}&customerIpAddress=${args.customerIpAddress}&finAccountCode=${args.finAccountCode}&`, null, req);
  }
};
export {ofbFaAuthorize};


const ofbFaCapture = {
  type: ResponseType,
  description: 'mutation for ofbiz ofbFaCapture method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},captureAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/ofbFaCapture?orderPaymentPreference=${args.orderPaymentPreference}&captureAmount=${args.captureAmount}&paymentConfig=${args.paymentConfig}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&authTrans=${args.authTrans}&currency=${args.currency}&`, null, req);
  }
};
export {ofbFaCapture};


const ofbFaRefund = {
  type: ResponseType,
  description: 'mutation for ofbiz ofbFaRefund method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},refundAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},finAccountId: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/ofbFaRefund?orderPaymentPreference=${args.orderPaymentPreference}&refundAmount=${args.refundAmount}&paymentConfig=${args.paymentConfig}&finAccountId=${args.finAccountId}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&currency=${args.currency}&`, null, req);
  }
};
export {ofbFaRefund};


const ofbFaRelease = {
  type: ResponseType,
  description: 'mutation for ofbiz ofbFaRelease method',
  args:{releaseAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/ofbFaRelease?releaseAmount=${args.releaseAmount}&orderPaymentPreference=${args.orderPaymentPreference}&paymentConfig=${args.paymentConfig}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&authTrans=${args.authTrans}&currency=${args.currency}&`, null, req);
  }
};
export {ofbFaRelease};


const ofbGcAuthorize = {
  type: ResponseType,
  description: 'mutation for ofbiz ofbGcAuthorize method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},giftCard: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/ofbGcAuthorize?billToParty=${args.billToParty}&orderId=${args.orderId}&processAmount=${args.processAmount}&orderPaymentPreference=${args.orderPaymentPreference}&giftCard=${args.giftCard}&orderItems=${args.orderItems}&paymentConfig=${args.paymentConfig}&billToEmail=${args.billToEmail}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&shippingAddress=${args.shippingAddress}&currency=${args.currency}&billingAddress=${args.billingAddress}&customerIpAddress=${args.customerIpAddress}&`, null, req);
  }
};
export {ofbGcAuthorize};


const ofbGcProcessor = {
  type: ResponseType,
  description: 'mutation for ofbiz ofbGcProcessor method',
  args:{billToParty: {type: new GraphQLList(KeyValueInputType)},orderId: {type: GraphQLString},processAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},giftCard: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},billToEmail: {type: new GraphQLList(KeyValueInputType)},paymentGatewayConfigId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString},billingAddress: {type: new GraphQLList(KeyValueInputType)},customerIpAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/ofbGcProcessor?billToParty=${args.billToParty}&orderId=${args.orderId}&processAmount=${args.processAmount}&orderPaymentPreference=${args.orderPaymentPreference}&giftCard=${args.giftCard}&orderItems=${args.orderItems}&paymentConfig=${args.paymentConfig}&billToEmail=${args.billToEmail}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&shippingAddress=${args.shippingAddress}&currency=${args.currency}&billingAddress=${args.billingAddress}&customerIpAddress=${args.customerIpAddress}&`, null, req);
  }
};
export {ofbGcProcessor};


const ofbGcPurchase = {
  type: ResponseType,
  description: 'mutation for ofbiz ofbGcPurchase method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},orderItem: {type: new GraphQLList(KeyValueInputType)},contentId: {type: GraphQLString},productContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/ofbGcPurchase?fromDate=${args.fromDate}&productId=${args.productId}&orderItem=${args.orderItem}&contentId=${args.contentId}&productContentTypeId=${args.productContentTypeId}&`, null, req);
  }
};
export {ofbGcPurchase};


const ofbGcRefund = {
  type: ResponseType,
  description: 'mutation for ofbiz ofbGcRefund method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},refundAmount: {type: GraphQLFloat},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/ofbGcRefund?orderPaymentPreference=${args.orderPaymentPreference}&refundAmount=${args.refundAmount}&paymentConfig=${args.paymentConfig}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&currency=${args.currency}&`, null, req);
  }
};
export {ofbGcRefund};


const ofbGcRelease = {
  type: ResponseType,
  description: 'mutation for ofbiz ofbGcRelease method',
  args:{releaseAmount: {type: GraphQLFloat},orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},paymentConfig: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},authTrans: {type: new GraphQLList(KeyValueInputType)},currency: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/ofbGcRelease?releaseAmount=${args.releaseAmount}&orderPaymentPreference=${args.orderPaymentPreference}&paymentConfig=${args.paymentConfig}&paymentGatewayConfigId=${args.paymentGatewayConfigId}&authTrans=${args.authTrans}&currency=${args.currency}&`, null, req);
  }
};
export {ofbGcRelease};


const ofbGcReload = {
  type: ResponseType,
  description: 'mutation for ofbiz ofbGcReload method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},orderItem: {type: new GraphQLList(KeyValueInputType)},contentId: {type: GraphQLString},productContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/ofbGcReload?fromDate=${args.fromDate}&productId=${args.productId}&orderItem=${args.orderItem}&contentId=${args.contentId}&productContentTypeId=${args.productContentTypeId}&`, null, req);
  }
};
export {ofbGcReload};


const postFinAccountTransToGl = {
  type: ResponseType,
  description: 'mutation for ofbiz postFinAccountTransToGl method',
  args:{finAccountTransId: {type: GraphQLString},glAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/postFinAccountTransToGl?finAccountTransId=${args.finAccountTransId}&glAccountId=${args.glAccountId}&`, null, req);
  }
};
export {postFinAccountTransToGl};


const reconcileAdjustmentFinAcctgTrans = {
  type: ResponseType,
  description: 'mutation for ofbiz reconcileAdjustmentFinAcctgTrans method',
  args:{organizationPartyId: {type: GraphQLString},finAccountTrans: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/reconcileAdjustmentFinAcctgTrans?organizationPartyId=${args.organizationPartyId}&finAccountTrans=${args.finAccountTrans}&`, null, req);
  }
};
export {reconcileAdjustmentFinAcctgTrans};


const reconcileDepositFinAcctgTrans = {
  type: ResponseType,
  description: 'mutation for ofbiz reconcileDepositFinAcctgTrans method',
  args:{finAccountTrans: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/reconcileDepositFinAcctgTrans?finAccountTrans=${args.finAccountTrans}&`, null, req);
  }
};
export {reconcileDepositFinAcctgTrans};


const reconcileFinAccountTrans = {
  type: ResponseType,
  description: 'mutation for ofbiz reconcileFinAccountTrans method',
  args:{finAccountTransId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},debitCreditFlag: {type: GraphQLString},glAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/reconcileFinAccountTrans?finAccountTransId=${args.finAccountTransId}&organizationPartyId=${args.organizationPartyId}&debitCreditFlag=${args.debitCreditFlag}&glAccountId=${args.glAccountId}&`, null, req);
  }
};
export {reconcileFinAccountTrans};


const reconcileWithdrawalFinAcctgTrans = {
  type: ResponseType,
  description: 'mutation for ofbiz reconcileWithdrawalFinAcctgTrans method',
  args:{finAccountTrans: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/reconcileWithdrawalFinAcctgTrans?finAccountTrans=${args.finAccountTrans}&`, null, req);
  }
};
export {reconcileWithdrawalFinAcctgTrans};


const redeemGiftCertificate = {
  type: ResponseType,
  description: 'mutation for ofbiz redeemGiftCertificate method',
  args:{amount: {type: GraphQLFloat},pinNumber: {type: GraphQLString},productStoreId: {type: GraphQLString},cardNumber: {type: GraphQLString},currency: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/redeemGiftCertificate?amount=${args.amount}&pinNumber=${args.pinNumber}&productStoreId=${args.productStoreId}&cardNumber=${args.cardNumber}&currency=${args.currency}&partyId=${args.partyId}&`, null, req);
  }
};
export {redeemGiftCertificate};


const refundGcPurchase = {
  type: ResponseType,
  description: 'mutation for ofbiz refundGcPurchase method',
  args:{orderItem: {type: new GraphQLList(KeyValueInputType)},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/refundGcPurchase?orderItem=${args.orderItem}&partyId=${args.partyId}&`, null, req);
  }
};
export {refundGcPurchase};


const removeFinAccountTransFromReconciliation = {
  type: ResponseType,
  description: 'mutation for ofbiz removeFinAccountTransFromReconciliation method',
  args:{finAccountTransId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/removeFinAccountTransFromReconciliation?finAccountTransId=${args.finAccountTransId}&`, null, req);
  }
};
export {removeFinAccountTransFromReconciliation};


const setFinAccountTransStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz setFinAccountTransStatus method',
  args:{finAccountTransId: {type: GraphQLString},statusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/setFinAccountTransStatus?finAccountTransId=${args.finAccountTransId}&statusId=${args.statusId}&`, null, req);
  }
};
export {setFinAccountTransStatus};


const updateFinAccount = {
  type: ResponseType,
  description: 'mutation for ofbiz updateFinAccount method',
  args:{finAccountId: {type: GraphQLString},finAccountTypeId: {type: GraphQLString},thruDate: {type: GraphQLString},isRefundable: {type: GraphQLString},fromDate: {type: GraphQLString},ownerPartyId: {type: GraphQLString},postToGlAccountId: {type: GraphQLString},currencyUomId: {type: GraphQLString},statusId: {type: GraphQLString},finAccountName: {type: GraphQLString},finAccountPin: {type: GraphQLString},replenishLevel: {type: GraphQLFloat},replenishPaymentId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},finAccountCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/updateFinAccount?finAccountId=${args.finAccountId}&finAccountTypeId=${args.finAccountTypeId}&thruDate=${args.thruDate}&isRefundable=${args.isRefundable}&fromDate=${args.fromDate}&ownerPartyId=${args.ownerPartyId}&postToGlAccountId=${args.postToGlAccountId}&currencyUomId=${args.currencyUomId}&statusId=${args.statusId}&finAccountName=${args.finAccountName}&finAccountPin=${args.finAccountPin}&replenishLevel=${args.replenishLevel}&replenishPaymentId=${args.replenishPaymentId}&organizationPartyId=${args.organizationPartyId}&finAccountCode=${args.finAccountCode}&`, null, req);
  }
};
export {updateFinAccount};


const updateFinAccountAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updateFinAccountAttribute method',
  args:{finAccountId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/updateFinAccountAttribute?finAccountId=${args.finAccountId}&attrName=${args.attrName}&attrDescription=${args.attrDescription}&attrValue=${args.attrValue}&`, null, req);
  }
};
export {updateFinAccountAttribute};


const updateFinAccountBalancesFromAuth = {
  type: ResponseType,
  description: 'mutation for ofbiz updateFinAccountBalancesFromAuth method',
  args:{finAccountAuthId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/updateFinAccountBalancesFromAuth?finAccountAuthId=${args.finAccountAuthId}&`, null, req);
  }
};
export {updateFinAccountBalancesFromAuth};


const updateFinAccountBalancesFromTrans = {
  type: ResponseType,
  description: 'mutation for ofbiz updateFinAccountBalancesFromTrans method',
  args:{finAccountTransId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/updateFinAccountBalancesFromTrans?finAccountTransId=${args.finAccountTransId}&`, null, req);
  }
};
export {updateFinAccountBalancesFromTrans};


const updateFinAccountRole = {
  type: ResponseType,
  description: 'mutation for ofbiz updateFinAccountRole method',
  args:{fromDate: {type: GraphQLString},finAccountId: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/updateFinAccountRole?fromDate=${args.fromDate}&finAccountId=${args.finAccountId}&roleTypeId=${args.roleTypeId}&partyId=${args.partyId}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateFinAccountRole};


const updateFinAccountTransAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updateFinAccountTransAttribute method',
  args:{finAccountTransId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/updateFinAccountTransAttribute?finAccountTransId=${args.finAccountTransId}&attrName=${args.attrName}&attrDescription=${args.attrDescription}&attrValue=${args.attrValue}&`, null, req);
  }
};
export {updateFinAccountTransAttribute};


const updateFinAccountTransType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateFinAccountTransType method',
  args:{finAccountTransTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/updateFinAccountTransType?finAccountTransTypeId=${args.finAccountTransTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {updateFinAccountTransType};


const updateFinAccountTransTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz updateFinAccountTransTypeAttr method',
  args:{finAccountTransTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/updateFinAccountTransTypeAttr?finAccountTransTypeId=${args.finAccountTransTypeId}&attrName=${args.attrName}&description=${args.description}&`, null, req);
  }
};
export {updateFinAccountTransTypeAttr};


const updateFinAccountType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateFinAccountType method',
  args:{finAccountTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},replenishEnumId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},isRefundable: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/updateFinAccountType?finAccountTypeId=${args.finAccountTypeId}&parentTypeId=${args.parentTypeId}&replenishEnumId=${args.replenishEnumId}&hasTable=${args.hasTable}&description=${args.description}&isRefundable=${args.isRefundable}&`, null, req);
  }
};
export {updateFinAccountType};


const updateFinAccountTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz updateFinAccountTypeAttr method',
  args:{finAccountTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString},attrValue: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/updateFinAccountTypeAttr?finAccountTypeId=${args.finAccountTypeId}&attrName=${args.attrName}&description=${args.description}&attrValue=${args.attrValue}&`, null, req);
  }
};
export {updateFinAccountTypeAttr};


const updatePaymentOnFinAccTransStatusSetToCancel = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePaymentOnFinAccTransStatusSetToCancel method',
  args:{finAccountTransId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFinaccount/updatePaymentOnFinAccTransStatusSetToCancel?finAccountTransId=${args.finAccountTransId}&`, null, req);
  }
};
export {updatePaymentOnFinAccTransStatusSetToCancel};
