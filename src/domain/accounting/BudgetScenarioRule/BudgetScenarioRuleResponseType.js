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

const BudgetScenarioRuleResponseType = new GraphQLObjectType({
  name: 'BudgetScenarioRuleResponseType',
  description: 'response type for BudgetScenarioRule',

  fields: () => ({
    amountChange: {type: GraphQLFloat},
    budgetItemTypeId: {type: GraphQLString},
    budgetScenarioId: {type: GraphQLString},
    percentageChange: {type: GraphQLFloat}
  })
});

export {BudgetScenarioRuleResponseType};
    