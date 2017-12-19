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
import {BudgetReviewResultTypeInputType} from '../../accounting/BudgetReviewResultType/BudgetReviewResultTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createBudgetReviewResultType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createBudgetReviewResultType method',
  args:{budgetReviewResultTypeToBeAdded: {type: BudgetReviewResultTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/budgetReviewResultTypes/add?`, args.budgetReviewResultTypeToBeAdded, req);
  }
};
export {createBudgetReviewResultType};


const updateBudgetReviewResultType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBudgetReviewResultType method',
  args:{budgetReviewResultTypeToBeUpdated: {type: BudgetReviewResultTypeInputType},budgetReviewResultTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budget/budgetReviewResultTypes/${args.budgetReviewResultTypeId}?`, args.budgetReviewResultTypeToBeUpdated, req);
  }
};
export {updateBudgetReviewResultType};


const deleteBudgetReviewResultTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBudgetReviewResultTypeByIdUpdated method',
  args:{budgetReviewResultTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budget/budgetReviewResultTypes/${args.budgetReviewResultTypeId}?`, null, req);
  }
};
export {deleteBudgetReviewResultTypeByIdUpdated};
