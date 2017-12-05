
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Facility} from '../product/Facility.js';
import {GeoPoint} from '../product/GeoPoint.js';


const FacilityLocation = new GraphQLObjectType({
  name: 'FacilityLocationType',
  description: 'Type for FacilityLocation in product',

  fields: () => ({
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityLocation, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?=${args.facilityId}`)
    },
    areaId: {type: GraphQLString},
    positionId: {type: GraphQLString},
    levelId: {type: GraphQLString},
    sectionId: {type: GraphQLString},
    geoPoint: {
      type: GeoPointType,
      args : {geoPointId: {type: GraphQLString}},
      resolve: (facilityLocation, args, {loaders}) => loaders.ofbizArray.load(`geoPoints/find?=${args.geoPointId}`)
    },
    locationTypeEnumId: {type: GraphQLString},
    locationSeqId: {type: GraphQLString},
    aisleId: {type: GraphQLString}
  })
});

export {FacilityLocation};
    