
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {BudgetRevisionImpactType} from '../accounting/BudgetRevisionImpactType.js';
import {BudgetScenarioApplicationType} from '../accounting/BudgetScenarioApplicationType.js';
import {RequirementBudgetAllocationType} from '../order/RequirementBudgetAllocationType.js';
import {BudgetType} from '../accounting/BudgetType.js';
import {BudgetItemTypeType} from '../accounting/BudgetItemTypeType.js';
import {BudgetItemAttributeType} from '../accounting/BudgetItemAttributeType.js';


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
    budgetScenarioApplication: {
      type: new GraphQLList(BudgetScenarioApplicationType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetItem, args, {loaders}) => loaders.ofbizArray.load(`budgetScenarioApplications/find?budgetId=${budgetItem.budgetId}`)
    },
    requirementBudgetAllocation: {
      type: new GraphQLList(RequirementBudgetAllocationType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetItem, args, {loaders}) => loaders.ofbizArray.load(`requirementBudgetAllocations/find?budgetId=${budgetItem.budgetId}`)
    },
    budgetItemAttribute: {
      type: new GraphQLList(BudgetItemAttributeType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetItem, args, {loaders}) => loaders.ofbizArray.load(`budgetItemAttributes/find?budgetId=${budgetItem.budgetId}`)
    },
    budgetRevisionImpact: {
      type: new GraphQLList(BudgetRevisionImpactType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetItem, args, {loaders}) => loaders.ofbizArray.load(`budgetRevisionImpacts/find?budgetId=${budgetItem.budgetId}`)
    }
  })
});

export {BudgetItemType};
    