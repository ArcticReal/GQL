
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ShipmentGatewayConfigType} from '../shipment/ShipmentGatewayConfigType.js';


const ShipmentGatewayUpsType = new GraphQLObjectType({
  name: 'ShipmentGatewayUpsType',
  description: 'Type for ShipmentGatewayUps in shipment',

  fields: () => ({
    connectUrl: {type: GraphQLInt},
    accessUserId: {type: GraphQLInt},
    saveCertPath: {type: GraphQLInt},
    billShipperAccountNumber: {type: GraphQLInt},
    defaultReturnLabelSubject: {type: GraphQLInt},
    customerClassification: {type: GraphQLString},
    shipperNumber: {type: GraphQLInt},
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
    codAllowCod: {type: GraphQLInt},
    connectTimeout: {type: GraphQLInt},
    codSurchargeAmount: {type: GraphQLFloat},
    accessPassword: {type: GraphQLInt},
    accessLicenseNumber: {type: GraphQLInt},
    defaultReturnLabelMemo: {type: GraphQLInt}
  })
});

export {ShipmentGatewayUpsType};
    