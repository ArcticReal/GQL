
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

import {ProductStoreShipmentMethType} from '../../product/ProductStoreShipmentMeth/ProductStoreShipmentMethType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {CarrierShipmentMethodType} from '../../shipment/CarrierShipmentMethod/CarrierShipmentMethodType.js';
import {RoleTypeType} from '../../party/RoleType/RoleTypeType.js';
import {QuantityBreakType} from '../../product/QuantityBreak/QuantityBreakType.js';


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
    