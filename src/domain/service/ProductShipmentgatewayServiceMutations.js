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


const createShipmentGatewayConfig = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShipmentGatewayConfig method',
  args:{shipmentGatewayConfigId: {type: GraphQLString},description: {type: GraphQLString},shipmentGatewayConfTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentgateway/createShipmentGatewayConfig?shipmentGatewayConfigId=${args.shipmentGatewayConfigId}description=${args.description}shipmentGatewayConfTypeId=${args.shipmentGatewayConfTypeId}`, null, req);
  }
};
export {createShipmentGatewayConfig};


const createShipmentGatewayConfigType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShipmentGatewayConfigType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},shipmentGatewayConfTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentgateway/createShipmentGatewayConfigType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}shipmentGatewayConfTypeId=${args.shipmentGatewayConfTypeId}`, null, req);
  }
};
export {createShipmentGatewayConfigType};


const createShipmentGatewayDhl = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShipmentGatewayDhl method',
  args:{shipmentGatewayConfigId: {type: GraphQLString},connectUrl: {type: GraphQLInt},accessUserId: {type: GraphQLInt},accessShippingKey: {type: GraphQLInt},rateEstimateTemplate: {type: GraphQLInt},connectTimeout: {type: GraphQLInt},accessAccountNbr: {type: GraphQLInt},labelImageFormat: {type: GraphQLString},headVersion: {type: GraphQLString},headAction: {type: GraphQLInt},accessPassword: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentgateway/createShipmentGatewayDhl?shipmentGatewayConfigId=${args.shipmentGatewayConfigId}connectUrl=${args.connectUrl}accessUserId=${args.accessUserId}accessShippingKey=${args.accessShippingKey}rateEstimateTemplate=${args.rateEstimateTemplate}connectTimeout=${args.connectTimeout}accessAccountNbr=${args.accessAccountNbr}labelImageFormat=${args.labelImageFormat}headVersion=${args.headVersion}headAction=${args.headAction}accessPassword=${args.accessPassword}`, null, req);
  }
};
export {createShipmentGatewayDhl};


const createShipmentGatewayFedex = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShipmentGatewayFedex method',
  args:{shipmentGatewayConfigId: {type: GraphQLString},connectUrl: {type: GraphQLInt},accessMeterNumber: {type: GraphQLInt},rateEstimateTemplate: {type: GraphQLInt},labelImageType: {type: GraphQLString},defaultDropoffType: {type: GraphQLInt},accessUserKey: {type: GraphQLInt},templateShipment: {type: GraphQLInt},templateSubscription: {type: GraphQLInt},accessUserPwd: {type: GraphQLInt},defaultPackagingType: {type: GraphQLInt},connectTimeout: {type: GraphQLInt},accessAccountNbr: {type: GraphQLInt},connectSoapUrl: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentgateway/createShipmentGatewayFedex?shipmentGatewayConfigId=${args.shipmentGatewayConfigId}connectUrl=${args.connectUrl}accessMeterNumber=${args.accessMeterNumber}rateEstimateTemplate=${args.rateEstimateTemplate}labelImageType=${args.labelImageType}defaultDropoffType=${args.defaultDropoffType}accessUserKey=${args.accessUserKey}templateShipment=${args.templateShipment}templateSubscription=${args.templateSubscription}accessUserPwd=${args.accessUserPwd}defaultPackagingType=${args.defaultPackagingType}connectTimeout=${args.connectTimeout}accessAccountNbr=${args.accessAccountNbr}connectSoapUrl=${args.connectSoapUrl}`, null, req);
  }
};
export {createShipmentGatewayFedex};


