
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

import {ShipmentRouteSegmentType} from '../shipment/ShipmentRouteSegment.js';
import {ProductStoreShipmentMethType} from '../product/ProductStoreShipmentMeth.js';
import {CarrierShipmentMethodType} from '../shipment/CarrierShipmentMethod.js';
import {ProductStoreVendorShipmentType} from '../product/ProductStoreVendorShipment.js';
import {OrderItemShipGroupType} from '../order/OrderItemShipGroup.js';
import {FacilityCarrierShipmentType} from '../product/FacilityCarrierShipment.js';
import {PicklistType} from '../shipment/Picklist.js';


const ShipmentMethodTypeType = new GraphQLObjectType({
  name: 'ShipmentMethodTypeType',
  description: 'Type for ShipmentMethodType in shipment',

  fields: () => ({
    sequenceNum: {type: GraphQLInt},
    description: {type: GraphQLString},
    shipmentMethodTypeId: {type: GraphQLString},
    facilityCarrierShipments: {
      type: new GraphQLList(FacilityCarrierShipmentType),
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (shipmentMethodType, args, {loaders}) => loaders.ofbizArray.load(`facilityCarrierShipments/find?shipmentMethodTypeId=${shipmentMethodType.shipmentMethodTypeId}`)
    },
    orderItemShipGroups: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (shipmentMethodType, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroups/find?shipmentMethodTypeId=${shipmentMethodType.shipmentMethodTypeId}`)
    },
    shipmentRouteSegments: {
      type: new GraphQLList(ShipmentRouteSegmentType),
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (shipmentMethodType, args, {loaders}) => loaders.ofbizArray.load(`shipmentRouteSegments/find?shipmentMethodTypeId=${shipmentMethodType.shipmentMethodTypeId}`)
    },
    carrierShipmentMethods: {
      type: new GraphQLList(CarrierShipmentMethodType),
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (shipmentMethodType, args, {loaders}) => loaders.ofbizArray.load(`carrierShipmentMethods/find?shipmentMethodTypeId=${shipmentMethodType.shipmentMethodTypeId}`)
    },
    picklists: {
      type: new GraphQLList(PicklistType),
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (shipmentMethodType, args, {loaders}) => loaders.ofbizArray.load(`picklists/find?shipmentMethodTypeId=${shipmentMethodType.shipmentMethodTypeId}`)
    },
    productStoreVendorShipments: {
      type: new GraphQLList(ProductStoreVendorShipmentType),
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (shipmentMethodType, args, {loaders}) => loaders.ofbizArray.load(`productStoreVendorShipments/find?shipmentMethodTypeId=${shipmentMethodType.shipmentMethodTypeId}`)
    },
    productStoreShipmentMeths: {
      type: new GraphQLList(ProductStoreShipmentMethType),
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (shipmentMethodType, args, {loaders}) => loaders.ofbizArray.load(`productStoreShipmentMeths/find?shipmentMethodTypeId=${shipmentMethodType.shipmentMethodTypeId}`)
    }
  })
});

export {ShipmentMethodTypeType};
    




const ShipmentMethodTypeInputType = new GraphQLInputObjectType({
  name: 'ShipmentMethodTypeInputType',
  description: 'input type for ShipmentMethodType in shipment',

  fields: () => ({
    sequenceNum: {type: GraphQLInt},
    description: {type: GraphQLString},
    shipmentMethodTypeId: {type: GraphQLString}
  })
});

export {ShipmentMethodTypeInputType};
    