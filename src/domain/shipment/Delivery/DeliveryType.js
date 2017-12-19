
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
import {FacilityType} from '../../product/Facility/FacilityType.js';
import {FixedAssetType} from '../../accounting/FixedAsset/FixedAssetType.js';


const DeliveryType = new GraphQLObjectType({
  name: 'DeliveryType',
  description: 'Type for Delivery in shipment',

  fields: () => ({
    originFacility: {
      type: FacilityType,
      args : {originFacilityId: {type: GraphQLString}},
      resolve: (delivery, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${delivery.originFacilityId}`)
    },
    destFacility: {
      type: FacilityType,
      args : {destFacilityId: {type: GraphQLString}},
      resolve: (delivery, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${delivery.destFacilityId}`)
    },
    actualArrivalDate: {type: GraphQLString},
    deliveryId: {type: GraphQLString},
    estimatedStartDate: {type: GraphQLString},
    fuelUsed: {type: GraphQLFloat},
    actualStartDate: {type: GraphQLString},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (delivery, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAssets/find?fixedAssetId=${delivery.fixedAssetId}`)
    },
    startMileage: {type: GraphQLFloat},
    estimatedArrivalDate: {type: GraphQLString},
    endMileage: {type: GraphQLFloat},
    shipmentRouteSegments: {
      type: new GraphQLList(ShipmentRouteSegmentType),
      args : {},
      resolve: (delivery, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentRouteSegments/find?deliveryId=${delivery.deliveryId}`)
    }
  })
});

export {DeliveryType};
    