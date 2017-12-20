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
import {ProductFeatureInputType} from '../../product/ProductFeature/ProductFeatureInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductFeature = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFeature method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productFeatures/add?`, null, req);
  }
};
export {createProductFeature};


const updateProductFeature = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductFeature method',
  args:{productFeatureToBeUpdated: {type: ProductFeatureInputType},productFeatureId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productFeatures/${args.productFeatureId}?`, args.productFeatureToBeUpdated, req);
  }
};
export {updateProductFeature};


const deleteProductFeatureByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductFeatureByIdUpdated method',
  args:{productFeatureId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productFeatures/${args.productFeatureId}?`, null, req);
  }
};
export {deleteProductFeatureByIdUpdated};
