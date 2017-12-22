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
import {ProductFacilityLocationResponseType} from '../../product/ProductFacilityLocation/ProductFacilityLocationResponseType.js';
import {ProductFacilityLocationInputType} from '../../product/ProductFacilityLocation/ProductFacilityLocationInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductFacilityLocation = {
  type: ProductFacilityLocationResponseType,
  description: 'mutation for ofbiz createProductFacilityLocation method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/productFacilityLocations/add?`, null, req);
  }
};
export {createProductFacilityLocation};


const updateProductFacilityLocation = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductFacilityLocation method',
  args:{productFacilityLocationToBeUpdated: {type: ProductFacilityLocationInputType},locationSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/productFacilityLocations/${args.locationSeqId}?`, args.productFacilityLocationToBeUpdated, req);
  }
};
export {updateProductFacilityLocation};


const deleteProductFacilityLocationByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductFacilityLocationByIdUpdated method',
  args:{productFacilityLocationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/productFacilityLocations/${args.productFacilityLocationId}?`, null, req);
  }
};
export {deleteProductFacilityLocationByIdUpdated};
