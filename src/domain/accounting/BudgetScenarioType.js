
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {BudgetScenarioApplicationType} from '../accounting/BudgetScenarioApplicationType.js';
import {BudgetScenarioRuleType} from '../accounting/BudgetScenarioRuleType.js';


const BudgetScenarioType = new GraphQLObjectType({
  name: 'BudgetScenarioType',
  description: 'Type for BudgetScenario in accounting',

  fields: () => ({
    budgetScenarioId: {type: GraphQLString},
    description: {type: GraphQLString},
    budgetScenarioApplication: {
      type: new GraphQLList(BudgetScenarioApplicationType),
      args : {budgetScenarioId: {type: GraphQLString}},
      resolve: (budgetScenario, args, {loaders}) => loaders.ofbizArray.load(`budgetScenarioApplications/find?budgetScenarioId=${budgetScenario.budgetScenarioId}`)
    },
    budgetScenarioRule: {
      type: new GraphQLList(BudgetScenarioRuleType),
      args : {budgetScenarioId: {type: GraphQLString}},
      resolve: (budgetScenario, args, {loaders}) => loaders.ofbizArray.load(`budgetScenarioRules/find?budgetScenarioId=${budgetScenario.budgetScenarioId}`)
    }
  })
});

export {BudgetScenarioType};
    