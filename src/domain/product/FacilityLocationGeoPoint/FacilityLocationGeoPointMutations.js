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
import {FacilityLocationGeoPointResponseType} from '../../product/FacilityLocationGeoPoint/FacilityLocationGeoPointResponseType.js';
import {FacilityLocationGeoPointInputType} from '../../product/FacilityLocationGeoPoint/FacilityLocationGeoPointInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFacilityLocationGeoPoint = {
  type: FacilityLocationGeoPointResponseType,
  description: 'mutation for ofbiz createFacilityLocationGeoPoint method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityLocationGeoPoints/add?`, null, req);
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
