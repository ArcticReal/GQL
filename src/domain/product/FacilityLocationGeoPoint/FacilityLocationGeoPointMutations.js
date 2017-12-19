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
import {FacilityLocationGeoPointInputType} from '../../product/FacilityLocationGeoPoint/FacilityLocationGeoPointInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createFacilityLocationGeoPoint = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFacilityLocationGeoPoint method',
  args:{facilityLocationGeoPointToBeAdded: {type: FacilityLocationGeoPointInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityLocationGeoPoints/add?`, args.facilityLocationGeoPointToBeAdded, req);
  }
};
export {createFacilityLocationGeoPoint};


const deleteFacilityLocationGeoPointByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFacilityLocationGeoPointByIdUpdated method',
  args:{facilityLocationGeoPointId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/facilityLocationGeoPoints/${args.facilityLocationGeoPointId}?`, null, req);
  }
};
export {deleteFacilityLocationGeoPointByIdUpdated};


const updateFacilityLocationGeoPoint = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFacilityLocationGeoPoint method',
  args:{facilityLocationGeoPointToBeUpdated: {type: FacilityLocationGeoPointInputType},locationSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/facilityLocationGeoPoints/${args.locationSeqId}?`, args.facilityLocationGeoPointToBeUpdated, req);
  }
};
export {updateFacilityLocationGeoPoint};
