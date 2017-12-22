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
import {BudgetTypeResponseType} from '../../accounting/BudgetType/BudgetTypeResponseType.js';
import {BudgetTypeInputType} from '../../accounting/BudgetType/BudgetTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createBudgetType = {
  type: BudgetTypeResponseType,
  description: 'mutation for ofbiz createBudgetType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/budgetTypes/add?`, null, req);
  }
};
export {createBudgetType};


const updateBudgetType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBudgetType method',
  args:{budgetTypeToBeUpdated: {type: BudgetTypeInputType},budgetTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budget/budgetTypes/${args.budgetTypeId}?`, args.budgetTypeToBeUpdated, req);
  }
};
export {updateBudgetType};


const deleteBudgetTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBudgetTypeByIdUpdated method',
  args:{budgetTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budget/budgetTypes/${args.budgetTypeId}?`, null, req);
  }
};
export {deleteBudgetTypeByIdUpdated};
