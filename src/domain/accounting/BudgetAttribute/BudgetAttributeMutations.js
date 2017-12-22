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
import {BudgetAttributeResponseType} from '../../accounting/BudgetAttribute/BudgetAttributeResponseType.js';
import {BudgetAttributeInputType} from '../../accounting/BudgetAttribute/BudgetAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createBudgetAttribute = {
  type: BudgetAttributeResponseType,
  description: 'mutation for ofbiz createBudgetAttribute method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/budgetAttributes/add?`, null, req);
  }
};
export {createBudgetAttribute};


const updateBudgetAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBudgetAttribute method',
  args:{budgetAttributeToBeUpdated: {type: BudgetAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budget/budgetAttributes/${args.attrName}?`, args.budgetAttributeToBeUpdated, req);
  }
};
export {updateBudgetAttribute};


const deleteBudgetAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBudgetAttributeByIdUpdated method',
  args:{budgetAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budget/budgetAttributes/${args.budgetAttributeId}?`, null, req);
  }
};
export {deleteBudgetAttributeByIdUpdated};