const createShipmentGatewayUps = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShipmentGatewayUps method',
  args:{shipmentGatewayConfigId: {type: GraphQLString},connectUrl: {type: GraphQLInt},accessUserId: {type: GraphQLInt},saveCertPath: {type: GraphQLInt},billShipperAccountNumber: {type: GraphQLInt},defaultReturnLabelSubject: {type: GraphQLInt},customerClassification: {type: GraphQLString},shipperNumber: {type: GraphQLInt},maxEstimateWeight: {type: GraphQLFloat},codSurchargeApplyToPackage: {type: GraphQLString},saveCertInfo: {type: GraphQLString},codSurchargeCurrencyUomId: {type: GraphQLString},codFundsCode: {type: GraphQLString},shipperPickupType: {type: GraphQLString},minEstimateWeight: {type: GraphQLFloat},codAllowCod: {type: GraphQLInt},connectTimeout: {type: GraphQLInt},codSurchargeAmount: {type: GraphQLFloat},accessPassword: {type: GraphQLInt},accessLicenseNumber: {type: GraphQLInt},defaultReturnLabelMemo: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentgateway/createShipmentGatewayUps?shipmentGatewayConfigId=${args.shipmentGatewayConfigId}connectUrl=${args.connectUrl}accessUserId=${args.accessUserId}saveCertPath=${args.saveCertPath}billShipperAccountNumber=${args.billShipperAccountNumber}defaultReturnLabelSubject=${args.defaultReturnLabelSubject}customerClassification=${args.customerClassification}shipperNumber=${args.shipperNumber}maxEstimateWeight=${args.maxEstimateWeight}codSurchargeApplyToPackage=${args.codSurchargeApplyToPackage}saveCertInfo=${args.saveCertInfo}codSurchargeCurrencyUomId=${args.codSurchargeCurrencyUomId}codFundsCode=${args.codFundsCode}shipperPickupType=${args.shipperPickupType}minEstimateWeight=${args.minEstimateWeight}codAllowCod=${args.codAllowCod}connectTimeout=${args.connectTimeout}codSurchargeAmount=${args.codSurchargeAmount}accessPassword=${args.accessPassword}accessLicenseNumber=${args.accessLicenseNumber}defaultReturnLabelMemo=${args.defaultReturnLabelMemo}`, null, req);
  }
};
export {createShipmentGatewayUps};


const createShipmentGatewayUsps = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShipmentGatewayUsps method',
  args:{shipmentGatewayConfigId: {type: GraphQLString},connectUrl: {type: GraphQLInt},accessUserId: {type: GraphQLInt},test: {type: GraphQLString},connectTimeout: {type: GraphQLInt},connectUrlLabels: {type: GraphQLInt},accessPassword: {type: GraphQLInt},maxEstimateWeight: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentgateway/createShipmentGatewayUsps?shipmentGatewayConfigId=${args.shipmentGatewayConfigId}connectUrl=${args.connectUrl}accessUserId=${args.accessUserId}test=${args.test}connectTimeout=${args.connectTimeout}connectUrlLabels=${args.connectUrlLabels}accessPassword=${args.accessPassword}maxEstimateWeight=${args.maxEstimateWeight}`, null, req);
  }
};
export {createShipmentGatewayUsps};


const createShipmentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShipmentType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},shipmentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentgateway/createShipmentType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}shipmentTypeId=${args.shipmentTypeId}`, null, req);
  }
};
export {createShipmentType};


const deleteShipmentGatewayConfig = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShipmentGatewayConfig method',
  args:{shipmentGatewayConfigId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentgateway/deleteShipmentGatewayConfig?shipmentGatewayConfigId=${args.shipmentGatewayConfigId}`, null, req);
  }
};
export {deleteShipmentGatewayConfig};


const deleteShipmentGatewayConfigType = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShipmentGatewayConfigType method',
  args:{shipmentGatewayConfTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentgateway/deleteShipmentGatewayConfigType?shipmentGatewayConfTypeId=${args.shipmentGatewayConfTypeId}`, null, req);
  }
};
export {deleteShipmentGatewayConfigType};


const deleteShipmentGatewayDhl = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShipmentGatewayDhl method',
  args:{shipmentGatewayConfigId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentgateway/deleteShipmentGatewayDhl?shipmentGatewayConfigId=${args.shipmentGatewayConfigId}`, null, req);
  }
};
export {deleteShipmentGatewayDhl};


