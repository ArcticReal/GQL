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


const createProductFeature = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductFeature method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productFeatures/add?`, null, req);
  }
};
export {createProductFeature};


const updateProductFeature = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductFeature method',
  args:{productFeatureToBeUpdated: {type: ProductFeatureInputType},productFeatureId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productFeatures/${args.productFeatureId}?`, args.productFeatureToBeUpdated, req);
  }
};
export {updateProductFeature};


const deleteProductFeatureByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductFeatureByIdUpdated method',
  args:{productFeatureId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productFeatures/${args.productFeatureId}?`, null, req);
  }
};
export {deleteProductFeatureByIdUpdated};
