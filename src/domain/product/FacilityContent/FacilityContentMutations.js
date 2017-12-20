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
import {FacilityContentInputType} from '../../product/FacilityContent/FacilityContentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFacilityContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacilityContent method',
  args:{facilityContentToBeAdded: {type: FacilityContentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityContents/add?`, args.facilityContentToBeAdded, req);
  }
};
export {createFacilityContent};


const deleteFacilityContentByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFacilityContentByIdUpdated method',
  args:{facilityContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/facilityContents/${args.facilityContentId}?`, null, req);
  }
};
export {deleteFacilityContentByIdUpdated};


const updateFacilityContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFacilityContent method',
  args:{facilityContentToBeUpdated: {type: FacilityContentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/facilityContents/${args.nullVal}?`, args.facilityContentToBeUpdated, req);
  }
};
export {updateFacilityContent};
