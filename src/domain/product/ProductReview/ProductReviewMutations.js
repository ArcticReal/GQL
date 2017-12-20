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
import {ProductReviewInputType} from '../../product/ProductReview/ProductReviewInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductReview = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductReview method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productReviews/add?`, null, req);
  }
};
export {createProductReview};


const updateProductReview = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductReview method',
  args:{productReviewToBeUpdated: {type: ProductReviewInputType},productReviewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productReviews/${args.productReviewId}?`, args.productReviewToBeUpdated, req);
  }
};
export {updateProductReview};


const deleteProductReviewByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductReviewByIdUpdated method',
  args:{productReviewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productReviews/${args.productReviewId}?`, null, req);
  }
};
export {deleteProductReviewByIdUpdated};
