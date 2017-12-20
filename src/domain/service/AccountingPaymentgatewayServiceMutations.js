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
import {ResopnseType,KeyValueInputType} from '../../framework/helpTypes.js';


const createPaymentGatewayConfig = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPaymentGatewayConfig method',
  args:{paymentGatewayConfigId: {type: GraphQLString},paymentGatewayConfigTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentgateway/createPaymentGatewayConfig?paymentGatewayConfigId=${args.paymentGatewayConfigId}paymentGatewayConfigTypeId=${args.paymentGatewayConfigTypeId}description=${args.description}`, null, req);
  }
};
export {createPaymentGatewayConfig};


const createPaymentGatewayConfigAuthorizeNet = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPaymentGatewayConfigAuthorizeNet method',
  args:{cpVersion: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},method: {type: GraphQLString},transDescription: {type: GraphQLInt},cpMarketType: {type: GraphQLString},certificateAlias: {type: GraphQLInt},delimiterChar: {type: GraphQLString},emailCustomer: {type: GraphQLString},transactionUrl: {type: GraphQLInt},userId: {type: GraphQLInt},delimitedData: {type: GraphQLString},tranKey: {type: GraphQLInt},apiVersion: {type: GraphQLString},emailMerchant: {type: GraphQLString},testMode: {type: GraphQLString},relayResponse: {type: GraphQLString},pwd: {type: GraphQLInt},duplicateWindow: {type: GraphQLInt},cpDeviceType: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentgateway/createPaymentGatewayConfigAuthorizeNet?cpVersion=${args.cpVersion}paymentGatewayConfigId=${args.paymentGatewayConfigId}method=${args.method}transDescription=${args.transDescription}cpMarketType=${args.cpMarketType}certificateAlias=${args.certificateAlias}delimiterChar=${args.delimiterChar}emailCustomer=${args.emailCustomer}transactionUrl=${args.transactionUrl}userId=${args.userId}delimitedData=${args.delimitedData}tranKey=${args.tranKey}apiVersion=${args.apiVersion}emailMerchant=${args.emailMerchant}testMode=${args.testMode}relayResponse=${args.relayResponse}pwd=${args.pwd}duplicateWindow=${args.duplicateWindow}cpDeviceType=${args.cpDeviceType}`, null, req);
  }
};
export {createPaymentGatewayConfigAuthorizeNet};


const createPaymentGatewayConfigClearCommerce = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPaymentGatewayConfigClearCommerce method',
  args:{sourceId: {type: GraphQLString},effectiveAlias: {type: GraphQLString},clientId: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},groupId: {type: GraphQLString},userAlias: {type: GraphQLString},serverURL: {type: GraphQLInt},pwd: {type: GraphQLInt},processMode: {type: GraphQLString},enableCVM: {type: GraphQLString},username: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentgateway/createPaymentGatewayConfigClearCommerce?sourceId=${args.sourceId}effectiveAlias=${args.effectiveAlias}clientId=${args.clientId}paymentGatewayConfigId=${args.paymentGatewayConfigId}groupId=${args.groupId}userAlias=${args.userAlias}serverURL=${args.serverURL}pwd=${args.pwd}processMode=${args.processMode}enableCVM=${args.enableCVM}username=${args.username}`, null, req);
  }
};
export {createPaymentGatewayConfigClearCommerce};


const createPaymentGatewayConfigSagePay = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPaymentGatewayConfigSagePay method',
  args:{authenticationTransType: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},voidUrl: {type: GraphQLString},testingHost: {type: GraphQLString},sagePayMode: {type: GraphQLString},releaseTransType: {type: GraphQLString},authoriseTransType: {type: GraphQLString},vendor: {type: GraphQLString},productionHost: {type: GraphQLString},refundUrl: {type: GraphQLString},protocolVersion: {type: GraphQLString},releaseUrl: {type: GraphQLString},authenticationUrl: {type: GraphQLString},authoriseUrl: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentgateway/createPaymentGatewayConfigSagePay?authenticationTransType=${args.authenticationTransType}paymentGatewayConfigId=${args.paymentGatewayConfigId}voidUrl=${args.voidUrl}testingHost=${args.testingHost}sagePayMode=${args.sagePayMode}releaseTransType=${args.releaseTransType}authoriseTransType=${args.authoriseTransType}vendor=${args.vendor}productionHost=${args.productionHost}refundUrl=${args.refundUrl}protocolVersion=${args.protocolVersion}releaseUrl=${args.releaseUrl}authenticationUrl=${args.authenticationUrl}authoriseUrl=${args.authoriseUrl}`, null, req);
  }
};
export {createPaymentGatewayConfigSagePay};


