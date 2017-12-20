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
import {FacilityGroupRollupInputType} from '../../product/FacilityGroupRollup/FacilityGroupRollupInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFacilityGroupRollup = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacilityGroupRollup method',
  args:{facilityGroupRollupToBeAdded: {type: FacilityGroupRollupInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityGroupRollups/add?`, args.facilityGroupRollupToBeAdded, req);
  }
};
export {createFacilityGroupRollup};


const deleteFacilityGroupRollupByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFacilityGroupRollupByIdUpdated method',
  args:{facilityGroupRollupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/facilityGroupRollups/${args.facilityGroupRollupId}?`, null, req);
  }
};
export {deleteFacilityGroupRollupByIdUpdated};


const updateFacilityGroupRollup = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFacilityGroupRollup method',
  args:{facilityGroupRollupToBeUpdated: {type: FacilityGroupRollupInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/facilityGroupRollups/${args.nullVal}?`, args.facilityGroupRollupToBeUpdated, req);
  }
};
export {updateFacilityGroupRollup};
