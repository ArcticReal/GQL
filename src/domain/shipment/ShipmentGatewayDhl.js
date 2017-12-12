
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


const ShipmentGatewayDhlType = new GraphQLObjectType({
  name: 'ShipmentGatewayDhlType',
  description: 'Type for ShipmentGatewayDhl in shipment',

  fields: () => ({
    connectUrl: {type: GraphQLString},
    accessUserId: {type: GraphQLString},
    accessShippingKey: {type: GraphQLString},
    shipmentGatewayConfig: {
      type: ShipmentGatewayConfigType,
      args : {shipmentGatewayConfigId: {type: GraphQLString}},
      resolve: (shipmentGatewayDhl, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentGatewayConfigs/find?shipmentGatewayConfigId=${shipmentGatewayDhl.shipmentGatewayConfigId}`)
    },
    rateEstimateTemplate: {type: GraphQLString},
    connectTimeout: {type: GraphQLInt},
    accessAccountNbr: {type: GraphQLString},
    labelImageFormat: {type: GraphQLString},
    headVersion: {type: GraphQLString},
    headAction: {type: GraphQLString},
    accessPassword: {type: GraphQLString}
  })
});

export {ShipmentGatewayDhlType};
    




const ShipmentGatewayDhlInputType = new GraphQLInputObjectType({
  name: 'ShipmentGatewayDhlInputType',
  description: 'input type for ShipmentGatewayDhl in shipment',

  fields: () => ({
    connectUrl: {type: GraphQLString},
    accessUserId: {type: GraphQLString},
    accessShippingKey: {type: GraphQLString},
    shipmentGatewayConfigId: {type: GraphQLString},
    rateEstimateTemplate: {type: GraphQLString},
    connectTimeout: {type: GraphQLInt},
    accessAccountNbr: {type: GraphQLString},
    labelImageFormat: {type: GraphQLString},
    headVersion: {type: GraphQLString},
    headAction: {type: GraphQLString},
    accessPassword: {type: GraphQLString}
  })
});

export {ShipmentGatewayDhlInputType};
    