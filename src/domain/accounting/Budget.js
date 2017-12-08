
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

import {BudgetStatusType} from '../accounting/BudgetStatus.js';
import {BudgetRevisionImpactType} from '../accounting/BudgetRevisionImpact.js';
import {BudgetScenarioApplicationType} from '../accounting/BudgetScenarioApplication.js';
import {BudgetRevisionType} from '../accounting/BudgetRevision.js';
import {PaymentBudgetAllocationType} from '../accounting/PaymentBudgetAllocation.js';
import {BudgetItemType} from '../accounting/BudgetItem.js';
import {BudgetReviewType} from '../accounting/BudgetReview.js';
import {BudgetAttributeType} from '../accounting/BudgetAttribute.js';
import {BudgetRoleType} from '../accounting/BudgetRole.js';
import {BudgetTypeType} from '../accounting/BudgetType.js';


const BudgetType = new GraphQLObjectType({
  name: 'BudgetType',
  description: 'Type for Budget in accounting',

  fields: () => ({
    comments: {type: GraphQLString},
    budgetType: {
      type: BudgetTypeType,
      args : {budgetTypeId: {type: GraphQLString}},
      resolve: (budget, args, {loaders}) => loaders.ofbiz.load(`budgetTypes/find?budgetTypeId=${budget.budgetTypeId}`)
    },
    budgetId: {type: GraphQLString},
    customTimePeriodId: {type: GraphQLString},
    budgetRevisions: {
      type: new GraphQLList(BudgetRevisionType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budget, args, {loaders}) => loaders.ofbizArray.load(`budgetRevisions/find?budgetId=${budget.budgetId}`)
    },
    paymentBudgetAllocations: {
      type: new GraphQLList(PaymentBudgetAllocationType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budget, args, {loaders}) => loaders.ofbizArray.load(`paymentBudgetAllocations/find?budgetId=${budget.budgetId}`)
    },
    budgetStatuses: {
      type: new GraphQLList(BudgetStatusType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budget, args, {loaders}) => loaders.ofbizArray.load(`budgetStatuss/find?budgetId=${budget.budgetId}`)
    },
    budgetItems: {
      type: new GraphQLList(BudgetItemType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budget, args, {loaders}) => loaders.ofbizArray.load(`budgetItems/find?budgetId=${budget.budgetId}`)
    },
    budgetScenarioApplications: {
      type: new GraphQLList(BudgetScenarioApplicationType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budget, args, {loaders}) => loaders.ofbizArray.load(`budgetScenarioApplications/find?budgetId=${budget.budgetId}`)
    },
    budgetRoles: {
      type: new GraphQLList(BudgetRoleType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budget, args, {loaders}) => loaders.ofbizArray.load(`budgetRoles/find?budgetId=${budget.budgetId}`)
    },
    budgetReviews: {
      type: new GraphQLList(BudgetReviewType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budget, args, {loaders}) => loaders.ofbizArray.load(`budgetReviews/find?budgetId=${budget.budgetId}`)
    },
    budgetAttributes: {
      type: new GraphQLList(BudgetAttributeType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budget, args, {loaders}) => loaders.ofbizArray.load(`budgetAttributes/find?budgetId=${budget.budgetId}`)
    },
    budgetRevisionImpacts: {
      type: new GraphQLList(BudgetRevisionImpactType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budget, args, {loaders}) => loaders.ofbizArray.load(`budgetRevisionImpacts/find?budgetId=${budget.budgetId}`)
    }
  })
});

export {BudgetType};
    




const BudgetInputType = new GraphQLInputObjectType({
  name: 'BudgetInputType',
  description: 'input type for Budget in accounting',

  fields: () => ({
    comments: {type: GraphQLString},
    budgetTypeId: {type: GraphQLString},
    budgetId: {type: GraphQLString},
    customTimePeriodId: {type: GraphQLString}
  })
});

export {BudgetInputType};
    