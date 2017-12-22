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
import {BudgetInputType} from '../../accounting/Budget/BudgetInputType.js';
import {BudgetResponseType} from '../../accounting/Budget/BudgetResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createBudget = {
  type: BudgetResponseType,
  description: 'mutation for ofbiz createBudget method',
  args:{budgetToBeAdded: {type: BudgetInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budgets/add?`, args.budgetToBeAdded, req);
  }
};
export {createBudget};


const updateBudget = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBudget method',
  args:{budgetToBeUpdated: {type: BudgetInputType},budgetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budgets/${args.budgetId}?`, args.budgetToBeUpdated, req);
  }
};
export {updateBudget};


const deleteBudgetByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBudgetByIdUpdated method',
  args:{budgetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budgets/${args.budgetId}?`, null, req);
  }
};
export {deleteBudgetByIdUpdated};
