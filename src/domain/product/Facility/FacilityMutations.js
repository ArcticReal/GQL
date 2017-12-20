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
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFacility = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacility method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facilitys/add?`, null, req);
  }
};
export {createFacility};


const updateFacility = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFacility method',
  args:{facilityToBeUpdated: {type: FacilityInputType},facilityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facilitys/${args.facilityId}?`, args.facilityToBeUpdated, req);
  }
};
export {updateFacility};


const deleteFacilityByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFacilityByIdUpdated method',
  args:{facilityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facilitys/${args.facilityId}?`, null, req);
  }
};
export {deleteFacilityByIdUpdated};
