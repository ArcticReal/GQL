
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

import {ShipmentRouteSegmentType} from '../../shipment/ShipmentRouteSegment/ShipmentRouteSegmentType.js';
import {ProductStoreShipmentMethType} from '../../product/ProductStoreShipmentMeth/ProductStoreShipmentMethType.js';
import {CarrierShipmentMethodType} from '../../shipment/CarrierShipmentMethod/CarrierShipmentMethodType.js';
import {ProductStoreVendorShipmentType} from '../../product/ProductStoreVendorShipment/ProductStoreVendorShipmentType.js';
import {OrderItemShipGroupType} from '../../order/OrderItemShipGroup/OrderItemShipGroupType.js';
import {FacilityCarrierShipmentType} from '../../product/FacilityCarrierShipment/FacilityCarrierShipmentType.js';
import {PicklistType} from '../../shipment/Picklist/PicklistType.js';


const ShipmentMethodTypeType = new GraphQLObjectType({
  name: 'ShipmentMethodTypeType',
  description: 'Type for ShipmentMethodType in shipment',

  fields: () => ({
    sequenceNum: {type: GraphQLInt},
    description: {type: GraphQLString},
    shipmentMethodTypeId: {type: GraphQLString},
    facilityCarrierShipments: {
      type: new GraphQLList(FacilityCarrierShipmentType),
      args : {},
      resolve: (shipmentMethodType, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityCarrierShipments/find?shipmentMethodTypeId=${shipmentMethodType.shipmentMethodTypeId}`)
    },
    orderItemShipGroups: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {},
      resolve: (shipmentMethodType, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemShipGroups/find?shipmentMethodTypeId=${shipmentMethodType.shipmentMethodTypeId}`)
    },
    shipmentRouteSegments: {
      type: new GraphQLList(ShipmentRouteSegmentType),
      args : {},
      resolve: (shipmentMethodType, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentRouteSegments/find?shipmentMethodTypeId=${shipmentMethodType.shipmentMethodTypeId}`)
    },
    carrierShipmentMethods: {
      type: new GraphQLList(CarrierShipmentMethodType),
      args : {},
      resolve: (shipmentMethodType, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/carrierShipmentMethods/find?shipmentMethodTypeId=${shipmentMethodType.shipmentMethodTypeId}`)
    },
    picklists: {
      type: new GraphQLList(PicklistType),
      args : {},
      resolve: (shipmentMethodType, args, {loaders}) => loaders.ofbizArray.load(`shipment/picklists/find?shipmentMethodTypeId=${shipmentMethodType.shipmentMethodTypeId}`)
    },
    productStoreVendorShipments: {
      type: new GraphQLList(ProductStoreVendorShipmentType),
      args : {},
      resolve: (shipmentMethodType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreVendorShipments/find?shipmentMethodTypeId=${shipmentMethodType.shipmentMethodTypeId}`)
    },
    productStoreShipmentMeths: {
      type: new GraphQLList(ProductStoreShipmentMethType),
      args : {},
      resolve: (shipmentMethodType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreShipmentMeths/find?shipmentMethodTypeId=${shipmentMethodType.shipmentMethodTypeId}`)
    }
  })
});

export {ShipmentMethodTypeType};
    