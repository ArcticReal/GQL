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

const ShipmentGatewayUpsResponseType = new GraphQLObjectType({
  name: 'ShipmentGatewayUpsResponseType',
  description: 'response type for ShipmentGatewayUps',

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

export {ShipmentGatewayUpsResponseType};
    