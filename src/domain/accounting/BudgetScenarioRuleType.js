
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {BudgetScenarioType} from '../accounting/BudgetScenarioType.js';
import {BudgetItemTypeType} from '../accounting/BudgetItemTypeType.js';


const BudgetScenarioRuleType = new GraphQLObjectType({
  name: 'BudgetScenarioRuleType',
  description: 'Type for BudgetScenarioRule in accounting',

  fields: () => ({
    amountChange: {type: GraphQLFloat},
    percentageChange: {type: GraphQLFloat},
    budgetScenario: {
      type: BudgetScenarioType,
      args : {budgetScenarioId: {type: GraphQLString}},
      resolve: (budgetScenarioRule, args, {loaders}) => loaders.ofbiz.load(`budgetScenarios/find?budgetScenarioId=${budgetScenarioRule.budgetScenarioId}`)
    },
    budgetItemType: {
      type: BudgetItemTypeType,
      args : {budgetItemTypeId: {type: GraphQLString}},
      resolve: (budgetScenarioRule, args, {loaders}) => loaders.ofbiz.load(`budgetItemTypes/find?budgetItemTypeId=${budgetScenarioRule.budgetItemTypeId}`)
    }
  })
});

export {BudgetScenarioRuleType};
    