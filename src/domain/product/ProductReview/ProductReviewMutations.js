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
import {ProductReviewResponseType} from '../../product/ProductReview/ProductReviewResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductReview = {
  type: ProductReviewResponseType,
  description: 'mutation for ofbiz createProductReview method',
  args:{productReviewToBeAdded: {type: ProductReviewInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productReviews/add?`, args.productReviewToBeAdded, req);
  }
};
export {createProductReview};


const updateProductReview = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductReview method',
  args:{productReviewToBeUpdated: {type: ProductReviewInputType},productReviewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productReviews/${args.productReviewId}?`, args.productReviewToBeUpdated, req);
  }
};
export {updateProductReview};


const deleteProductReviewByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductReviewByIdUpdated method',
  args:{productReviewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productReviews/${args.productReviewId}?`, null, req);
  }
};
export {deleteProductReviewByIdUpdated};
