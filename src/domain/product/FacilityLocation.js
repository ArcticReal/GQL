
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

import {FacilityLocationGeoPointType} from '../product/FacilityLocationGeoPoint.js';
import {FacilityType} from '../product/Facility.js';
import {ProductFacilityLocationType} from '../product/ProductFacilityLocation.js';


const FacilityLocationType = new GraphQLObjectType({
  name: 'FacilityLocationType',
  description: 'Type for FacilityLocation in product',

  fields: () => ({
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityLocation, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${facilityLocation.facilityId}`)
    },
    areaId: {type: GraphQLString},
    positionId: {type: GraphQLString},
    levelId: {type: GraphQLString},
    sectionId: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    locationTypeEnumId: {type: GraphQLString},
    locationSeqId: {type: GraphQLString},
    aisleId: {type: GraphQLString},
    productFacilityLocations: {
      type: new GraphQLList(ProductFacilityLocationType),
      args : {},
      resolve: (facilityLocation, args, {loaders}) => loaders.ofbizArray.load(`product/facility/productFacilityLocations/find?facilityId=${facilityLocation.facilityId}`)
    },
    facilityLocationGeoPoints: {
      type: new GraphQLList(FacilityLocationGeoPointType),
      args : {},
      resolve: (facilityLocation, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityLocationGeoPoints/find?facilityId=${facilityLocation.facilityId}`)
    }
  })
});

export {FacilityLocationType};
    




const FacilityLocationInputType = new GraphQLInputObjectType({
  name: 'FacilityLocationInputType',
  description: 'input type for FacilityLocation in product',

  fields: () => ({
    facilityId: {type: GraphQLString},
    areaId: {type: GraphQLString},
    positionId: {type: GraphQLString},
    levelId: {type: GraphQLString},
    sectionId: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    locationTypeEnumId: {type: GraphQLString},
    locationSeqId: {type: GraphQLString},
    aisleId: {type: GraphQLString}
  })
});

export {FacilityLocationInputType};
    