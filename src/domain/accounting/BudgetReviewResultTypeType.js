
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {BudgetReviewType} from '../accounting/BudgetReviewType.js';


const BudgetReviewResultTypeType = new GraphQLObjectType({
  name: 'BudgetReviewResultTypeType',
  description: 'Type for BudgetReviewResultType in accounting',

  fields: () => ({
    comments: {type: GraphQLString},
    budgetReviewResultTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    budgetReview: {
      type: new GraphQLList(BudgetReviewType),
      args : {budgetReviewResultTypeId: {type: GraphQLString}},
      resolve: (budgetReviewResultType, args, {loaders}) => loaders.ofbizArray.load(`budgetReviews/find?budgetReviewResultTypeId=${budgetReviewResultType.budgetReviewResultTypeId}`)
    }
  })
});

export {BudgetReviewResultTypeType};
    