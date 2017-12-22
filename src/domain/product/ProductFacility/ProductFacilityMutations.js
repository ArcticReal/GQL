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
import {ProductFacilityResponseType} from '../../product/ProductFacility/ProductFacilityResponseType.js';
import {ProductFacilityInputType} from '../../product/ProductFacility/ProductFacilityInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductFacility = {
  type: ProductFacilityResponseType,
  description: 'mutation for ofbiz createProductFacility method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/productFacilitys/add?`, null, req);
  }
};
export {createProductFacility};


const updateProductFacility = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductFacility method',
  args:{productFacilityToBeUpdated: {type: ProductFacilityInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/productFacilitys/${args.nullVal}?`, args.productFacilityToBeUpdated, req);
  }
};
export {updateProductFacility};


const deleteProductFacilityByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductFacilityByIdUpdated method',
  args:{productFacilityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/productFacilitys/${args.productFacilityId}?`, null, req);
  }
};
export {deleteProductFacilityByIdUpdated};
