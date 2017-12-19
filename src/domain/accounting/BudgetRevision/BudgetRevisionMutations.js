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
import {BudgetRevisionInputType} from '../../accounting/BudgetRevision/BudgetRevisionInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createBudgetRevision = {
  type: GraphQLString,
  description: 'mutation for ofbiz createBudgetRevision method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/budgetRevisions/add?`, null, req);
  }
};
export {createBudgetRevision};


const deleteBudgetRevisionByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBudgetRevisionByIdUpdated method',
  args:{budgetRevisionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budget/budgetRevisions/${args.budgetRevisionId}?`, null, req);
  }
};
export {deleteBudgetRevisionByIdUpdated};


const updateBudgetRevision = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBudgetRevision method',
  args:{budgetRevisionToBeUpdated: {type: BudgetRevisionInputType},revisionSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budget/budgetRevisions/${args.revisionSeqId}?`, args.budgetRevisionToBeUpdated, req);
  }
};
export {updateBudgetRevision};
