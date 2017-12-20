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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFacilityLocation = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacilityLocation method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityLocations/add?`, null, req);
  }
};
export {createFacilityLocation};


const deleteFacilityLocationByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFacilityLocationByIdUpdated method',
  args:{facilityLocationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/facilityLocations/${args.facilityLocationId}?`, null, req);
  }
};
export {deleteFacilityLocationByIdUpdated};


const updateFacilityLocation = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFacilityLocation method',
  args:{facilityLocationToBeUpdated: {type: FacilityLocationInputType},locationSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/facilityLocations/${args.locationSeqId}?`, args.facilityLocationToBeUpdated, req);
  }
};
export {updateFacilityLocation};
