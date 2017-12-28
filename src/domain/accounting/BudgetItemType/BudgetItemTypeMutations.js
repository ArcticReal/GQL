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
import {BudgetItemTypeInputType} from '../../accounting/BudgetItemType/BudgetItemTypeInputType.js';
import {BudgetItemTypeResponseType} from '../../accounting/BudgetItemType/BudgetItemTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createBudgetItemType = {
  type: BudgetItemTypeResponseType,
  description: 'mutation for ofbiz createBudgetItemType method',
  args:{budgetItemTypeToBeAdded: {type: BudgetItemTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/budgetItemTypes/add?`, args.budgetItemTypeToBeAdded, req);
  }
};
export {createBudgetItemType};


const updateBudgetItemType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBudgetItemType method',
  args:{budgetItemTypeToBeUpdated: {type: BudgetItemTypeInputType},budgetItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budget/budgetItemTypes/${args.budgetItemTypeId}?`, args.budgetItemTypeToBeUpdated, req);
  }
};
export {updateBudgetItemType};


const deleteBudgetItemTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBudgetItemTypeByIdUpdated method',
  args:{budgetItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budget/budgetItemTypes/${args.budgetItemTypeId}?`, null, req);
  }
};
export {deleteBudgetItemTypeByIdUpdated};
