
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

import {ProductStoreShipmentMethType} from '../product/ProductStoreShipmentMeth.js';
import {PartyType} from '../party/Party.js';
import {CarrierShipmentMethodType} from '../shipment/CarrierShipmentMethod.js';
import {RoleTypeType} from '../party/RoleType.js';
import {QuantityBreakType} from '../product/QuantityBreak.js';


const ShipmentCostEstimateType = new GraphQLObjectType({
  name: 'ShipmentCostEstimateType',
  description: 'Type for ShipmentCostEstimate in shipment',

  fields: () => ({
    productStoreShipMeth: {
      type: ProductStoreShipmentMethType,
      args : {productStoreShipMethId: {type: GraphQLString}},
      resolve: (shipmentCostEstimate, args, {loaders}) => loaders.ofbiz.load(`product/product/productStoreShipmentMeths/find?productStoreShipMethId=${shipmentCostEstimate.productStoreShipMethId}`)
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
      resolve: (shipmentCostEstimate, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${shipmentCostEstimate.partyId}`)
    },
    productFeatureGroupId: {type: GraphQLString},
    oversizePrice: {type: GraphQLFloat},
    shipmentMethodType: {
      type: CarrierShipmentMethodType,
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (shipmentCostEstimate, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/carrierShipmentMethods/find?shipmentMethodTypeId=${shipmentCostEstimate.shipmentMethodTypeId}`)
    },
    geoIdTo: {type: GraphQLString},
    orderPricePercent: {type: GraphQLFloat},
    orderItemFlatPrice: {type: GraphQLFloat},
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (shipmentCostEstimate, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${shipmentCostEstimate.roleTypeId}`)
    },
    shippingPricePercent: {type: GraphQLFloat},
    weightBreak: {
      type: QuantityBreakType,
      args : {weightBreakId: {type: GraphQLString}},
      resolve: (shipmentCostEstimate, args, {loaders}) => loaders.ofbiz.load(`product/quantityBreaks/find?quantityBreakId=${shipmentCostEstimate.weightBreakId}`)
    },
    quantityBreak: {
      type: QuantityBreakType,
      args : {quantityBreakId: {type: GraphQLString}},
      resolve: (shipmentCostEstimate, args, {loaders}) => loaders.ofbiz.load(`product/quantityBreaks/find?quantityBreakId=${shipmentCostEstimate.quantityBreakId}`)
    },
    priceBreak: {
      type: QuantityBreakType,
      args : {priceBreakId: {type: GraphQLString}},
      resolve: (shipmentCostEstimate, args, {loaders}) => loaders.ofbiz.load(`product/quantityBreaks/find?quantityBreakId=${shipmentCostEstimate.priceBreakId}`)
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
    




const ShipmentCostEstimateInputType = new GraphQLInputObjectType({
  name: 'ShipmentCostEstimateInputType',
  description: 'input type for ShipmentCostEstimate',

  fields: () => ({
    carrierPartyId: {type: GraphQLString},
    carrierRoleTypeId: {type: GraphQLString},
    featurePercent: {type: GraphQLFloat},
    featurePrice: {type: GraphQLFloat},
    geoIdFrom: {type: GraphQLString},
    geoIdTo: {type: GraphQLString},
    orderFlatPrice: {type: GraphQLFloat},
    orderItemFlatPrice: {type: GraphQLFloat},
    orderPricePercent: {type: GraphQLFloat},
    oversizePrice: {type: GraphQLFloat},
    oversizeUnit: {type: GraphQLFloat},
    partyId: {type: GraphQLString},
    priceBreakId: {type: GraphQLString},
    priceUnitPrice: {type: GraphQLFloat},
    priceUomId: {type: GraphQLString},
    productFeatureGroupId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    productStoreShipMethId: {type: GraphQLString},
    quantityBreakId: {type: GraphQLString},
    quantityUnitPrice: {type: GraphQLFloat},
    quantityUomId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    shipmentCostEstimateId: {type: GraphQLString},
    shipmentMethodTypeId: {type: GraphQLString},
    shippingPricePercent: {type: GraphQLFloat},
    weightBreakId: {type: GraphQLString},
    weightUnitPrice: {type: GraphQLFloat},
    weightUomId: {type: GraphQLString}
  })
});

export {ShipmentCostEstimateInputType};
    