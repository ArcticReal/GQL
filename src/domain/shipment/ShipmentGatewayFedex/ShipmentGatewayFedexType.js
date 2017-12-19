
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

import {ShipmentGatewayConfigType} from '../../shipment/ShipmentGatewayConfig/ShipmentGatewayConfigType.js';


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
    