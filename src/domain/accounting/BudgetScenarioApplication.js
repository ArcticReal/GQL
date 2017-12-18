
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

import {BudgetScenarioType} from '../accounting/BudgetScenario.js';
import {BudgetItemType} from '../accounting/BudgetItem.js';


const BudgetScenarioApplicationType = new GraphQLObjectType({
  name: 'BudgetScenarioApplicationType',
  description: 'Type for BudgetScenarioApplication in accounting',

  fields: () => ({
    amountChange: {type: GraphQLFloat},
    percentageChange: {type: GraphQLFloat},
    budgetScenarioApplicId: {type: GraphQLString},
    budgetScenario: {
      type: BudgetScenarioType,
      args : {budgetScenarioId: {type: GraphQLString}},
      resolve: (budgetScenarioApplication, args, {loaders}) => loaders.ofbiz.load(`accounting/budget/budgetScenarios/find?budgetScenarioId=${budgetScenarioApplication.budgetScenarioId}`)
    },
    budgetItemSeqId: {type: GraphQLString},
    budget: {
      type: BudgetItemType,
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetScenarioApplication, args, {loaders}) => loaders.ofbiz.load(`accounting/budget/budgetItems/find?budgetId=${budgetScenarioApplication.budgetId}`)
    }
  })
});

export {BudgetScenarioApplicationType};
    




const BudgetScenarioApplicationInputType = new GraphQLInputObjectType({
  name: 'BudgetScenarioApplicationInputType',
  description: 'input type for BudgetScenarioApplication',

  fields: () => ({
    amountChange: {type: GraphQLFloat},
    budgetId: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    budgetScenarioApplicId: {type: GraphQLString},
    budgetScenarioId: {type: GraphQLString},
    percentageChange: {type: GraphQLFloat}
  })
});

export {BudgetScenarioApplicationInputType};
    