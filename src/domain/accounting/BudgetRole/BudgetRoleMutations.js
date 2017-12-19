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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createBudgetRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz createBudgetRole method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/budgetRoles/add?`, null, req);
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
