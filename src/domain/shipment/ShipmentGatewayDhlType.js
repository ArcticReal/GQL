
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


const ShipmentGatewayDhlType = new GraphQLObjectType({
  name: 'ShipmentGatewayDhlType',
  description: 'Type for ShipmentGatewayDhl in shipment',

  fields: () => ({
    connectUrl: {type: GraphQLInt},
    accessUserId: {type: GraphQLInt},
    accessShippingKey: {type: GraphQLInt},
    shipmentGatewayConfig: {
      type: ShipmentGatewayConfigType,
      args : {shipmentGatewayConfigId: {type: GraphQLString}},
      resolve: (shipmentGatewayDhl, args, {loaders}) => loaders.ofbiz.load(`shipmentGatewayConfigs/find?shipmentGatewayConfigId=${shipmentGatewayDhl.shipmentGatewayConfigId}`)
    },
    rateEstimateTemplate: {type: GraphQLInt},
    connectTimeout: {type: GraphQLInt},
    accessAccountNbr: {type: GraphQLInt},
    labelImageFormat: {type: GraphQLString},
    headVersion: {type: GraphQLString},
    headAction: {type: GraphQLInt},
    accessPassword: {type: GraphQLInt}
  })
});

export {ShipmentGatewayDhlType};
    