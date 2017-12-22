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

const BudgetResponseType = new GraphQLObjectType({
  name: 'BudgetResponseType',
  description: 'response type for Budget',

  fields: () => ({
    budgetId: {type: GraphQLString},
    budgetTypeId: {type: GraphQLString},
    comments: {type: GraphQLString},
    customTimePeriodId: {type: GraphQLString}
  })
});

export {BudgetResponseType};
    