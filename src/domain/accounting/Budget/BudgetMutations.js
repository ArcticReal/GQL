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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createBudget = {
  type: ResopnseType,
  description: 'mutation for ofbiz createBudget method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budgets/add?`, null, req);
  }
};
export {createBudget};


const updateBudget = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateBudget method',
  args:{budgetToBeUpdated: {type: BudgetInputType},budgetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budgets/${args.budgetId}?`, args.budgetToBeUpdated, req);
  }
};
export {updateBudget};


const deleteBudgetByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteBudgetByIdUpdated method',
  args:{budgetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budgets/${args.budgetId}?`, null, req);
  }
};
export {deleteBudgetByIdUpdated};
