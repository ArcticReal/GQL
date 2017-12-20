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
import {ProductFacilityLocationInputType} from '../../product/ProductFacilityLocation/ProductFacilityLocationInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductFacilityLocation = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFacilityLocation method',
  args:{productFacilityLocationToBeAdded: {type: ProductFacilityLocationInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/productFacilityLocations/add?`, args.productFacilityLocationToBeAdded, req);
  }
};
export {createProductFacilityLocation};


const updateProductFacilityLocation = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductFacilityLocation method',
  args:{productFacilityLocationToBeUpdated: {type: ProductFacilityLocationInputType},locationSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/productFacilityLocations/${args.locationSeqId}?`, args.productFacilityLocationToBeUpdated, req);
  }
};
export {updateProductFacilityLocation};


const deleteProductFacilityLocationByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductFacilityLocationByIdUpdated method',
  args:{productFacilityLocationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/productFacilityLocations/${args.productFacilityLocationId}?`, null, req);
  }
};
export {deleteProductFacilityLocationByIdUpdated};
