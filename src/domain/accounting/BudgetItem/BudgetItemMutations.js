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
import {BudgetItemResponseType} from '../../accounting/BudgetItem/BudgetItemResponseType.js';
import {BudgetItemInputType} from '../../accounting/BudgetItem/BudgetItemInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createBudgetItem = {
  type: BudgetItemResponseType,
  description: 'mutation for ofbiz createBudgetItem method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/budgetItems/add?`, null, req);
  }
};
export {createBudgetItem};


const deleteBudgetItemByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBudgetItemByIdUpdated method',
  args:{budgetItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budget/budgetItems/${args.budgetItemId}?`, null, req);
  }
};
export {deleteBudgetItemByIdUpdated};


const updateBudgetItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBudgetItem method',
  args:{budgetItemToBeUpdated: {type: BudgetItemInputType},budgetItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budget/budgetItems/${args.budgetItemSeqId}?`, args.budgetItemToBeUpdated, req);
  }
};
export {updateBudgetItem};
