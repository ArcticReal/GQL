
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
      resolve: (budgetScenarioApplication, args, {loaders}) => loaders.ofbiz.load(`budgetScenarios/find?budgetScenarioId=${budgetScenarioApplication.budgetScenarioId}`)
    },
    budgetItemSeqId: {type: GraphQLString},
    budget: {
      type: BudgetItemType,
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetScenarioApplication, args, {loaders}) => loaders.ofbiz.load(`budgetItems/find?budgetId=${budgetScenarioApplication.budgetId}`)
    }
  })
});

export {BudgetScenarioApplicationType};
    




const BudgetScenarioApplicationInputType = new GraphQLInputObjectType({
  name: 'BudgetScenarioApplicationInputType',
  description: 'input type for BudgetScenarioApplication in accounting',

  fields: () => ({
    amountChange: {type: GraphQLFloat},
    percentageChange: {type: GraphQLFloat},
    budgetScenarioApplicId: {type: GraphQLString},
    budgetScenarioId: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    budgetId: {type: GraphQLString}
  })
});

export {BudgetScenarioApplicationInputType};
    