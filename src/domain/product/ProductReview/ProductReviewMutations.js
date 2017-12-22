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
import {ProductReviewResponseType} from '../../product/ProductReview/ProductReviewResponseType.js';
import {ProductReviewInputType} from '../../product/ProductReview/ProductReviewInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductReview = {
  type: ProductReviewResponseType,
  description: 'mutation for ofbiz createProductReview method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productReviews/add?`, null, req);
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
