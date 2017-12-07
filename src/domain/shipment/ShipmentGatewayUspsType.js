
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


const ShipmentGatewayUspsType = new GraphQLObjectType({
  name: 'ShipmentGatewayUspsType',
  description: 'Type for ShipmentGatewayUsps in shipment',

  fields: () => ({
    connectUrl: {type: GraphQLInt},
    accessUserId: {type: GraphQLInt},
    test: {type: GraphQLString},
    shipmentGatewayConfig: {
      type: ShipmentGatewayConfigType,
      args : {shipmentGatewayConfigId: {type: GraphQLString}},
      resolve: (shipmentGatewayUsps, args, {loaders}) => loaders.ofbiz.load(`shipmentGatewayConfigs/find?shipmentGatewayConfigId=${shipmentGatewayUsps.shipmentGatewayConfigId}`)
    },
    connectTimeout: {type: GraphQLInt},
    connectUrlLabels: {type: GraphQLInt},
    accessPassword: {type: GraphQLInt},
    maxEstimateWeight: {type: GraphQLInt}
  })
});

export {ShipmentGatewayUspsType};
    