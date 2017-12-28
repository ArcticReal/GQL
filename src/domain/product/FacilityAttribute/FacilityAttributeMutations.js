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
import {FacilityAttributeResponseType} from '../../product/FacilityAttribute/FacilityAttributeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFacilityAttribute = {
  type: FacilityAttributeResponseType,
  description: 'mutation for ofbiz createFacilityAttribute method',
  args:{facilityAttributeToBeAdded: {type: FacilityAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityAttributes/add?`, args.facilityAttributeToBeAdded, req);
  }
};
export {createFacilityAttribute};


const updateFacilityAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFacilityAttribute method',
  args:{facilityAttributeToBeUpdated: {type: FacilityAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/facilityAttributes/${args.attrName}?`, args.facilityAttributeToBeUpdated, req);
  }
};
export {updateFacilityAttribute};


const deleteFacilityAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFacilityAttributeByIdUpdated method',
  args:{facilityAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/facilityAttributes/${args.facilityAttributeId}?`, null, req);
  }
};
export {deleteFacilityAttributeByIdUpdated};
