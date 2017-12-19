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
import {BudgetReviewInputType} from '../../accounting/BudgetReview/BudgetReviewInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createBudgetReview = {
  type: GraphQLString,
  description: 'mutation for ofbiz createBudgetReview method',
  args:{budgetReviewToBeAdded: {type: BudgetReviewInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/budgetReviews/add?`, args.budgetReviewToBeAdded, req);
  }
};
export {createBudgetReview};


const updateBudgetReview = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBudgetReview method',
  args:{budgetReviewToBeUpdated: {type: BudgetReviewInputType},budgetReviewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budget/budgetReviews/${args.budgetReviewId}?`, args.budgetReviewToBeUpdated, req);
  }
};
export {updateBudgetReview};


const deleteBudgetReviewByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBudgetReviewByIdUpdated method',
  args:{budgetReviewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budget/budgetReviews/${args.budgetReviewId}?`, null, req);
  }
};
export {deleteBudgetReviewByIdUpdated};