const deleteShipmentGatewayFedex = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShipmentGatewayFedex method',
  args:{shipmentGatewayConfigId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentgateway/deleteShipmentGatewayFedex?shipmentGatewayConfigId=${args.shipmentGatewayConfigId}`, null, req);
  }
};
export {deleteShipmentGatewayFedex};


const deleteShipmentGatewayUps = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShipmentGatewayUps method',
  args:{shipmentGatewayConfigId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentgateway/deleteShipmentGatewayUps?shipmentGatewayConfigId=${args.shipmentGatewayConfigId}`, null, req);
  }
};
export {deleteShipmentGatewayUps};


const deleteShipmentGatewayUsps = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShipmentGatewayUsps method',
  args:{shipmentGatewayConfigId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentgateway/deleteShipmentGatewayUsps?shipmentGatewayConfigId=${args.shipmentGatewayConfigId}`, null, req);
  }
};
export {deleteShipmentGatewayUsps};


const deleteShipmentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShipmentType method',
  args:{shipmentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentgateway/deleteShipmentType?shipmentTypeId=${args.shipmentTypeId}`, null, req);
  }
};
export {deleteShipmentType};


const updateShipmentGatewayConfig = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShipmentGatewayConfig method',
  args:{shipmentGatewayConfigId: {type: GraphQLString},description: {type: GraphQLString},shipmentGatewayConfTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentgateway/updateShipmentGatewayConfig?shipmentGatewayConfigId=${args.shipmentGatewayConfigId}description=${args.description}shipmentGatewayConfTypeId=${args.shipmentGatewayConfTypeId}`, null, req);
  }
};
export {updateShipmentGatewayConfig};


const updateShipmentGatewayConfigType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShipmentGatewayConfigType method',
  args:{shipmentGatewayConfTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentgateway/updateShipmentGatewayConfigType?shipmentGatewayConfTypeId=${args.shipmentGatewayConfTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateShipmentGatewayConfigType};


const updateShipmentGatewayDhl = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShipmentGatewayDhl method',
  args:{shipmentGatewayConfigId: {type: GraphQLString},connectUrl: {type: GraphQLInt},accessUserId: {type: GraphQLInt},accessShippingKey: {type: GraphQLInt},rateEstimateTemplate: {type: GraphQLInt},connectTimeout: {type: GraphQLInt},accessAccountNbr: {type: GraphQLInt},labelImageFormat: {type: GraphQLString},headVersion: {type: GraphQLString},headAction: {type: GraphQLInt},accessPassword: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentgateway/updateShipmentGatewayDhl?shipmentGatewayConfigId=${args.shipmentGatewayConfigId}connectUrl=${args.connectUrl}accessUserId=${args.accessUserId}accessShippingKey=${args.accessShippingKey}rateEstimateTemplate=${args.rateEstimateTemplate}connectTimeout=${args.connectTimeout}accessAccountNbr=${args.accessAccountNbr}labelImageFormat=${args.labelImageFormat}headVersion=${args.headVersion}headAction=${args.headAction}accessPassword=${args.accessPassword}`, null, req);
  }
};
export {updateShipmentGatewayDhl};


