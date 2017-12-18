
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
      resolve: (shipmentGatewayUps, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentGatewayConfigs/find?shipmentGatewayConfigId=${shipmentGatewayUps.shipmentGatewayConfigId}`)
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
  description: 'input type for ShipmentGatewayUps',

  fields: () => ({
    accessLicenseNumber: {type: GraphQLString},
    accessPassword: {type: GraphQLString},
    accessUserId: {type: GraphQLString},
    billShipperAccountNumber: {type: GraphQLString},
    codAllowCod: {type: GraphQLString},
    codFundsCode: {type: GraphQLString},
    codSurchargeAmount: {type: GraphQLFloat},
    codSurchargeApplyToPackage: {type: GraphQLString},
    codSurchargeCurrencyUomId: {type: GraphQLString},
    connectTimeout: {type: GraphQLInt},
    connectUrl: {type: GraphQLString},
    customerClassification: {type: GraphQLString},
    defaultReturnLabelMemo: {type: GraphQLString},
    defaultReturnLabelSubject: {type: GraphQLString},
    maxEstimateWeight: {type: GraphQLFloat},
    minEstimateWeight: {type: GraphQLFloat},
    saveCertInfo: {type: GraphQLString},
    saveCertPath: {type: GraphQLString},
    shipmentGatewayConfigId: {type: GraphQLString},
    shipperNumber: {type: GraphQLString},
    shipperPickupType: {type: GraphQLString}
  })
});

export {ShipmentGatewayUpsInputType};
    