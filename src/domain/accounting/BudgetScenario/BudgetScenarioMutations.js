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
import {BudgetScenarioInputType} from '../../accounting/BudgetScenario/BudgetScenarioInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createBudgetScenario = {
  type: GraphQLString,
  description: 'mutation for ofbiz createBudgetScenario method',
  args:{budgetScenarioToBeAdded: {type: BudgetScenarioInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/budgetScenarios/add?`, args.budgetScenarioToBeAdded, req);
  }
};
export {createBudgetScenario};


const updateBudgetScenario = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBudgetScenario method',
  args:{budgetScenarioToBeUpdated: {type: BudgetScenarioInputType},budgetScenarioId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budget/budgetScenarios/${args.budgetScenarioId}?`, args.budgetScenarioToBeUpdated, req);
  }
};
export {updateBudgetScenario};


const deleteBudgetScenarioByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBudgetScenarioByIdUpdated method',
  args:{budgetScenarioId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budget/budgetScenarios/${args.budgetScenarioId}?`, null, req);
  }
};
export {deleteBudgetScenarioByIdUpdated};
