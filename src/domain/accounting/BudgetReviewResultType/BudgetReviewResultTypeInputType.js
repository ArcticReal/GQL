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

const BudgetReviewResultTypeInputType = new GraphQLInputObjectType({
  name: 'BudgetReviewResultTypeInputType',
  description: 'input type for BudgetReviewResultType',

  fields: () => ({
    budgetReviewResultTypeId: {type: GraphQLString},
    comments: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {BudgetReviewResultTypeInputType};
    