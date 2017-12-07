
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


const ShipmentGatewayConfigTypeType = new GraphQLObjectType({
  name: 'ShipmentGatewayConfigTypeType',
  description: 'Type for ShipmentGatewayConfigType in shipment',

  fields: () => ({
    parentType: {
      type: ShipmentGatewayConfigTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (shipmentGatewayConfigType, args, {loaders}) => loaders.ofbiz.load(`shipmentGatewayConfigTypes/find?shipmentGatewayConfTypeId=${shipmentGatewayConfigType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    shipmentGatewayConfTypeId: {type: GraphQLString},
    shipmentGatewayConfigType: {
      type: new GraphQLList(ShipmentGatewayConfigTypeType),
      args : {shipmentGatewayConfTypeId: {type: GraphQLString}},
      resolve: (shipmentGatewayConfigType, args, {loaders}) => loaders.ofbizArray.load(`shipmentGatewayConfigTypes/find?shipmentGatewayConfTypeId=${shipmentGatewayConfigType.shipmentGatewayConfTypeId}`)
    },
    shipmentGatewayConfig: {
      type: new GraphQLList(ShipmentGatewayConfigType),
      args : {shipmentGatewayConfTypeId: {type: GraphQLString}},
      resolve: (shipmentGatewayConfigType, args, {loaders}) => loaders.ofbizArray.load(`shipmentGatewayConfigs/find?shipmentGatewayConfTypeId=${shipmentGatewayConfigType.shipmentGatewayConfTypeId}`)
    }
  })
});

export {ShipmentGatewayConfigTypeType};
    