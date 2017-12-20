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
import {ProductFeatureDataResourceInputType} from '../../product/ProductFeatureDataResource/ProductFeatureDataResourceInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductFeatureDataResource = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFeatureDataResource method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productFeatureDataResources/add?`, null, req);
  }
};
export {createProductFeatureDataResource};


const updateProductFeatureDataResource = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductFeatureDataResource method',
  args:{productFeatureDataResourceToBeUpdated: {type: ProductFeatureDataResourceInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productFeatureDataResources/${args.nullVal}?`, args.productFeatureDataResourceToBeUpdated, req);
  }
};
export {updateProductFeatureDataResource};


const deleteProductFeatureDataResourceByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductFeatureDataResourceByIdUpdated method',
  args:{productFeatureDataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productFeatureDataResources/${args.productFeatureDataResourceId}?`, null, req);
  }
};
export {deleteProductFeatureDataResourceByIdUpdated};
