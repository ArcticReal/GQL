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

const BudgetReviewResponseType = new GraphQLObjectType({
  name: 'BudgetReviewResponseType',
  description: 'response type for BudgetReview',

  fields: () => ({
    budgetId: {type: GraphQLString},
    budgetReviewId: {type: GraphQLString},
    budgetReviewResultTypeId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    reviewDate: {type: GraphQLString}
  })
});

export {BudgetReviewResponseType};
    