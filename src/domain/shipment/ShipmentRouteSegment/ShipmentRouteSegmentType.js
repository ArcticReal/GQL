
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

import {PostalAddressType} from '../../party/PostalAddress/PostalAddressType.js';
import {ShipmentPackageRouteSegType} from '../../shipment/ShipmentPackageRouteSeg/ShipmentPackageRouteSegType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {ShipmentMethodTypeType} from '../../shipment/ShipmentMethodType/ShipmentMethodTypeType.js';
import {TelecomNumberType} from '../../party/TelecomNumber/TelecomNumberType.js';
import {ShipmentType} from '../../shipment/Shipment/ShipmentType.js';
import {DeliveryType} from '../../shipment/Delivery/DeliveryType.js';
import {FacilityType} from '../../product/Facility/FacilityType.js';


const ShipmentRouteSegmentType = new GraphQLObjectType({
  name: 'ShipmentRouteSegmentType',
  description: 'Type for ShipmentRouteSegment in shipment',

  fields: () => ({
    actualOtherCost: {type: GraphQLFloat},
    carrierDeliveryZone: {type: GraphQLString},
    thirdPartyPostalCode: {type: GraphQLString},
    destTelecomNumber: {
      type: TelecomNumberType,
      args : {destTelecomNumberId: {type: GraphQLString}},
      resolve: (shipmentRouteSegment, args, {loaders}) => loaders.ofbiz.load(`party/telecomNumbers/find?contactMechId=${shipmentRouteSegment.destTelecomNumberId}`)
    },
    carrierRestrictionCodes: {type: GraphQLString},
    trackingIdNumber: {type: GraphQLString},
    delivery: {
      type: DeliveryType,
      args : {deliveryId: {type: GraphQLString}},
      resolve: (shipmentRouteSegment, args, {loaders}) => loaders.ofbiz.load(`shipment/deliverys/find?deliveryId=${shipmentRouteSegment.deliveryId}`)
    },
    carrierServiceStatusId: {type: GraphQLString},
    actualStartDate: {type: GraphQLString},
    trackingDigest: {type: GraphQLString},
    shipmentMethodType: {
      type: ShipmentMethodTypeType,
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (shipmentRouteSegment, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentMethodTypes/find?shipmentMethodTypeId=${shipmentRouteSegment.shipmentMethodTypeId}`)
    },
    actualCost: {type: GraphQLFloat},
    upsHighValueReport: {type: GraphQLString/*this was a byte Array TODO find a solution*/},
    actualArrivalDate: {type: GraphQLString},
    actualServiceCost: {type: GraphQLFloat},
    originContactMech: {
      type: PostalAddressType,
      args : {originContactMechId: {type: GraphQLString}},
      resolve: (shipmentRouteSegment, args, {loaders}) => loaders.ofbiz.load(`party/postalAddresss/find?contactMechId=${shipmentRouteSegment.originContactMechId}`)
    },
    estimatedStartDate: {type: GraphQLString},
    carrierRestrictionDesc: {type: GraphQLString},
    actualTransportCost: {type: GraphQLFloat},
    billingWeightUomId: {type: GraphQLString},
    homeDeliveryDate: {type: GraphQLString},
    originFacility: {
      type: FacilityType,
      args : {originFacilityId: {type: GraphQLString}},
      resolve: (shipmentRouteSegment, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${shipmentRouteSegment.originFacilityId}`)
    },
    shipmentRouteSegmentId: {type: GraphQLString},
    destFacility: {
      type: FacilityType,
      args : {destFacilityId: {type: GraphQLString}},
      resolve: (shipmentRouteSegment, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${shipmentRouteSegment.destFacilityId}`)
    },
    carrierParty: {
      type: PartyType,
      args : {carrierPartyId: {type: GraphQLString}},
      resolve: (shipmentRouteSegment, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${shipmentRouteSegment.carrierPartyId}`)
    },
    lastUpdatedDate: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    billingWeight: {type: GraphQLFloat},
    shipment: {
      type: ShipmentType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentRouteSegment, args, {loaders}) => loaders.ofbiz.load(`/shipments/find?shipmentId=${shipmentRouteSegment.shipmentId}`)
    },
    originTelecomNumber: {
      type: TelecomNumberType,
      args : {originTelecomNumberId: {type: GraphQLString}},
      resolve: (shipmentRouteSegment, args, {loaders}) => loaders.ofbiz.load(`party/telecomNumbers/find?contactMechId=${shipmentRouteSegment.originTelecomNumberId}`)
    },
    thirdPartyCountryGeoCode: {type: GraphQLString},
    destContactMech: {
      type: PostalAddressType,
      args : {destContactMechId: {type: GraphQLString}},
      resolve: (shipmentRouteSegment, args, {loaders}) => loaders.ofbiz.load(`party/postalAddresss/find?contactMechId=${shipmentRouteSegment.destContactMechId}`)
    },
    estimatedArrivalDate: {type: GraphQLString},
    homeDeliveryType: {type: GraphQLString},
    thirdPartyAccountNumber: {type: GraphQLString},
    updatedByUserLoginId: {type: GraphQLString},
    shipmentPackageRouteSegs: {
      type: new GraphQLList(ShipmentPackageRouteSegType),
      args : {},
      resolve: (shipmentRouteSegment, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentPackageRouteSegs/find?shipmentId=${shipmentRouteSegment.shipmentId}`)
    }
  })
});

export {ShipmentRouteSegmentType};
    