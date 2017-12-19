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
import {FacilityGroupTypeInputType} from '../../product/FacilityGroupType/FacilityGroupTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createFacilityGroupType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFacilityGroupType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityGroupTypes/add?`, null, req);
  }
};
export {createFacilityGroupType};


const updateFacilityGroupType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFacilityGroupType method',
  args:{facilityGroupTypeToBeUpdated: {type: FacilityGroupTypeInputType},facilityGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/facilityGroupTypes/${args.facilityGroupTypeId}?`, args.facilityGroupTypeToBeUpdated, req);
  }
};
export {updateFacilityGroupType};


const deleteFacilityGroupTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFacilityGroupTypeByIdUpdated method',
  args:{facilityGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/facilityGroupTypes/${args.facilityGroupTypeId}?`, null, req);
  }
};
export {deleteFacilityGroupTypeByIdUpdated};
