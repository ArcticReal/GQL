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
import {ProductFeatureResponseType} from '../../product/ProductFeature/ProductFeatureResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductFeature = {
  type: ProductFeatureResponseType,
  description: 'mutation for ofbiz createProductFeature method',
  args:{productFeatureToBeAdded: {type: ProductFeatureInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productFeatures/add?`, args.productFeatureToBeAdded, req);
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
