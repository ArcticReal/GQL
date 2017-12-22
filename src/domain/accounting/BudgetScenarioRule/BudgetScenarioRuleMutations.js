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
import {BudgetScenarioRuleResponseType} from '../../accounting/BudgetScenarioRule/BudgetScenarioRuleResponseType.js';
import {BudgetScenarioRuleInputType} from '../../accounting/BudgetScenarioRule/BudgetScenarioRuleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createBudgetScenarioRule = {
  type: BudgetScenarioRuleResponseType,
  description: 'mutation for ofbiz createBudgetScenarioRule method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/budgetScenarioRules/add?`, null, req);
  }
};
export {createBudgetScenarioRule};


const deleteBudgetScenarioRuleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBudgetScenarioRuleByIdUpdated method',
  args:{budgetScenarioRuleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budget/budgetScenarioRules/${args.budgetScenarioRuleId}?`, null, req);
  }
};
export {deleteBudgetScenarioRuleByIdUpdated};


const updateBudgetScenarioRule = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBudgetScenarioRule method',
  args:{budgetScenarioRuleToBeUpdated: {type: BudgetScenarioRuleInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budget/budgetScenarioRules/${args.nullVal}?`, args.budgetScenarioRuleToBeUpdated, req);
  }
};
export {updateBudgetScenarioRule};
