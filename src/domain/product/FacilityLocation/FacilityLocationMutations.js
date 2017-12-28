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
import {FacilityLocationInputType} from '../../product/FacilityLocation/FacilityLocationInputType.js';
import {FacilityLocationResponseType} from '../../product/FacilityLocation/FacilityLocationResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFacilityLocation = {
  type: FacilityLocationResponseType,
  description: 'mutation for ofbiz createFacilityLocation method',
  args:{facilityLocationToBeAdded: {type: FacilityLocationInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityLocations/add?`, args.facilityLocationToBeAdded, req);
  }
};
export {createFacilityLocation};


const deleteFacilityLocationByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFacilityLocationByIdUpdated method',
  args:{facilityLocationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/facilityLocations/${args.facilityLocationId}?`, null, req);
  }
};
export {deleteFacilityLocationByIdUpdated};


const updateFacilityLocation = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFacilityLocation method',
  args:{facilityLocationToBeUpdated: {type: FacilityLocationInputType},locationSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/facilityLocations/${args.locationSeqId}?`, args.facilityLocationToBeUpdated, req);
  }
};
export {updateFacilityLocation};
