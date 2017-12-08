
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

import {ShipmentGatewayConfigType} from '../shipment/ShipmentGatewayConfig.js';


const ShipmentGatewayUpsType = new GraphQLObjectType({
  name: 'ShipmentGatewayUpsType',
  description: 'Type for ShipmentGatewayUps in shipment',

  fields: () => ({
    connectUrl: {type: GraphQLString},
    accessUserId: {type: GraphQLString},
    saveCertPath: {type: GraphQLString},
    billShipperAccountNumber: {type: GraphQLString},
    defaultReturnLabelSubject: {type: GraphQLString},
    customerClassification: {type: GraphQLString},
    shipperNumber: {type: GraphQLString},
    maxEstimateWeight: {type: GraphQLFloat},
    codSurchargeApplyToPackage: {type: GraphQLString},
    saveCertInfo: {type: GraphQLString},
    codSurchargeCurrencyUomId: {type: GraphQLString},
    codFundsCode: {type: GraphQLString},
    shipperPickupType: {type: GraphQLString},
    shipmentGatewayConfig: {
      type: ShipmentGatewayConfigType,
      args : {shipmentGatewayConfigId: {type: GraphQLString}},
      resolve: (shipmentGatewayUps, args, {loaders}) => loaders.ofbiz.load(`shipmentGatewayConfigs/find?shipmentGatewayConfigId=${shipmentGatewayUps.shipmentGatewayConfigId}`)
    },
    minEstimateWeight: {type: GraphQLFloat},
    codAllowCod: {type: GraphQLString},
    connectTimeout: {type: GraphQLInt},
    codSurchargeAmount: {type: GraphQLFloat},
    accessPassword: {type: GraphQLString},
    accessLicenseNumber: {type: GraphQLString},
    defaultReturnLabelMemo: {type: GraphQLString}
  })
});

export {ShipmentGatewayUpsType};
    




const ShipmentGatewayUpsInputType = new GraphQLInputObjectType({
  name: 'ShipmentGatewayUpsInputType',
  description: 'input type for ShipmentGatewayUps in shipment',

  fields: () => ({
    connectUrl: {type: GraphQLString},
    accessUserId: {type: GraphQLString},
    saveCertPath: {type: GraphQLString},
    billShipperAccountNumber: {type: GraphQLString},
    defaultReturnLabelSubject: {type: GraphQLString},
    customerClassification: {type: GraphQLString},
    shipperNumber: {type: GraphQLString},
    maxEstimateWeight: {type: GraphQLFloat},
    codSurchargeApplyToPackage: {type: GraphQLString},
    saveCertInfo: {type: GraphQLString},
    codSurchargeCurrencyUomId: {type: GraphQLString},
    codFundsCode: {type: GraphQLString},
    shipperPickupType: {type: GraphQLString},
    shipmentGatewayConfigId: {type: GraphQLString},
    minEstimateWeight: {type: GraphQLFloat},
    codAllowCod: {type: GraphQLString},
    connectTimeout: {type: GraphQLInt},
    codSurchargeAmount: {type: GraphQLFloat},
    accessPassword: {type: GraphQLString},
    accessLicenseNumber: {type: GraphQLString},
    defaultReturnLabelMemo: {type: GraphQLString}
  })
});

export {ShipmentGatewayUpsInputType};
    