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

const BudgetScenarioRuleInputType = new GraphQLInputObjectType({
  name: 'BudgetScenarioRuleInputType',
  description: 'input type for BudgetScenarioRule',

  fields: () => ({
    amountChange: {type: GraphQLFloat},
    budgetItemTypeId: {type: GraphQLString},
    budgetScenarioId: {type: GraphQLString},
    percentageChange: {type: GraphQLFloat}
  })
});

export {BudgetScenarioRuleInputType};
    