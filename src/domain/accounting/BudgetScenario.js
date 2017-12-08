
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

import {BudgetScenarioApplicationType} from '../accounting/BudgetScenarioApplication.js';
import {BudgetScenarioRuleType} from '../accounting/BudgetScenarioRule.js';


const BudgetScenarioType = new GraphQLObjectType({
  name: 'BudgetScenarioType',
  description: 'Type for BudgetScenario in accounting',

  fields: () => ({
    budgetScenarioId: {type: GraphQLString},
    description: {type: GraphQLString},
    budgetScenarioApplications: {
      type: new GraphQLList(BudgetScenarioApplicationType),
      args : {budgetScenarioId: {type: GraphQLString}},
      resolve: (budgetScenario, args, {loaders}) => loaders.ofbizArray.load(`budgetScenarioApplications/find?budgetScenarioId=${budgetScenario.budgetScenarioId}`)
    },
    budgetScenarioRules: {
      type: new GraphQLList(BudgetScenarioRuleType),
      args : {budgetScenarioId: {type: GraphQLString}},
      resolve: (budgetScenario, args, {loaders}) => loaders.ofbizArray.load(`budgetScenarioRules/find?budgetScenarioId=${budgetScenario.budgetScenarioId}`)
    }
  })
});

export {BudgetScenarioType};
    




const BudgetScenarioInputType = new GraphQLInputObjectType({
  name: 'BudgetScenarioInputType',
  description: 'input type for BudgetScenario in accounting',

  fields: () => ({
    budgetScenarioId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {BudgetScenarioInputType};
    