const deletePaymentGatewayConfig = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePaymentGatewayConfig method',
  args:{paymentGatewayConfigId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentgateway/deletePaymentGatewayConfig?paymentGatewayConfigId=${args.paymentGatewayConfigId}`, null, req);
  }
};
export {deletePaymentGatewayConfig};


const deletePaymentGatewayConfigAuthorizeNet = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePaymentGatewayConfigAuthorizeNet method',
  args:{paymentGatewayConfigId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentgateway/deletePaymentGatewayConfigAuthorizeNet?paymentGatewayConfigId=${args.paymentGatewayConfigId}`, null, req);
  }
};
export {deletePaymentGatewayConfigAuthorizeNet};


const deletePaymentGatewayConfigClearCommerce = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePaymentGatewayConfigClearCommerce method',
  args:{paymentGatewayConfigId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentgateway/deletePaymentGatewayConfigClearCommerce?paymentGatewayConfigId=${args.paymentGatewayConfigId}`, null, req);
  }
};
export {deletePaymentGatewayConfigClearCommerce};


const deletePaymentGatewayConfigSagePay = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePaymentGatewayConfigSagePay method',
  args:{paymentGatewayConfigId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentgateway/deletePaymentGatewayConfigSagePay?paymentGatewayConfigId=${args.paymentGatewayConfigId}`, null, req);
  }
};
export {deletePaymentGatewayConfigSagePay};


const updatePaymentGatewayConfig = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentGatewayConfig method',
  args:{paymentGatewayConfigId: {type: GraphQLString},paymentGatewayConfigTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentgateway/updatePaymentGatewayConfig?paymentGatewayConfigId=${args.paymentGatewayConfigId}paymentGatewayConfigTypeId=${args.paymentGatewayConfigTypeId}description=${args.description}`, null, req);
  }
};
export {updatePaymentGatewayConfig};


const updatePaymentGatewayConfigAuthorizeNet = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentGatewayConfigAuthorizeNet method',
  args:{paymentGatewayConfigId: {type: GraphQLString},cpVersion: {type: GraphQLString},method: {type: GraphQLString},transDescription: {type: GraphQLInt},cpMarketType: {type: GraphQLString},certificateAlias: {type: GraphQLInt},delimiterChar: {type: GraphQLString},emailCustomer: {type: GraphQLString},transactionUrl: {type: GraphQLInt},userId: {type: GraphQLInt},delimitedData: {type: GraphQLString},tranKey: {type: GraphQLInt},apiVersion: {type: GraphQLString},emailMerchant: {type: GraphQLString},testMode: {type: GraphQLString},relayResponse: {type: GraphQLString},pwd: {type: GraphQLInt},duplicateWindow: {type: GraphQLInt},cpDeviceType: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentgateway/updatePaymentGatewayConfigAuthorizeNet?paymentGatewayConfigId=${args.paymentGatewayConfigId}cpVersion=${args.cpVersion}method=${args.method}transDescription=${args.transDescription}cpMarketType=${args.cpMarketType}certificateAlias=${args.certificateAlias}delimiterChar=${args.delimiterChar}emailCustomer=${args.emailCustomer}transactionUrl=${args.transactionUrl}userId=${args.userId}delimitedData=${args.delimitedData}tranKey=${args.tranKey}apiVersion=${args.apiVersion}emailMerchant=${args.emailMerchant}testMode=${args.testMode}relayResponse=${args.relayResponse}pwd=${args.pwd}duplicateWindow=${args.duplicateWindow}cpDeviceType=${args.cpDeviceType}`, null, req);
  }
};
export {updatePaymentGatewayConfigAuthorizeNet};


