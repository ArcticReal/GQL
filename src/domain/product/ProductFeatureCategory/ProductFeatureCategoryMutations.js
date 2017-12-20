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
import {ProductFeatureCategoryInputType} from '../../product/ProductFeatureCategory/ProductFeatureCategoryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductFeatureCategory = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFeatureCategory method',
  args:{productFeatureCategoryToBeAdded: {type: ProductFeatureCategoryInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productFeatureCategorys/add?`, args.productFeatureCategoryToBeAdded, req);
  }
};
export {createProductFeatureCategory};


const updateProductFeatureCategory = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductFeatureCategory method',
  args:{productFeatureCategoryToBeUpdated: {type: ProductFeatureCategoryInputType},productFeatureCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productFeatureCategorys/${args.productFeatureCategoryId}?`, args.productFeatureCategoryToBeUpdated, req);
  }
};
export {updateProductFeatureCategory};


const deleteProductFeatureCategoryByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductFeatureCategoryByIdUpdated method',
  args:{productFeatureCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productFeatureCategorys/${args.productFeatureCategoryId}?`, null, req);
  }
};
export {deleteProductFeatureCategoryByIdUpdated};
