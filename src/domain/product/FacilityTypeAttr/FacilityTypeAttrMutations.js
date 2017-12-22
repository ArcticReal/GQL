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
import {FacilityTypeAttrResponseType} from '../../product/FacilityTypeAttr/FacilityTypeAttrResponseType.js';
import {FacilityTypeAttrInputType} from '../../product/FacilityTypeAttr/FacilityTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFacilityTypeAttr = {
  type: FacilityTypeAttrResponseType,
  description: 'mutation for ofbiz createFacilityTypeAttr method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityTypeAttrs/add?`, null, req);
  }
};
export {createFacilityTypeAttr};


const updateFacilityTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFacilityTypeAttr method',
  args:{facilityTypeAttrToBeUpdated: {type: FacilityTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/facilityTypeAttrs/${args.attrName}?`, args.facilityTypeAttrToBeUpdated, req);
  }
};
export {updateFacilityTypeAttr};


const deleteFacilityTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFacilityTypeAttrByIdUpdated method',
  args:{facilityTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/facilityTypeAttrs/${args.facilityTypeAttrId}?`, null, req);
  }
};
export {deleteFacilityTypeAttrByIdUpdated};
