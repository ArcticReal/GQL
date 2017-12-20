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
import {FacilityAttributeInputType} from '../../product/FacilityAttribute/FacilityAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFacilityAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacilityAttribute method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityAttributes/add?`, null, req);
  }
};
export {createFacilityAttribute};


const updateFacilityAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFacilityAttribute method',
  args:{facilityAttributeToBeUpdated: {type: FacilityAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/facilityAttributes/${args.attrName}?`, args.facilityAttributeToBeUpdated, req);
  }
};
export {updateFacilityAttribute};


const deleteFacilityAttributeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFacilityAttributeByIdUpdated method',
  args:{facilityAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/facilityAttributes/${args.facilityAttributeId}?`, null, req);
  }
};
export {deleteFacilityAttributeByIdUpdated};
