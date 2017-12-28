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
import {BudgetRevisionImpactInputType} from '../../accounting/BudgetRevisionImpact/BudgetRevisionImpactInputType.js';
import {BudgetRevisionImpactResponseType} from '../../accounting/BudgetRevisionImpact/BudgetRevisionImpactResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createBudgetRevisionImpact = {
  type: BudgetRevisionImpactResponseType,
  description: 'mutation for ofbiz createBudgetRevisionImpact method',
  args:{budgetRevisionImpactToBeAdded: {type: BudgetRevisionImpactInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/budgetRevisionImpacts/add?`, args.budgetRevisionImpactToBeAdded, req);
  }
};
export {createBudgetRevisionImpact};


const deleteBudgetRevisionImpactByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBudgetRevisionImpactByIdUpdated method',
  args:{budgetRevisionImpactId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budget/budgetRevisionImpacts/${args.budgetRevisionImpactId}?`, null, req);
  }
};
export {deleteBudgetRevisionImpactByIdUpdated};


const updateBudgetRevisionImpact = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBudgetRevisionImpact method',
  args:{budgetRevisionImpactToBeUpdated: {type: BudgetRevisionImpactInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budget/budgetRevisionImpacts/${args.nullVal}?`, args.budgetRevisionImpactToBeUpdated, req);
  }
};
export {updateBudgetRevisionImpact};
