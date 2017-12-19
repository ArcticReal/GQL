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
import {FacilityGroupRoleInputType} from '../../product/FacilityGroupRole/FacilityGroupRoleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createFacilityGroupRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFacilityGroupRole method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityGroupRoles/add?`, null, req);
  }
};
export {createFacilityGroupRole};


const deleteFacilityGroupRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFacilityGroupRoleByIdUpdated method',
  args:{facilityGroupRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/facilityGroupRoles/${args.facilityGroupRoleId}?`, null, req);
  }
};
export {deleteFacilityGroupRoleByIdUpdated};


const updateFacilityGroupRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFacilityGroupRole method',
  args:{facilityGroupRoleToBeUpdated: {type: FacilityGroupRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/facilityGroupRoles/${args.roleTypeId}?`, args.facilityGroupRoleToBeUpdated, req);
  }
};
export {updateFacilityGroupRole};
