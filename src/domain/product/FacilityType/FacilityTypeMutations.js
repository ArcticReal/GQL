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
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFacilityType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacilityType method',
  args:{facilityTypeToBeAdded: {type: FacilityTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityTypes/add?`, args.facilityTypeToBeAdded, req);
  }
};
export {createFacilityType};


const updateFacilityType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFacilityType method',
  args:{facilityTypeToBeUpdated: {type: FacilityTypeInputType},facilityTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/facilityTypes/${args.facilityTypeId}?`, args.facilityTypeToBeUpdated, req);
  }
};
export {updateFacilityType};


const deleteFacilityTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFacilityTypeByIdUpdated method',
  args:{facilityTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/facilityTypes/${args.facilityTypeId}?`, null, req);
  }
};
export {deleteFacilityTypeByIdUpdated};
