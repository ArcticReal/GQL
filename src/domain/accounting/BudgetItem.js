
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
import {BudgetScenarioApplicationType} from '../accounting/BudgetScenarioApplication.js';
import {RequirementBudgetAllocationType} from '../order/RequirementBudgetAllocation.js';
import {BudgetType} from '../accounting/Budget.js';
import {BudgetItemTypeType} from '../accounting/BudgetItemType.js';
import {BudgetItemAttributeType} from '../accounting/BudgetItemAttribute.js';


const BudgetItemType = new GraphQLObjectType({
  name: 'BudgetItemType',
  description: 'Type for BudgetItem in accounting',

  fields: () => ({
    amount: {type: GraphQLFloat},
    purpose: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    budget: {
      type: BudgetType,
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetItem, args, {loaders}) => loaders.ofbiz.load(`accounting/budgets/find?budgetId=${budgetItem.budgetId}`)
    },
    budgetItemType: {
      type: BudgetItemTypeType,
      args : {budgetItemTypeId: {type: GraphQLString}},
      resolve: (budgetItem, args, {loaders}) => loaders.ofbiz.load(`accounting/budget/budgetItemTypes/find?budgetItemTypeId=${budgetItem.budgetItemTypeId}`)
    },
    justification: {type: GraphQLString},
    budgetScenarioApplications: {
      type: new GraphQLList(BudgetScenarioApplicationType),
      args : {},
      resolve: (budgetItem, args, {loaders}) => loaders.ofbizArray.load(`accounting/budget/budgetScenarioApplications/find?budgetId=${budgetItem.budgetId}`)
    },
    requirementBudgetAllocations: {
      type: new GraphQLList(RequirementBudgetAllocationType),
      args : {},
      resolve: (budgetItem, args, {loaders}) => loaders.ofbizArray.load(`order/requirement/requirementBudgetAllocations/find?budgetId=${budgetItem.budgetId}`)
    },
    budgetItemAttributes: {
      type: new GraphQLList(BudgetItemAttributeType),
      args : {},
      resolve: (budgetItem, args, {loaders}) => loaders.ofbizArray.load(`accounting/budget/budgetItemAttributes/find?budgetId=${budgetItem.budgetId}`)
    },
    budgetRevisionImpacts: {
      type: new GraphQLList(BudgetRevisionImpactType),
      args : {},
      resolve: (budgetItem, args, {loaders}) => loaders.ofbizArray.load(`accounting/budget/budgetRevisionImpacts/find?budgetId=${budgetItem.budgetId}`)
    }
  })
});

export {BudgetItemType};
    




const BudgetItemInputType = new GraphQLInputObjectType({
  name: 'BudgetItemInputType',
  description: 'input type for BudgetItem',

  fields: () => ({
    amount: {type: GraphQLFloat},
    budgetId: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    budgetItemTypeId: {type: GraphQLString},
    justification: {type: GraphQLString},
    purpose: {type: GraphQLString}
  })
});

export {BudgetItemInputType};
    