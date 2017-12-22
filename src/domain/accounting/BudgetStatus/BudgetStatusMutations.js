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
import {BudgetStatusResponseType} from '../../accounting/BudgetStatus/BudgetStatusResponseType.js';
import {BudgetStatusInputType} from '../../accounting/BudgetStatus/BudgetStatusInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createBudgetStatus = {
  type: BudgetStatusResponseType,
  description: 'mutation for ofbiz createBudgetStatus method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/budgetStatuss/add?`, null, req);
  }
};
export {createBudgetStatus};


const deleteBudgetStatusByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBudgetStatusByIdUpdated method',
  args:{budgetStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budget/budgetStatuss/${args.budgetStatusId}?`, null, req);
  }
};
export {deleteBudgetStatusByIdUpdated};


const updateBudgetStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBudgetStatus method',
  args:{budgetStatusToBeUpdated: {type: BudgetStatusInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budget/budgetStatuss/${args.nullVal}?`, args.budgetStatusToBeUpdated, req);
  }
};
export {updateBudgetStatus};
