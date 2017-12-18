
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


const ShipmentGatewayUspsType = new GraphQLObjectType({
  name: 'ShipmentGatewayUspsType',
  description: 'Type for ShipmentGatewayUsps in shipment',

  fields: () => ({
    connectUrl: {type: GraphQLString},
    accessUserId: {type: GraphQLString},
    test: {type: GraphQLString},
    shipmentGatewayConfig: {
      type: ShipmentGatewayConfigType,
      args : {shipmentGatewayConfigId: {type: GraphQLString}},
      resolve: (shipmentGatewayUsps, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentGatewayConfigs/find?shipmentGatewayConfigId=${shipmentGatewayUsps.shipmentGatewayConfigId}`)
    },
    connectTimeout: {type: GraphQLInt},
    connectUrlLabels: {type: GraphQLString},
    accessPassword: {type: GraphQLString},
    maxEstimateWeight: {type: GraphQLInt}
  })
});

export {ShipmentGatewayUspsType};
    




const ShipmentGatewayUspsInputType = new GraphQLInputObjectType({
  name: 'ShipmentGatewayUspsInputType',
  description: 'input type for ShipmentGatewayUsps',

  fields: () => ({
    accessPassword: {type: GraphQLString},
    accessUserId: {type: GraphQLString},
    connectTimeout: {type: GraphQLInt},
    connectUrl: {type: GraphQLString},
    connectUrlLabels: {type: GraphQLString},
    maxEstimateWeight: {type: GraphQLInt},
    shipmentGatewayConfigId: {type: GraphQLString},
    test: {type: GraphQLString}
  })
});

export {ShipmentGatewayUspsInputType};
    