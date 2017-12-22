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
import {BudgetItemTypeAttrResponseType} from '../../accounting/BudgetItemTypeAttr/BudgetItemTypeAttrResponseType.js';
import {BudgetItemTypeAttrInputType} from '../../accounting/BudgetItemTypeAttr/BudgetItemTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createBudgetItemTypeAttr = {
  type: BudgetItemTypeAttrResponseType,
  description: 'mutation for ofbiz createBudgetItemTypeAttr method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/budgetItemTypeAttrs/add?`, null, req);
  }
};
export {createBudgetItemTypeAttr};


const updateBudgetItemTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBudgetItemTypeAttr method',
  args:{budgetItemTypeAttrToBeUpdated: {type: BudgetItemTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budget/budgetItemTypeAttrs/${args.attrName}?`, args.budgetItemTypeAttrToBeUpdated, req);
  }
};
export {updateBudgetItemTypeAttr};


const deleteBudgetItemTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBudgetItemTypeAttrByIdUpdated method',
  args:{budgetItemTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budget/budgetItemTypeAttrs/${args.budgetItemTypeAttrId}?`, null, req);
  }
};
export {deleteBudgetItemTypeAttrByIdUpdated};
