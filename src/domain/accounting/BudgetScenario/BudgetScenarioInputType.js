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

const BudgetScenarioInputType = new GraphQLInputObjectType({
  name: 'BudgetScenarioInputType',
  description: 'input type for BudgetScenario',

  fields: () => ({
    budgetScenarioId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {BudgetScenarioInputType};
    