const updatePaymentGatewayConfigClearCommerce = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentGatewayConfigClearCommerce method',
  args:{paymentGatewayConfigId: {type: GraphQLString},sourceId: {type: GraphQLString},effectiveAlias: {type: GraphQLString},clientId: {type: GraphQLString},groupId: {type: GraphQLString},userAlias: {type: GraphQLString},serverURL: {type: GraphQLInt},pwd: {type: GraphQLInt},processMode: {type: GraphQLString},enableCVM: {type: GraphQLString},username: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentgateway/updatePaymentGatewayConfigClearCommerce?paymentGatewayConfigId=${args.paymentGatewayConfigId}sourceId=${args.sourceId}effectiveAlias=${args.effectiveAlias}clientId=${args.clientId}groupId=${args.groupId}userAlias=${args.userAlias}serverURL=${args.serverURL}pwd=${args.pwd}processMode=${args.processMode}enableCVM=${args.enableCVM}username=${args.username}`, null, req);
  }
};
export {updatePaymentGatewayConfigClearCommerce};


const updatePaymentGatewayConfigCyberSource = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentGatewayConfigCyberSource method',
  args:{paymentGatewayConfigId: {type: GraphQLString},fraudScore: {type: GraphQLString},production: {type: GraphQLString},keysDir: {type: GraphQLInt},merchantContact: {type: GraphQLInt},autoBill: {type: GraphQLString},enableDav: {type: GraphQLString},apiVersion: {type: GraphQLString},keysFile: {type: GraphQLInt},merchantDescr: {type: GraphQLInt},logEnabled: {type: GraphQLString},merchantId: {type: GraphQLInt},logFile: {type: GraphQLInt},logSize: {type: GraphQLInt},ignoreAvs: {type: GraphQLString},disableBillAvs: {type: GraphQLString},logDir: {type: GraphQLInt},avsDeclineCodes: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentgateway/updatePaymentGatewayConfigCyberSource?paymentGatewayConfigId=${args.paymentGatewayConfigId}fraudScore=${args.fraudScore}production=${args.production}keysDir=${args.keysDir}merchantContact=${args.merchantContact}autoBill=${args.autoBill}enableDav=${args.enableDav}apiVersion=${args.apiVersion}keysFile=${args.keysFile}merchantDescr=${args.merchantDescr}logEnabled=${args.logEnabled}merchantId=${args.merchantId}logFile=${args.logFile}logSize=${args.logSize}ignoreAvs=${args.ignoreAvs}disableBillAvs=${args.disableBillAvs}logDir=${args.logDir}avsDeclineCodes=${args.avsDeclineCodes}`, null, req);
  }
};
export {updatePaymentGatewayConfigCyberSource};


const updatePaymentGatewayConfigEway = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentGatewayConfigEway method',
  args:{paymentGatewayConfigId: {type: GraphQLString},enableCvn: {type: GraphQLString},testMode: {type: GraphQLString},enableBeagle: {type: GraphQLString},customerId: {type: GraphQLInt},refundPwd: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentgateway/updatePaymentGatewayConfigEway?paymentGatewayConfigId=${args.paymentGatewayConfigId}enableCvn=${args.enableCvn}testMode=${args.testMode}enableBeagle=${args.enableBeagle}customerId=${args.customerId}refundPwd=${args.refundPwd}`, null, req);
  }
};
export {updatePaymentGatewayConfigEway};


const updatePaymentGatewayConfigPayPal = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentGatewayConfigPayPal method',
  args:{paymentGatewayConfigId: {type: GraphQLString},businessEmail: {type: GraphQLInt},apiUserName: {type: GraphQLString},redirectUrl: {type: GraphQLInt},confirmTemplate: {type: GraphQLInt},cancelReturnUrl: {type: GraphQLInt},apiPassword: {type: GraphQLString},apiSignature: {type: GraphQLString},imageUrl: {type: GraphQLInt},requireConfirmedShipping: {type: GraphQLString},notifyUrl: {type: GraphQLInt},apiEnvironment: {type: GraphQLString},confirmUrl: {type: GraphQLInt},returnUrl: {type: GraphQLInt},shippingCallbackUrl: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentgateway/updatePaymentGatewayConfigPayPal?paymentGatewayConfigId=${args.paymentGatewayConfigId}businessEmail=${args.businessEmail}apiUserName=${args.apiUserName}redirectUrl=${args.redirectUrl}confirmTemplate=${args.confirmTemplate}cancelReturnUrl=${args.cancelReturnUrl}apiPassword=${args.apiPassword}apiSignature=${args.apiSignature}imageUrl=${args.imageUrl}requireConfirmedShipping=${args.requireConfirmedShipping}notifyUrl=${args.notifyUrl}apiEnvironment=${args.apiEnvironment}confirmUrl=${args.confirmUrl}returnUrl=${args.returnUrl}shippingCallbackUrl=${args.shippingCallbackUrl}`, null, req);
  }
};
export {updatePaymentGatewayConfigPayPal};


