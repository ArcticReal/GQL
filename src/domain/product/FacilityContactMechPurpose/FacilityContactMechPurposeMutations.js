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
import {FacilityContactMechPurposeResponseType} from '../../product/FacilityContactMechPurpose/FacilityContactMechPurposeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFacilityContactMechPurpose = {
  type: FacilityContactMechPurposeResponseType,
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
