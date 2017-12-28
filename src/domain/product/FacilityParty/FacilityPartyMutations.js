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
import {FacilityPartyInputType} from '../../product/FacilityParty/FacilityPartyInputType.js';
import {FacilityPartyResponseType} from '../../product/FacilityParty/FacilityPartyResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFacilityParty = {
  type: FacilityPartyResponseType,
  description: 'mutation for ofbiz createFacilityParty method',
  args:{facilityPartyToBeAdded: {type: FacilityPartyInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityPartys/add?`, args.facilityPartyToBeAdded, req);
  }
};
export {createFacilityParty};


const deleteFacilityPartyByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFacilityPartyByIdUpdated method',
  args:{facilityPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/facilityPartys/${args.facilityPartyId}?`, null, req);
  }
};
export {deleteFacilityPartyByIdUpdated};


const updateFacilityParty = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFacilityParty method',
  args:{facilityPartyToBeUpdated: {type: FacilityPartyInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/facilityPartys/${args.nullVal}?`, args.facilityPartyToBeUpdated, req);
  }
};
export {updateFacilityParty};
