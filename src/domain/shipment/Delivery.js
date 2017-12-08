
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
import {FacilityType} from '../product/Facility.js';
import {FixedAssetType} from '../accounting/FixedAsset.js';


const DeliveryType = new GraphQLObjectType({
  name: 'DeliveryType',
  description: 'Type for Delivery in shipment',

  fields: () => ({
    originFacility: {
      type: FacilityType,
      args : {originFacilityId: {type: GraphQLString}},
      resolve: (delivery, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${delivery.originFacilityId}`)
    },
    destFacility: {
      type: FacilityType,
      args : {destFacilityId: {type: GraphQLString}},
      resolve: (delivery, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${delivery.destFacilityId}`)
    },
    actualArrivalDate: {type: GraphQLString},
    deliveryId: {type: GraphQLString},
    estimatedStartDate: {type: GraphQLString},
    fuelUsed: {type: GraphQLFloat},
    actualStartDate: {type: GraphQLString},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (delivery, args, {loaders}) => loaders.ofbiz.load(`fixedAssets/find?fixedAssetId=${delivery.fixedAssetId}`)
    },
    startMileage: {type: GraphQLFloat},
    estimatedArrivalDate: {type: GraphQLString},
    endMileage: {type: GraphQLFloat},
    shipmentRouteSegments: {
      type: new GraphQLList(ShipmentRouteSegmentType),
      args : {deliveryId: {type: GraphQLString}},
      resolve: (delivery, args, {loaders}) => loaders.ofbizArray.load(`shipmentRouteSegments/find?deliveryId=${delivery.deliveryId}`)
    }
  })
});

export {DeliveryType};
    




const DeliveryInputType = new GraphQLInputObjectType({
  name: 'DeliveryInputType',
  description: 'input type for Delivery in shipment',

  fields: () => ({
    originFacilityId: {type: GraphQLString},
    destFacilityId: {type: GraphQLString},
    actualArrivalDate: {type: GraphQLString},
    deliveryId: {type: GraphQLString},
    estimatedStartDate: {type: GraphQLString},
    fuelUsed: {type: GraphQLFloat},
    actualStartDate: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    startMileage: {type: GraphQLFloat},
    estimatedArrivalDate: {type: GraphQLString},
    endMileage: {type: GraphQLFloat}
  })
});

export {DeliveryInputType};
    