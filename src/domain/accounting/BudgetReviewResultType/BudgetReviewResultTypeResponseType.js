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

const BudgetReviewResultTypeResponseType = new GraphQLObjectType({
  name: 'BudgetReviewResultTypeResponseType',
  description: 'response type for BudgetReviewResultType',

  fields: () => ({
    budgetReviewResultTypeId: {type: GraphQLString},
    comments: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {BudgetReviewResultTypeResponseType};
    