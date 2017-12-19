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
import {FacilityTypeInputType} from '../../product/FacilityType/FacilityTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createFacilityType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFacilityType method',
  args:{facilityTypeToBeAdded: {type: FacilityTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityTypes/add?`, args.facilityTypeToBeAdded, req);
  }
};
export {createFacilityType};


const updateFacilityType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFacilityType method',
  args:{facilityTypeToBeUpdated: {type: FacilityTypeInputType},facilityTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/facilityTypes/${args.facilityTypeId}?`, args.facilityTypeToBeUpdated, req);
  }
};
export {updateFacilityType};


const deleteFacilityTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFacilityTypeByIdUpdated method',
  args:{facilityTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/facilityTypes/${args.facilityTypeId}?`, null, req);
  }
};
export {deleteFacilityTypeByIdUpdated};
