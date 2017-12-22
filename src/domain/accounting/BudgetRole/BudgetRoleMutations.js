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
import {BudgetRoleInputType} from '../../accounting/BudgetRole/BudgetRoleInputType.js';
import {BudgetRoleResponseType} from '../../accounting/BudgetRole/BudgetRoleResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createBudgetRole = {
  type: BudgetRoleResponseType,
  description: 'mutation for ofbiz createBudgetRole method',
  args:{budgetRoleToBeAdded: {type: BudgetRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/budgetRoles/add?`, args.budgetRoleToBeAdded, req);
  }
};
export {createBudgetRole};


const deleteBudgetRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBudgetRoleByIdUpdated method',
  args:{budgetRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budget/budgetRoles/${args.budgetRoleId}?`, null, req);
  }
};
export {deleteBudgetRoleByIdUpdated};


const updateBudgetRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBudgetRole method',
  args:{budgetRoleToBeUpdated: {type: BudgetRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budget/budgetRoles/${args.roleTypeId}?`, args.budgetRoleToBeUpdated, req);
  }
};
export {updateBudgetRole};