const updatePaymentGatewayConfigPayflowPro = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentGatewayConfigPayflowPro method',
  args:{paymentGatewayConfigId: {type: GraphQLString},redirectUrl: {type: GraphQLInt},proxyPassword: {type: GraphQLInt},cancelReturnUrl: {type: GraphQLInt},enableTransmit: {type: GraphQLInt},checkAvs: {type: GraphQLString},stackTraceOn: {type: GraphQLString},userId: {type: GraphQLString},checkCvv2: {type: GraphQLString},timeout: {type: GraphQLInt},proxyPort: {type: GraphQLInt},proxyLogon: {type: GraphQLInt},certsPath: {type: GraphQLInt},partner: {type: GraphQLString},vendor: {type: GraphQLString},logFileName: {type: GraphQLInt},hostPort: {type: GraphQLInt},hostAddress: {type: GraphQLInt},preAuth: {type: GraphQLString},proxyAddress: {type: GraphQLInt},pwd: {type: GraphQLInt},returnUrl: {type: GraphQLInt},loggingLevel: {type: GraphQLInt},maxLogFileSize: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentgateway/updatePaymentGatewayConfigPayflowPro?paymentGatewayConfigId=${args.paymentGatewayConfigId}redirectUrl=${args.redirectUrl}proxyPassword=${args.proxyPassword}cancelReturnUrl=${args.cancelReturnUrl}enableTransmit=${args.enableTransmit}checkAvs=${args.checkAvs}stackTraceOn=${args.stackTraceOn}userId=${args.userId}checkCvv2=${args.checkCvv2}timeout=${args.timeout}proxyPort=${args.proxyPort}proxyLogon=${args.proxyLogon}certsPath=${args.certsPath}partner=${args.partner}vendor=${args.vendor}logFileName=${args.logFileName}hostPort=${args.hostPort}hostAddress=${args.hostAddress}preAuth=${args.preAuth}proxyAddress=${args.proxyAddress}pwd=${args.pwd}returnUrl=${args.returnUrl}loggingLevel=${args.loggingLevel}maxLogFileSize=${args.maxLogFileSize}`, null, req);
  }
};
export {updatePaymentGatewayConfigPayflowPro};


const updatePaymentGatewayConfigSagePay = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentGatewayConfigSagePay method',
  args:{paymentGatewayConfigId: {type: GraphQLString},authenticationTransType: {type: GraphQLString},voidUrl: {type: GraphQLString},testingHost: {type: GraphQLString},sagePayMode: {type: GraphQLString},releaseTransType: {type: GraphQLString},authoriseTransType: {type: GraphQLString},vendor: {type: GraphQLString},productionHost: {type: GraphQLString},refundUrl: {type: GraphQLString},protocolVersion: {type: GraphQLString},releaseUrl: {type: GraphQLString},authenticationUrl: {type: GraphQLString},authoriseUrl: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentgateway/updatePaymentGatewayConfigSagePay?paymentGatewayConfigId=${args.paymentGatewayConfigId}authenticationTransType=${args.authenticationTransType}voidUrl=${args.voidUrl}testingHost=${args.testingHost}sagePayMode=${args.sagePayMode}releaseTransType=${args.releaseTransType}authoriseTransType=${args.authoriseTransType}vendor=${args.vendor}productionHost=${args.productionHost}refundUrl=${args.refundUrl}protocolVersion=${args.protocolVersion}releaseUrl=${args.releaseUrl}authenticationUrl=${args.authenticationUrl}authoriseUrl=${args.authoriseUrl}`, null, req);
  }
};
export {updatePaymentGatewayConfigSagePay};


