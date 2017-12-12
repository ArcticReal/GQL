
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

import {BudgetReviewType} from '../accounting/BudgetReview.js';


const BudgetReviewResultTypeType = new GraphQLObjectType({
  name: 'BudgetReviewResultTypeType',
  description: 'Type for BudgetReviewResultType in accounting',

  fields: () => ({
    comments: {type: GraphQLString},
    budgetReviewResultTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    budgetReviews: {
      type: new GraphQLList(BudgetReviewType),
      args : {},
      resolve: (budgetReviewResultType, args, {loaders}) => loaders.ofbizArray.load(`accounting/budget/budgetReviews/find?budgetReviewResultTypeId=${budgetReviewResultType.budgetReviewResultTypeId}`)
    }
  })
});

export {BudgetReviewResultTypeType};
    




const BudgetReviewResultTypeInputType = new GraphQLInputObjectType({
  name: 'BudgetReviewResultTypeInputType',
  description: 'input type for BudgetReviewResultType in accounting',

  fields: () => ({
    comments: {type: GraphQLString},
    budgetReviewResultTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {BudgetReviewResultTypeInputType};
    