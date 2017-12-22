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
import {FacilityGroupInputType} from '../../product/FacilityGroup/FacilityGroupInputType.js';
import {FacilityGroupResponseType} from '../../product/FacilityGroup/FacilityGroupResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFacilityGroup = {
  type: FacilityGroupResponseType,
  description: 'mutation for ofbiz createFacilityGroup method',
  args:{facilityGroupToBeAdded: {type: FacilityGroupInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityGroups/add?`, args.facilityGroupToBeAdded, req);
  }
};
export {createFacilityGroup};


const updateFacilityGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFacilityGroup method',
  args:{facilityGroupToBeUpdated: {type: FacilityGroupInputType},facilityGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/facilityGroups/${args.facilityGroupId}?`, args.facilityGroupToBeUpdated, req);
  }
};
export {updateFacilityGroup};


const deleteFacilityGroupByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFacilityGroupByIdUpdated method',
  args:{facilityGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/facilityGroups/${args.facilityGroupId}?`, null, req);
  }
};
export {deleteFacilityGroupByIdUpdated};
