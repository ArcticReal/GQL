
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


const ShipmentGatewayFedexType = new GraphQLObjectType({
  name: 'ShipmentGatewayFedexType',
  description: 'Type for ShipmentGatewayFedex in shipment',

  fields: () => ({
    connectUrl: {type: GraphQLString},
    accessMeterNumber: {type: GraphQLString},
    rateEstimateTemplate: {type: GraphQLString},
    labelImageType: {type: GraphQLString},
    defaultDropoffType: {type: GraphQLString},
    accessUserKey: {type: GraphQLString},
    templateShipment: {type: GraphQLString},
    templateSubscription: {type: GraphQLString},
    accessUserPwd: {type: GraphQLString},
    shipmentGatewayConfig: {
      type: ShipmentGatewayConfigType,
      args : {shipmentGatewayConfigId: {type: GraphQLString}},
      resolve: (shipmentGatewayFedex, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentGatewayConfigs/find?shipmentGatewayConfigId=${shipmentGatewayFedex.shipmentGatewayConfigId}`)
    },
    defaultPackagingType: {type: GraphQLString},
    connectTimeout: {type: GraphQLInt},
    accessAccountNbr: {type: GraphQLString},
    connectSoapUrl: {type: GraphQLString}
  })
});

export {ShipmentGatewayFedexType};
    




const ShipmentGatewayFedexInputType = new GraphQLInputObjectType({
  name: 'ShipmentGatewayFedexInputType',
  description: 'input type for ShipmentGatewayFedex',

  fields: () => ({
    accessAccountNbr: {type: GraphQLString},
    accessMeterNumber: {type: GraphQLString},
    accessUserKey: {type: GraphQLString},
    accessUserPwd: {type: GraphQLString},
    connectSoapUrl: {type: GraphQLString},
    connectTimeout: {type: GraphQLInt},
    connectUrl: {type: GraphQLString},
    defaultDropoffType: {type: GraphQLString},
    defaultPackagingType: {type: GraphQLString},
    labelImageType: {type: GraphQLString},
    rateEstimateTemplate: {type: GraphQLString},
    shipmentGatewayConfigId: {type: GraphQLString},
    templateShipment: {type: GraphQLString},
    templateSubscription: {type: GraphQLString}
  })
});

export {ShipmentGatewayFedexInputType};
    