const updatePaymentGatewayConfigSecurePay = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentGatewayConfigSecurePay method',
  args:{paymentGatewayConfigId: {type: GraphQLString},merchantId: {type: GraphQLInt},serverURL: {type: GraphQLInt},pwd: {type: GraphQLInt},processTimeout: {type: GraphQLInt},enableAmountRound: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentgateway/updatePaymentGatewayConfigSecurePay?paymentGatewayConfigId=${args.paymentGatewayConfigId}merchantId=${args.merchantId}serverURL=${args.serverURL}pwd=${args.pwd}processTimeout=${args.processTimeout}enableAmountRound=${args.enableAmountRound}`, null, req);
  }
};
export {updatePaymentGatewayConfigSecurePay};


const updatePaymentGatewayConfigType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentGatewayConfigType method',
  args:{paymentGatewayConfigTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentgateway/updatePaymentGatewayConfigType?paymentGatewayConfigTypeId=${args.paymentGatewayConfigTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updatePaymentGatewayConfigType};


const updatePaymentGatewayConfigWorldPay = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentGatewayConfigWorldPay method',
  args:{paymentGatewayConfigId: {type: GraphQLString},authMode: {type: GraphQLString},instId: {type: GraphQLInt},redirectUrl: {type: GraphQLInt},hideContact: {type: GraphQLString},testMode: {type: GraphQLInt},fixContact: {type: GraphQLString},langId: {type: GraphQLString},hideCurrency: {type: GraphQLString},noLanguageMenu: {type: GraphQLString},withDelivery: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentgateway/updatePaymentGatewayConfigWorldPay?paymentGatewayConfigId=${args.paymentGatewayConfigId}authMode=${args.authMode}instId=${args.instId}redirectUrl=${args.redirectUrl}hideContact=${args.hideContact}testMode=${args.testMode}fixContact=${args.fixContact}langId=${args.langId}hideCurrency=${args.hideCurrency}noLanguageMenu=${args.noLanguageMenu}withDelivery=${args.withDelivery}`, null, req);
  }
};
export {updatePaymentGatewayConfigWorldPay};


const updatePaymentGatewayConfigiDEAL = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentGatewayConfigiDEAL method',
  args:{paymentGatewayConfigId: {type: GraphQLString},expirationPeriod: {type: GraphQLInt},merchantReturnURL: {type: GraphQLInt},merchantId: {type: GraphQLInt},acquirerKeyStoreFilename: {type: GraphQLInt},merchantSubId: {type: GraphQLInt},merchantKeyStorePassword: {type: GraphQLInt},acquirerURL: {type: GraphQLInt},acquirerTimeout: {type: GraphQLInt},privateCert: {type: GraphQLInt},acquirerKeyStorePassword: {type: GraphQLInt},merchantKeyStoreFilename: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPaymentgateway/updatePaymentGatewayConfigiDEAL?paymentGatewayConfigId=${args.paymentGatewayConfigId}expirationPeriod=${args.expirationPeriod}merchantReturnURL=${args.merchantReturnURL}merchantId=${args.merchantId}acquirerKeyStoreFilename=${args.acquirerKeyStoreFilename}merchantSubId=${args.merchantSubId}merchantKeyStorePassword=${args.merchantKeyStorePassword}acquirerURL=${args.acquirerURL}acquirerTimeout=${args.acquirerTimeout}privateCert=${args.privateCert}acquirerKeyStorePassword=${args.acquirerKeyStorePassword}merchantKeyStoreFilename=${args.merchantKeyStoreFilename}`, null, req);
  }
};
export {updatePaymentGatewayConfigiDEAL};
