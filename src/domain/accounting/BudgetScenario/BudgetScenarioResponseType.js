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

const BudgetScenarioResponseType = new GraphQLObjectType({
  name: 'BudgetScenarioResponseType',
  description: 'response type for BudgetScenario',

  fields: () => ({
    budgetScenarioId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {BudgetScenarioResponseType};
    