
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

import {BudgetRevisionImpactType} from '../accounting/BudgetRevisionImpact.js';
import {BudgetType} from '../accounting/Budget.js';


const BudgetRevisionType = new GraphQLObjectType({
  name: 'BudgetRevisionType',
  description: 'Type for BudgetRevision in accounting',

  fields: () => ({
    revisionSeqId: {type: GraphQLString},
    dateRevised: {type: GraphQLString},
    budget: {
      type: BudgetType,
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetRevision, args, {loaders}) => loaders.ofbiz.load(`budgets/find?budgetId=${budgetRevision.budgetId}`)
    },
    budgetRevisionImpacts: {
      type: new GraphQLList(BudgetRevisionImpactType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetRevision, args, {loaders}) => loaders.ofbizArray.load(`budgetRevisionImpacts/find?budgetId=${budgetRevision.budgetId}`)
    }
  })
});

export {BudgetRevisionType};
    




const BudgetRevisionInputType = new GraphQLInputObjectType({
  name: 'BudgetRevisionInputType',
  description: 'input type for BudgetRevision in accounting',

  fields: () => ({
    revisionSeqId: {type: GraphQLString},
    dateRevised: {type: GraphQLString},
    budgetId: {type: GraphQLString}
  })
});

export {BudgetRevisionInputType};
    