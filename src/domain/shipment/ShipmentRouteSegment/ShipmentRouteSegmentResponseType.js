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

const ShipmentRouteSegmentResponseType = new GraphQLObjectType({
  name: 'ShipmentRouteSegmentResponseType',
  description: 'response type for ShipmentRouteSegment',

  fields: () => ({
    actualArrivalDate: {type: GraphQLString},
    actualCost: {type: GraphQLFloat},
    actualOtherCost: {type: GraphQLFloat},
    actualServiceCost: {type: GraphQLFloat},
    actualStartDate: {type: GraphQLString},
    actualTransportCost: {type: GraphQLFloat},
    billingWeight: {type: GraphQLFloat},
    billingWeightUomId: {type: GraphQLString},
    carrierDeliveryZone: {type: GraphQLString},
    carrierPartyId: {type: GraphQLString},
    carrierRestrictionCodes: {type: GraphQLString},
    carrierRestrictionDesc: {type: GraphQLString},
    carrierServiceStatusId: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    deliveryId: {type: GraphQLString},
    destContactMechId: {type: GraphQLString},
    destFacilityId: {type: GraphQLString},
    destTelecomNumberId: {type: GraphQLString},
    estimatedArrivalDate: {type: GraphQLString},
    estimatedStartDate: {type: GraphQLString},
    homeDeliveryDate: {type: GraphQLString},
    homeDeliveryType: {type: GraphQLString},
    lastUpdatedDate: {type: GraphQLString},
    originContactMechId: {type: GraphQLString},
    originFacilityId: {type: GraphQLString},
    originTelecomNumberId: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    shipmentMethodTypeId: {type: GraphQLString},
    shipmentRouteSegmentId: {type: GraphQLString},
    thirdPartyAccountNumber: {type: GraphQLString},
    thirdPartyCountryGeoCode: {type: GraphQLString},
    thirdPartyPostalCode: {type: GraphQLString},
    trackingDigest: {type: GraphQLString},
    trackingIdNumber: {type: GraphQLString},
    updatedByUserLoginId: {type: GraphQLString},
    upsHighValueReport: {type: new GraphQLList(GraphQLString)}
  })
});

export {ShipmentRouteSegmentResponseType};
    