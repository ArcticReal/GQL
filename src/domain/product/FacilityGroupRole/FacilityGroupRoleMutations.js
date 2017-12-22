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
import {FacilityGroupRoleResponseType} from '../../product/FacilityGroupRole/FacilityGroupRoleResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFacilityGroupRole = {
  type: FacilityGroupRoleResponseType,
  description: 'mutation for ofbiz createFacilityGroupRole method',
  args:{facilityGroupRoleToBeAdded: {type: FacilityGroupRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityGroupRoles/add?`, args.facilityGroupRoleToBeAdded, req);
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
