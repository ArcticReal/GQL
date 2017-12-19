
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


const ShipmentGatewayConfigTypeType = new GraphQLObjectType({
  name: 'ShipmentGatewayConfigTypeType',
  description: 'Type for ShipmentGatewayConfigType in shipment',

  fields: () => ({
    parentType: {
      type: ShipmentGatewayConfigTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (shipmentGatewayConfigType, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentGatewayConfigTypes/find?shipmentGatewayConfTypeId=${shipmentGatewayConfigType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    shipmentGatewayConfTypeId: {type: GraphQLString},
    shipmentGatewayConfigTypes: {
      type: new GraphQLList(ShipmentGatewayConfigTypeType),
      args : {},
      resolve: (shipmentGatewayConfigType, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentGatewayConfigTypes/find?shipmentGatewayConfTypeId=${shipmentGatewayConfigType.shipmentGatewayConfTypeId}`)
    },
    shipmentGatewayConfigs: {
      type: new GraphQLList(ShipmentGatewayConfigType),
      args : {},
      resolve: (shipmentGatewayConfigType, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentGatewayConfigs/find?shipmentGatewayConfTypeId=${shipmentGatewayConfigType.shipmentGatewayConfTypeId}`)
    }
  })
});

export {ShipmentGatewayConfigTypeType};
    