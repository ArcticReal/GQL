
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FacilityLocation} from '../product/FacilityLocation.js';
import {GeoPoint} from '../product/GeoPoint.js';


const FacilityLocationGeoPoint = new GraphQLObjectType({
  name: 'FacilityLocationGeoPointType',
  description: 'Type for FacilityLocationGeoPoint in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facility: {
      type: FacilityLocationType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityLocationGeoPoint, args, {loaders}) => loaders.ofbizArray.load(`facilityLocations/find?=${args.facilityId}`)
    },
    geoPoint: {
      type: GeoPointType,
      args : {geoPointId: {type: GraphQLString}},
      resolve: (facilityLocationGeoPoint, args, {loaders}) => loaders.ofbizArray.load(`geoPoints/find?=${args.geoPointId}`)
    },
    locationSeqId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FacilityLocationGeoPoint};
    