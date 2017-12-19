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
import {FacilityContactMechPurposeInputType} from '../../product/FacilityContactMechPurpose/FacilityContactMechPurposeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createFacilityContactMechPurpose = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFacilityContactMechPurpose method',
  args:{facilityContactMechPurposeToBeAdded: {type: FacilityContactMechPurposeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityContactMechPurposes/add?`, args.facilityContactMechPurposeToBeAdded, req);
  }
};
export {createFacilityContactMechPurpose};


const deleteFacilityContactMechPurposeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFacilityContactMechPurposeByIdUpdated method',
  args:{facilityContactMechPurposeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/facilityContactMechPurposes/${args.facilityContactMechPurposeId}?`, null, req);
  }
};
export {deleteFacilityContactMechPurposeByIdUpdated};


const updateFacilityContactMechPurpose = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFacilityContactMechPurpose method',
  args:{facilityContactMechPurposeToBeUpdated: {type: FacilityContactMechPurposeInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/facilityContactMechPurposes/${args.nullVal}?`, args.facilityContactMechPurposeToBeUpdated, req);
  }
};
export {updateFacilityContactMechPurpose};
