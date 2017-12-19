
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

import {ShipmentGatewayFedexType} from '../../shipment/ShipmentGatewayFedex/ShipmentGatewayFedexType.js';
import {ProductStoreShipmentMethType} from '../../product/ProductStoreShipmentMeth/ProductStoreShipmentMethType.js';
import {ShipmentGatewayUspsType} from '../../shipment/ShipmentGatewayUsps/ShipmentGatewayUspsType.js';
import {ShipmentGatewayConfigTypeType} from '../../shipment/ShipmentGatewayConfigType/ShipmentGatewayConfigTypeType.js';
import {ShipmentGatewayDhlType} from '../../shipment/ShipmentGatewayDhl/ShipmentGatewayDhlType.js';
import {ShipmentGatewayUpsType} from '../../shipment/ShipmentGatewayUps/ShipmentGatewayUpsType.js';


const ShipmentGatewayConfigType = new GraphQLObjectType({
  name: 'ShipmentGatewayConfigType',
  description: 'Type for ShipmentGatewayConfig in shipment',

  fields: () => ({
    shipmentGatewayConfigId: {type: GraphQLString},
    description: {type: GraphQLString},
    shipmentGatewayConfType: {
      type: ShipmentGatewayConfigTypeType,
      args : {shipmentGatewayConfTypeId: {type: GraphQLString}},
      resolve: (shipmentGatewayConfig, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentGatewayConfigTypes/find?shipmentGatewayConfTypeId=${shipmentGatewayConfig.shipmentGatewayConfTypeId}`)
    },
    shipmentGatewayFedexes: {
      type: new GraphQLList(ShipmentGatewayFedexType),
      args : {},
      resolve: (shipmentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentGatewayFedexs/find?shipmentGatewayConfigId=${shipmentGatewayConfig.shipmentGatewayConfigId}`)
    },
    shipmentGatewayDhls: {
      type: new GraphQLList(ShipmentGatewayDhlType),
      args : {},
      resolve: (shipmentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentGatewayDhls/find?shipmentGatewayConfigId=${shipmentGatewayConfig.shipmentGatewayConfigId}`)
    },
    shipmentGatewayUpses: {
      type: new GraphQLList(ShipmentGatewayUpsType),
      args : {},
      resolve: (shipmentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentGatewayUpss/find?shipmentGatewayConfigId=${shipmentGatewayConfig.shipmentGatewayConfigId}`)
    },
    productStoreShipmentMeths: {
      type: new GraphQLList(ProductStoreShipmentMethType),
      args : {},
      resolve: (shipmentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreShipmentMeths/find?shipmentGatewayConfigId=${shipmentGatewayConfig.shipmentGatewayConfigId}`)
    },
    shipmentGatewayUspses: {
      type: new GraphQLList(ShipmentGatewayUspsType),
      args : {},
      resolve: (shipmentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentGatewayUspss/find?shipmentGatewayConfigId=${shipmentGatewayConfig.shipmentGatewayConfigId}`)
    }
  })
});

export {ShipmentGatewayConfigType};
    