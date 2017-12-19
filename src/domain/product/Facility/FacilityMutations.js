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
import {FacilityInputType} from '../../product/Facility/FacilityInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createFacility = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFacility method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facilitys/add?`, null, req);
  }
};
export {createFacility};


const updateFacility = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFacility method',
  args:{facilityToBeUpdated: {type: FacilityInputType},facilityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facilitys/${args.facilityId}?`, args.facilityToBeUpdated, req);
  }
};
export {updateFacility};


const deleteFacilityByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFacilityByIdUpdated method',
  args:{facilityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facilitys/${args.facilityId}?`, null, req);
  }
};
export {deleteFacilityByIdUpdated};
