
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {BudgetRevisionType} from '../accounting/BudgetRevisionType.js';


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
      resolve: (budgetRevisionImpact, args, {loaders}) => loaders.ofbiz.load(`budgetRevisions/find?budgetId=${budgetRevisionImpact.budgetId}`)
    },
    revisedAmount: {type: GraphQLFloat}
  })
});

export {BudgetRevisionImpactType};
    