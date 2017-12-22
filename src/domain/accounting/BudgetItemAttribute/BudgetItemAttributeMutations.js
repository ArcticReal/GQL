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
import {BudgetItemAttributeInputType} from '../../accounting/BudgetItemAttribute/BudgetItemAttributeInputType.js';
import {BudgetItemAttributeResponseType} from '../../accounting/BudgetItemAttribute/BudgetItemAttributeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createBudgetItemAttribute = {
  type: BudgetItemAttributeResponseType,
  description: 'mutation for ofbiz createBudgetItemAttribute method',
  args:{budgetItemAttributeToBeAdded: {type: BudgetItemAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/budgetItemAttributes/add?`, args.budgetItemAttributeToBeAdded, req);
  }
};
export {createBudgetItemAttribute};


const deleteBudgetItemAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBudgetItemAttributeByIdUpdated method',
  args:{budgetItemAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budget/budgetItemAttributes/${args.budgetItemAttributeId}?`, null, req);
  }
};
export {deleteBudgetItemAttributeByIdUpdated};


const updateBudgetItemAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBudgetItemAttribute method',
  args:{budgetItemAttributeToBeUpdated: {type: BudgetItemAttributeInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budget/budgetItemAttributes/${args.nullVal}?`, args.budgetItemAttributeToBeUpdated, req);
  }
};
export {updateBudgetItemAttribute};