const updateShipmentGatewayFedex = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShipmentGatewayFedex method',
  args:{shipmentGatewayConfigId: {type: GraphQLString},connectUrl: {type: GraphQLInt},accessMeterNumber: {type: GraphQLInt},rateEstimateTemplate: {type: GraphQLInt},labelImageType: {type: GraphQLString},defaultDropoffType: {type: GraphQLInt},accessUserKey: {type: GraphQLInt},templateShipment: {type: GraphQLInt},templateSubscription: {type: GraphQLInt},accessUserPwd: {type: GraphQLInt},defaultPackagingType: {type: GraphQLInt},connectTimeout: {type: GraphQLInt},accessAccountNbr: {type: GraphQLInt},connectSoapUrl: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentgateway/updateShipmentGatewayFedex?shipmentGatewayConfigId=${args.shipmentGatewayConfigId}connectUrl=${args.connectUrl}accessMeterNumber=${args.accessMeterNumber}rateEstimateTemplate=${args.rateEstimateTemplate}labelImageType=${args.labelImageType}defaultDropoffType=${args.defaultDropoffType}accessUserKey=${args.accessUserKey}templateShipment=${args.templateShipment}templateSubscription=${args.templateSubscription}accessUserPwd=${args.accessUserPwd}defaultPackagingType=${args.defaultPackagingType}connectTimeout=${args.connectTimeout}accessAccountNbr=${args.accessAccountNbr}connectSoapUrl=${args.connectSoapUrl}`, null, req);
  }
};
export {updateShipmentGatewayFedex};


const updateShipmentGatewayUps = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShipmentGatewayUps method',
  args:{shipmentGatewayConfigId: {type: GraphQLString},connectUrl: {type: GraphQLInt},accessUserId: {type: GraphQLInt},saveCertPath: {type: GraphQLInt},billShipperAccountNumber: {type: GraphQLInt},defaultReturnLabelSubject: {type: GraphQLInt},customerClassification: {type: GraphQLString},shipperNumber: {type: GraphQLInt},maxEstimateWeight: {type: GraphQLFloat},codSurchargeApplyToPackage: {type: GraphQLString},saveCertInfo: {type: GraphQLString},codSurchargeCurrencyUomId: {type: GraphQLString},codFundsCode: {type: GraphQLString},shipperPickupType: {type: GraphQLString},minEstimateWeight: {type: GraphQLFloat},codAllowCod: {type: GraphQLInt},connectTimeout: {type: GraphQLInt},codSurchargeAmount: {type: GraphQLFloat},accessPassword: {type: GraphQLInt},accessLicenseNumber: {type: GraphQLInt},defaultReturnLabelMemo: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentgateway/updateShipmentGatewayUps?shipmentGatewayConfigId=${args.shipmentGatewayConfigId}connectUrl=${args.connectUrl}accessUserId=${args.accessUserId}saveCertPath=${args.saveCertPath}billShipperAccountNumber=${args.billShipperAccountNumber}defaultReturnLabelSubject=${args.defaultReturnLabelSubject}customerClassification=${args.customerClassification}shipperNumber=${args.shipperNumber}maxEstimateWeight=${args.maxEstimateWeight}codSurchargeApplyToPackage=${args.codSurchargeApplyToPackage}saveCertInfo=${args.saveCertInfo}codSurchargeCurrencyUomId=${args.codSurchargeCurrencyUomId}codFundsCode=${args.codFundsCode}shipperPickupType=${args.shipperPickupType}minEstimateWeight=${args.minEstimateWeight}codAllowCod=${args.codAllowCod}connectTimeout=${args.connectTimeout}codSurchargeAmount=${args.codSurchargeAmount}accessPassword=${args.accessPassword}accessLicenseNumber=${args.accessLicenseNumber}defaultReturnLabelMemo=${args.defaultReturnLabelMemo}`, null, req);
  }
};
export {updateShipmentGatewayUps};


const updateShipmentGatewayUsps = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShipmentGatewayUsps method',
  args:{shipmentGatewayConfigId: {type: GraphQLString},connectUrl: {type: GraphQLInt},accessUserId: {type: GraphQLInt},test: {type: GraphQLString},connectTimeout: {type: GraphQLInt},connectUrlLabels: {type: GraphQLInt},accessPassword: {type: GraphQLInt},maxEstimateWeight: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentgateway/updateShipmentGatewayUsps?shipmentGatewayConfigId=${args.shipmentGatewayConfigId}connectUrl=${args.connectUrl}accessUserId=${args.accessUserId}test=${args.test}connectTimeout=${args.connectTimeout}connectUrlLabels=${args.connectUrlLabels}accessPassword=${args.accessPassword}maxEstimateWeight=${args.maxEstimateWeight}`, null, req);
  }
};
export {updateShipmentGatewayUsps};


const updateShipmentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShipmentType method',
  args:{shipmentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentgateway/updateShipmentType?shipmentTypeId=${args.shipmentTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateShipmentType};
