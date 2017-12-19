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

const BudgetInputType = new GraphQLInputObjectType({
  name: 'BudgetInputType',
  description: 'input type for Budget',

  fields: () => ({
    budgetId: {type: GraphQLString},
    budgetTypeId: {type: GraphQLString},
    comments: {type: GraphQLString},
    customTimePeriodId: {type: GraphQLString}
  })
});

export {BudgetInputType};
    