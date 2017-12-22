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
import {FacilityGroupTypeResponseType} from '../../product/FacilityGroupType/FacilityGroupTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFacilityGroupType = {
  type: FacilityGroupTypeResponseType,
  description: 'mutation for ofbiz createFacilityGroupType method',
  args:{facilityGroupTypeToBeAdded: {type: FacilityGroupTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityGroupTypes/add?`, args.facilityGroupTypeToBeAdded, req);
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
