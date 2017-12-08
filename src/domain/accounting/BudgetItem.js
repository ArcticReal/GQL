
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
      resolve: (budgetItem, args, {loaders}) => loaders.ofbiz.load(`budgets/find?budgetId=${budgetItem.budgetId}`)
    },
    budgetItemType: {
      type: BudgetItemTypeType,
      args : {budgetItemTypeId: {type: GraphQLString}},
      resolve: (budgetItem, args, {loaders}) => loaders.ofbiz.load(`budgetItemTypes/find?budgetItemTypeId=${budgetItem.budgetItemTypeId}`)
    },
    justification: {type: GraphQLString},
    budgetScenarioApplications: {
      type: new GraphQLList(BudgetScenarioApplicationType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetItem, args, {loaders}) => loaders.ofbizArray.load(`budgetScenarioApplications/find?budgetId=${budgetItem.budgetId}`)
    },
    requirementBudgetAllocations: {
      type: new GraphQLList(RequirementBudgetAllocationType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetItem, args, {loaders}) => loaders.ofbizArray.load(`requirementBudgetAllocations/find?budgetId=${budgetItem.budgetId}`)
    },
    budgetItemAttributes: {
      type: new GraphQLList(BudgetItemAttributeType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetItem, args, {loaders}) => loaders.ofbizArray.load(`budgetItemAttributes/find?budgetId=${budgetItem.budgetId}`)
    },
    budgetRevisionImpacts: {
      type: new GraphQLList(BudgetRevisionImpactType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetItem, args, {loaders}) => loaders.ofbizArray.load(`budgetRevisionImpacts/find?budgetId=${budgetItem.budgetId}`)
    }
  })
});

export {BudgetItemType};
    




const BudgetItemInputType = new GraphQLInputObjectType({
  name: 'BudgetItemInputType',
  description: 'input type for BudgetItem in accounting',

  fields: () => ({
    amount: {type: GraphQLFloat},
    purpose: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    budgetId: {type: GraphQLString},
    budgetItemTypeId: {type: GraphQLString},
    justification: {type: GraphQLString}
  })
});

export {BudgetItemInputType};
    