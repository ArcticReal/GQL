
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

import {FacilityLocationType} from '../product/FacilityLocation.js';


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
    




const FacilityLocationGeoPointInputType = new GraphQLInputObjectType({
  name: 'FacilityLocationGeoPointInputType',
  description: 'input type for FacilityLocationGeoPoint in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    locationSeqId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FacilityLocationGeoPointInputType};
    