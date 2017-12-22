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
import {BudgetScenarioResponseType} from '../../accounting/BudgetScenario/BudgetScenarioResponseType.js';
import {BudgetScenarioInputType} from '../../accounting/BudgetScenario/BudgetScenarioInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createBudgetScenario = {
  type: BudgetScenarioResponseType,
  description: 'mutation for ofbiz createBudgetScenario method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/budgetScenarios/add?`, null, req);
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
