
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

import {BudgetRevisionType} from '../accounting/BudgetRevision.js';


const BudgetRevisionImpactType = new GraphQLObjectType({
  name: 'BudgetRevisionImpactType',
  description: 'Type for BudgetRevisionImpact in accounting',

  fields: () => ({
    addDeleteFlag: {type: GraphQLBoolean},
    revisionReason: {type: GraphQLString},
    revisionSeqId: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    budget: {
      type: BudgetRevisionType,
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetRevisionImpact, args, {loaders}) => loaders.ofbiz.load(`accounting/budget/budgetRevisions/find?budgetId=${budgetRevisionImpact.budgetId}`)
    },
    revisedAmount: {type: GraphQLFloat}
  })
});

export {BudgetRevisionImpactType};
    




const BudgetRevisionImpactInputType = new GraphQLInputObjectType({
  name: 'BudgetRevisionImpactInputType',
  description: 'input type for BudgetRevisionImpact',

  fields: () => ({
    addDeleteFlag: {type: GraphQLBoolean},
    budgetId: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    revisedAmount: {type: GraphQLFloat},
    revisionReason: {type: GraphQLString},
    revisionSeqId: {type: GraphQLString}
  })
});

export {BudgetRevisionImpactInputType};
    