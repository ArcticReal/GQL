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
import {BudgetTypeAttrInputType} from '../../accounting/BudgetTypeAttr/BudgetTypeAttrInputType.js';
import {BudgetTypeAttrResponseType} from '../../accounting/BudgetTypeAttr/BudgetTypeAttrResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createBudgetTypeAttr = {
  type: BudgetTypeAttrResponseType,
  description: 'mutation for ofbiz createBudgetTypeAttr method',
  args:{budgetTypeAttrToBeAdded: {type: BudgetTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/budgetTypeAttrs/add?`, args.budgetTypeAttrToBeAdded, req);
  }
};
export {createBudgetTypeAttr};


const updateBudgetTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBudgetTypeAttr method',
  args:{budgetTypeAttrToBeUpdated: {type: BudgetTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budget/budgetTypeAttrs/${args.attrName}?`, args.budgetTypeAttrToBeUpdated, req);
  }
};
export {updateBudgetTypeAttr};


const deleteBudgetTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBudgetTypeAttrByIdUpdated method',
  args:{budgetTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budget/budgetTypeAttrs/${args.budgetTypeAttrId}?`, null, req);
  }
};
export {deleteBudgetTypeAttrByIdUpdated};
