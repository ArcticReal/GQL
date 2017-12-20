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
import {BudgetItemInputType} from '../../accounting/BudgetItem/BudgetItemInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createBudgetItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz createBudgetItem method',
  args:{budgetItemToBeAdded: {type: BudgetItemInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/budgetItems/add?`, args.budgetItemToBeAdded, req);
  }
};
export {createBudgetItem};


const deleteBudgetItemByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteBudgetItemByIdUpdated method',
  args:{budgetItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budget/budgetItems/${args.budgetItemId}?`, null, req);
  }
};
export {deleteBudgetItemByIdUpdated};


const updateBudgetItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateBudgetItem method',
  args:{budgetItemToBeUpdated: {type: BudgetItemInputType},budgetItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budget/budgetItems/${args.budgetItemSeqId}?`, args.budgetItemToBeUpdated, req);
  }
};
export {updateBudgetItem};
