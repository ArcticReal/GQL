
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {RequirementType} from '../order/RequirementType.js';
import {BudgetItemType} from '../accounting/BudgetItemType.js';


const RequirementBudgetAllocationType = new GraphQLObjectType({
  name: 'RequirementBudgetAllocationType',
  description: 'Type for RequirementBudgetAllocation in order',

  fields: () => ({
    amount: {type: GraphQLFloat},
    budgetItemSeqId: {type: GraphQLString},
    budget: {
      type: BudgetItemType,
      args : {budgetId: {type: GraphQLString}},
      resolve: (requirementBudgetAllocation, args, {loaders}) => loaders.ofbiz.load(`budgetItems/find?budgetId=${requirementBudgetAllocation.budgetId}`)
    },
    requirement: {
      type: RequirementType,
      args : {requirementId: {type: GraphQLString}},
      resolve: (requirementBudgetAllocation, args, {loaders}) => loaders.ofbiz.load(`requirements/find?requirementId=${requirementBudgetAllocation.requirementId}`)
    }
  })
});

export {RequirementBudgetAllocationType};
    