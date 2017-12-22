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
import {FacilityContactMechInputType} from '../../product/FacilityContactMech/FacilityContactMechInputType.js';
import {FacilityContactMechResponseType} from '../../product/FacilityContactMech/FacilityContactMechResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFacilityContactMech = {
  type: FacilityContactMechResponseType,
  description: 'mutation for ofbiz createFacilityContactMech method',
  args:{facilityContactMechToBeAdded: {type: FacilityContactMechInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityContactMechs/add?`, args.facilityContactMechToBeAdded, req);
  }
};
export {createFacilityContactMech};


const deleteFacilityContactMechByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFacilityContactMechByIdUpdated method',
  args:{facilityContactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/facilityContactMechs/${args.facilityContactMechId}?`, null, req);
  }
};
export {deleteFacilityContactMechByIdUpdated};


const updateFacilityContactMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFacilityContactMech method',
  args:{facilityContactMechToBeUpdated: {type: FacilityContactMechInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/facilityContactMechs/${args.nullVal}?`, args.facilityContactMechToBeUpdated, req);
  }
};
export {updateFacilityContactMech};
