
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

import {ShipmentGatewayFedexType} from '../shipment/ShipmentGatewayFedex.js';
import {ProductStoreShipmentMethType} from '../product/ProductStoreShipmentMeth.js';
import {ShipmentGatewayUspsType} from '../shipment/ShipmentGatewayUsps.js';
import {ShipmentGatewayConfigTypeType} from '../shipment/ShipmentGatewayConfigType.js';
import {ShipmentGatewayDhlType} from '../shipment/ShipmentGatewayDhl.js';
import {ShipmentGatewayUpsType} from '../shipment/ShipmentGatewayUps.js';


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
    shipmentGatewayFedexes: {
      type: new GraphQLList(ShipmentGatewayFedexType),
      args : {shipmentGatewayConfigId: {type: GraphQLString}},
      resolve: (shipmentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`shipmentGatewayFedexs/find?shipmentGatewayConfigId=${shipmentGatewayConfig.shipmentGatewayConfigId}`)
    },
    shipmentGatewayDhls: {
      type: new GraphQLList(ShipmentGatewayDhlType),
      args : {shipmentGatewayConfigId: {type: GraphQLString}},
      resolve: (shipmentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`shipmentGatewayDhls/find?shipmentGatewayConfigId=${shipmentGatewayConfig.shipmentGatewayConfigId}`)
    },
    shipmentGatewayUpses: {
      type: new GraphQLList(ShipmentGatewayUpsType),
      args : {shipmentGatewayConfigId: {type: GraphQLString}},
      resolve: (shipmentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`shipmentGatewayUpss/find?shipmentGatewayConfigId=${shipmentGatewayConfig.shipmentGatewayConfigId}`)
    },
    productStoreShipmentMeths: {
      type: new GraphQLList(ProductStoreShipmentMethType),
      args : {shipmentGatewayConfigId: {type: GraphQLString}},
      resolve: (shipmentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`productStoreShipmentMeths/find?shipmentGatewayConfigId=${shipmentGatewayConfig.shipmentGatewayConfigId}`)
    },
    shipmentGatewayUspses: {
      type: new GraphQLList(ShipmentGatewayUspsType),
      args : {shipmentGatewayConfigId: {type: GraphQLString}},
      resolve: (shipmentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`shipmentGatewayUspss/find?shipmentGatewayConfigId=${shipmentGatewayConfig.shipmentGatewayConfigId}`)
    }
  })
});

export {ShipmentGatewayConfigType};
    




const ShipmentGatewayConfigInputType = new GraphQLInputObjectType({
  name: 'ShipmentGatewayConfigInputType',
  description: 'input type for ShipmentGatewayConfig in shipment',

  fields: () => ({
    shipmentGatewayConfigId: {type: GraphQLString},
    description: {type: GraphQLString},
    shipmentGatewayConfTypeId: {type: GraphQLString}
  })
});

export {ShipmentGatewayConfigInputType};
    