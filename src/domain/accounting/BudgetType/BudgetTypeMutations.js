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
import {BudgetTypeInputType} from '../../accounting/BudgetType/BudgetTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createBudgetType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createBudgetType method',
  args:{budgetTypeToBeAdded: {type: BudgetTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/budgetTypes/add?`, args.budgetTypeToBeAdded, req);
  }
};
export {createBudgetType};


const updateBudgetType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateBudgetType method',
  args:{budgetTypeToBeUpdated: {type: BudgetTypeInputType},budgetTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budget/budgetTypes/${args.budgetTypeId}?`, args.budgetTypeToBeUpdated, req);
  }
};
export {updateBudgetType};


const deleteBudgetTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteBudgetTypeByIdUpdated method',
  args:{budgetTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budget/budgetTypes/${args.budgetTypeId}?`, null, req);
  }
};
export {deleteBudgetTypeByIdUpdated};
