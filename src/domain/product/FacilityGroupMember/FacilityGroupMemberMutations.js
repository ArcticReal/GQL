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
import {FacilityGroupMemberInputType} from '../../product/FacilityGroupMember/FacilityGroupMemberInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFacilityGroupMember = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacilityGroupMember method',
  args:{facilityGroupMemberToBeAdded: {type: FacilityGroupMemberInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityGroupMembers/add?`, args.facilityGroupMemberToBeAdded, req);
  }
};
export {createFacilityGroupMember};


const deleteFacilityGroupMemberByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFacilityGroupMemberByIdUpdated method',
  args:{facilityGroupMemberId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/facilityGroupMembers/${args.facilityGroupMemberId}?`, null, req);
  }
};
export {deleteFacilityGroupMemberByIdUpdated};


const updateFacilityGroupMember = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFacilityGroupMember method',
  args:{facilityGroupMemberToBeUpdated: {type: FacilityGroupMemberInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/facilityGroupMembers/${args.nullVal}?`, args.facilityGroupMemberToBeUpdated, req);
  }
};
export {updateFacilityGroupMember};
