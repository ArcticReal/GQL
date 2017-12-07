
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ShipmentGatewayFedexType} from '../shipment/ShipmentGatewayFedexType.js';
import {ProductStoreShipmentMethType} from '../product/ProductStoreShipmentMethType.js';
import {ShipmentGatewayUspsType} from '../shipment/ShipmentGatewayUspsType.js';
import {ShipmentGatewayConfigTypeType} from '../shipment/ShipmentGatewayConfigTypeType.js';
import {ShipmentGatewayDhlType} from '../shipment/ShipmentGatewayDhlType.js';
import {ShipmentGatewayUpsType} from '../shipment/ShipmentGatewayUpsType.js';


const ShipmentGatewayConfigType = new GraphQLObjectType({
  name: 'ShipmentGatewayConfigType',
  description: 'Type for ShipmentGatewayConfig in shipment',

  fields: () => ({
    shipmentGatewayConfigId: {type: GraphQLString},
    description: {type: GraphQLString},
    shipmentGatewayConfType: {
      type: ShipmentGatewayConfigTypeType,
      args : {shipmentGatewayConfTypeId: {type: GraphQLString}},
      resolve: (shipmentGatewayConfig, args, {loaders}) => loaders.ofbiz.load(`shipmentGatewayConfigTypes/find?shipmentGatewayConfTypeId=${shipmentGatewayConfig.shipmentGatewayConfTypeId}`)
    },
    shipmentGatewayFedex: {
      type: new GraphQLList(ShipmentGatewayFedexType),
      args : {shipmentGatewayConfigId: {type: GraphQLString}},
      resolve: (shipmentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`shipmentGatewayFedexs/find?shipmentGatewayConfigId=${shipmentGatewayConfig.shipmentGatewayConfigId}`)
    },
    shipmentGatewayDhl: {
      type: new GraphQLList(ShipmentGatewayDhlType),
      args : {shipmentGatewayConfigId: {type: GraphQLString}},
      resolve: (shipmentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`shipmentGatewayDhls/find?shipmentGatewayConfigId=${shipmentGatewayConfig.shipmentGatewayConfigId}`)
    },
    shipmentGatewayUps: {
      type: new GraphQLList(ShipmentGatewayUpsType),
      args : {shipmentGatewayConfigId: {type: GraphQLString}},
      resolve: (shipmentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`shipmentGatewayUpss/find?shipmentGatewayConfigId=${shipmentGatewayConfig.shipmentGatewayConfigId}`)
    },
    productStoreShipmentMeth: {
      type: new GraphQLList(ProductStoreShipmentMethType),
      args : {shipmentGatewayConfigId: {type: GraphQLString}},
      resolve: (shipmentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`productStoreShipmentMeths/find?shipmentGatewayConfigId=${shipmentGatewayConfig.shipmentGatewayConfigId}`)
    },
    shipmentGatewayUsps: {
      type: new GraphQLList(ShipmentGatewayUspsType),
      args : {shipmentGatewayConfigId: {type: GraphQLString}},
      resolve: (shipmentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`shipmentGatewayUspss/find?shipmentGatewayConfigId=${shipmentGatewayConfig.shipmentGatewayConfigId}`)
    }
  })
});

export {ShipmentGatewayConfigType};
    