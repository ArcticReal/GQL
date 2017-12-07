
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


const ShipmentGatewayFedexType = new GraphQLObjectType({
  name: 'ShipmentGatewayFedexType',
  description: 'Type for ShipmentGatewayFedex in shipment',

  fields: () => ({
    connectUrl: {type: GraphQLInt},
    accessMeterNumber: {type: GraphQLInt},
    rateEstimateTemplate: {type: GraphQLInt},
    labelImageType: {type: GraphQLString},
    defaultDropoffType: {type: GraphQLInt},
    accessUserKey: {type: GraphQLInt},
    templateShipment: {type: GraphQLInt},
    templateSubscription: {type: GraphQLInt},
    accessUserPwd: {type: GraphQLInt},
    shipmentGatewayConfig: {
      type: ShipmentGatewayConfigType,
      args : {shipmentGatewayConfigId: {type: GraphQLString}},
      resolve: (shipmentGatewayFedex, args, {loaders}) => loaders.ofbiz.load(`shipmentGatewayConfigs/find?shipmentGatewayConfigId=${shipmentGatewayFedex.shipmentGatewayConfigId}`)
    },
    defaultPackagingType: {type: GraphQLInt},
    connectTimeout: {type: GraphQLInt},
    accessAccountNbr: {type: GraphQLInt},
    connectSoapUrl: {type: GraphQLInt}
  })
});

export {ShipmentGatewayFedexType};
    