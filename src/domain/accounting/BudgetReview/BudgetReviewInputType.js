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

const BudgetReviewInputType = new GraphQLInputObjectType({
  name: 'BudgetReviewInputType',
  description: 'input type for BudgetReview',

  fields: () => ({
    budgetId: {type: GraphQLString},
    budgetReviewId: {type: GraphQLString},
    budgetReviewResultTypeId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    reviewDate: {type: GraphQLString}
  })
});

export {BudgetReviewInputType};
    