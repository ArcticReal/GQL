
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ShipmentRouteSegmentType} from '../shipment/ShipmentRouteSegmentType.js';
import {ProductStoreShipmentMethType} from '../product/ProductStoreShipmentMethType.js';
import {CarrierShipmentMethodType} from '../shipment/CarrierShipmentMethodType.js';
import {ProductStoreVendorShipmentType} from '../product/ProductStoreVendorShipmentType.js';
import {OrderItemShipGroupType} from '../order/OrderItemShipGroupType.js';
import {FacilityCarrierShipmentType} from '../product/FacilityCarrierShipmentType.js';
import {PicklistType} from '../shipment/PicklistType.js';


const ShipmentMethodTypeType = new GraphQLObjectType({
  name: 'ShipmentMethodTypeType',
  description: 'Type for ShipmentMethodType in shipment',

  fields: () => ({
    sequenceNum: {type: GraphQLInt},
    description: {type: GraphQLString},
    shipmentMethodTypeId: {type: GraphQLString},
    facilityCarrierShipment: {
      type: new GraphQLList(FacilityCarrierShipmentType),
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (shipmentMethodType, args, {loaders}) => loaders.ofbizArray.load(`facilityCarrierShipments/find?shipmentMethodTypeId=${shipmentMethodType.shipmentMethodTypeId}`)
    },
    orderItemShipGroup: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (shipmentMethodType, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroups/find?shipmentMethodTypeId=${shipmentMethodType.shipmentMethodTypeId}`)
    },
    shipmentRouteSegment: {
      type: new GraphQLList(ShipmentRouteSegmentType),
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (shipmentMethodType, args, {loaders}) => loaders.ofbizArray.load(`shipmentRouteSegments/find?shipmentMethodTypeId=${shipmentMethodType.shipmentMethodTypeId}`)
    },
    carrierShipmentMethod: {
      type: new GraphQLList(CarrierShipmentMethodType),
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (shipmentMethodType, args, {loaders}) => loaders.ofbizArray.load(`carrierShipmentMethods/find?shipmentMethodTypeId=${shipmentMethodType.shipmentMethodTypeId}`)
    },
    picklist: {
      type: new GraphQLList(PicklistType),
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (shipmentMethodType, args, {loaders}) => loaders.ofbizArray.load(`picklists/find?shipmentMethodTypeId=${shipmentMethodType.shipmentMethodTypeId}`)
    },
    productStoreVendorShipment: {
      type: new GraphQLList(ProductStoreVendorShipmentType),
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (shipmentMethodType, args, {loaders}) => loaders.ofbizArray.load(`productStoreVendorShipments/find?shipmentMethodTypeId=${shipmentMethodType.shipmentMethodTypeId}`)
    },
    productStoreShipmentMeth: {
      type: new GraphQLList(ProductStoreShipmentMethType),
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (shipmentMethodType, args, {loaders}) => loaders.ofbizArray.load(`productStoreShipmentMeths/find?shipmentMethodTypeId=${shipmentMethodType.shipmentMethodTypeId}`)
    }
  })
});

export {ShipmentMethodTypeType};
    