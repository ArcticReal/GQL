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

const ShipmentCostEstimateResponseType = new GraphQLObjectType({
  name: 'ShipmentCostEstimateResponseType',
  description: 'response type for ShipmentCostEstimate',

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

export {ShipmentCostEstimateResponseType};
    