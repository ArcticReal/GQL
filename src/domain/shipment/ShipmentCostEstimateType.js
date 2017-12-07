
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductStoreShipmentMethType} from '../product/ProductStoreShipmentMethType.js';
import {PartyType} from '../party/PartyType.js';
import {CarrierShipmentMethodType} from '../shipment/CarrierShipmentMethodType.js';
import {RoleTypeType} from '../party/RoleTypeType.js';
import {QuantityBreakType} from '../product/QuantityBreakType.js';


const ShipmentCostEstimateType = new GraphQLObjectType({
  name: 'ShipmentCostEstimateType',
  description: 'Type for ShipmentCostEstimate in shipment',

  fields: () => ({
    productStoreShipMeth: {
      type: ProductStoreShipmentMethType,
      args : {productStoreShipMethId: {type: GraphQLString}},
      resolve: (shipmentCostEstimate, args, {loaders}) => loaders.ofbiz.load(`productStoreShipmentMeths/find?productStoreShipMethId=${shipmentCostEstimate.productStoreShipMethId}`)
    },
    quantityUnitPrice: {type: GraphQLFloat},
    quantityUomId: {type: GraphQLString},
    featurePercent: {type: GraphQLFloat},
    featurePrice: {type: GraphQLFloat},
    weightUnitPrice: {type: GraphQLFloat},
    oversizeUnit: {type: GraphQLFloat},
    productStoreId: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (shipmentCostEstimate, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${shipmentCostEstimate.partyId}`)
    },
    productFeatureGroupId: {type: GraphQLString},
    oversizePrice: {type: GraphQLFloat},
    shipmentMethodType: {
      type: CarrierShipmentMethodType,
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (shipmentCostEstimate, args, {loaders}) => loaders.ofbiz.load(`carrierShipmentMethods/find?shipmentMethodTypeId=${shipmentCostEstimate.shipmentMethodTypeId}`)
    },
    geoIdTo: {type: GraphQLString},
    orderPricePercent: {type: GraphQLFloat},
    orderItemFlatPrice: {type: GraphQLFloat},
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (shipmentCostEstimate, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${shipmentCostEstimate.roleTypeId}`)
    },
    shippingPricePercent: {type: GraphQLFloat},
    weightBreak: {
      type: QuantityBreakType,
      args : {weightBreakId: {type: GraphQLString}},
      resolve: (shipmentCostEstimate, args, {loaders}) => loaders.ofbiz.load(`quantityBreaks/find?quantityBreakId=${shipmentCostEstimate.weightBreakId}`)
    },
    quantityBreak: {
      type: QuantityBreakType,
      args : {quantityBreakId: {type: GraphQLString}},
      resolve: (shipmentCostEstimate, args, {loaders}) => loaders.ofbiz.load(`quantityBreaks/find?quantityBreakId=${shipmentCostEstimate.quantityBreakId}`)
    },
    priceBreak: {
      type: QuantityBreakType,
      args : {priceBreakId: {type: GraphQLString}},
      resolve: (shipmentCostEstimate, args, {loaders}) => loaders.ofbiz.load(`quantityBreaks/find?quantityBreakId=${shipmentCostEstimate.priceBreakId}`)
    },
    carrierPartyId: {type: GraphQLString},
    geoIdFrom: {type: GraphQLString},
    orderFlatPrice: {type: GraphQLFloat},
    carrierRoleTypeId: {type: GraphQLString},
    weightUomId: {type: GraphQLString},
    priceUnitPrice: {type: GraphQLFloat},
    shipmentCostEstimateId: {type: GraphQLString},
    priceUomId: {type: GraphQLString}
  })
});

export {ShipmentCostEstimateType};
    