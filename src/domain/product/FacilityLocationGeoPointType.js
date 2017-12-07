
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FacilityLocationType} from '../product/FacilityLocationType.js';


const FacilityLocationGeoPointType = new GraphQLObjectType({
  name: 'FacilityLocationGeoPointType',
  description: 'Type for FacilityLocationGeoPoint in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facility: {
      type: FacilityLocationType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityLocationGeoPoint, args, {loaders}) => loaders.ofbiz.load(`facilityLocations/find?facilityId=${facilityLocationGeoPoint.facilityId}`)
    },
    geoPointId: {type: GraphQLString},
    locationSeqId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FacilityLocationGeoPointType};
    