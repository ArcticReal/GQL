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

const BudgetStatusResponseType = new GraphQLObjectType({
  name: 'BudgetStatusResponseType',
  description: 'response type for BudgetStatus',

  fields: () => ({
    budgetId: {type: GraphQLString},
    changeByUserLoginId: {type: GraphQLString},
    comments: {type: GraphQLString},
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {BudgetStatusResponseType};
    