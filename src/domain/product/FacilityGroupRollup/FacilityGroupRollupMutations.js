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
import {FacilityGroupRollupResponseType} from '../../product/FacilityGroupRollup/FacilityGroupRollupResponseType.js';
import {FacilityGroupRollupInputType} from '../../product/FacilityGroupRollup/FacilityGroupRollupInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFacilityGroupRollup = {
  type: FacilityGroupRollupResponseType,
  description: 'mutation for ofbiz createFacilityGroupRollup method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityGroupRollups/add?`, null, req);
  }
};
export {createFacilityGroupRollup};


const deleteFacilityGroupRollupByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFacilityGroupRollupByIdUpdated method',
  args:{facilityGroupRollupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/facilityGroupRollups/${args.facilityGroupRollupId}?`, null, req);
  }
};
export {deleteFacilityGroupRollupByIdUpdated};


const updateFacilityGroupRollup = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFacilityGroupRollup method',
  args:{facilityGroupRollupToBeUpdated: {type: FacilityGroupRollupInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/facilityGroupRollups/${args.nullVal}?`, args.facilityGroupRollupToBeUpdated, req);
  }
};
export {updateFacilityGroupRollup};
