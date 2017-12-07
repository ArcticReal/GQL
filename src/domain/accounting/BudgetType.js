
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {BudgetStatusType} from '../accounting/BudgetStatusType.js';
import {BudgetRevisionImpactType} from '../accounting/BudgetRevisionImpactType.js';
import {BudgetScenarioApplicationType} from '../accounting/BudgetScenarioApplicationType.js';
import {BudgetRevisionType} from '../accounting/BudgetRevisionType.js';
import {PaymentBudgetAllocationType} from '../accounting/PaymentBudgetAllocationType.js';
import {BudgetItemType} from '../accounting/BudgetItemType.js';
import {BudgetReviewType} from '../accounting/BudgetReviewType.js';
import {BudgetAttributeType} from '../accounting/BudgetAttributeType.js';
import {BudgetRoleType} from '../accounting/BudgetRoleType.js';
import {BudgetTypeType} from '../accounting/BudgetTypeType.js';


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
    budgetRevision: {
      type: new GraphQLList(BudgetRevisionType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budget, args, {loaders}) => loaders.ofbizArray.load(`budgetRevisions/find?budgetId=${budget.budgetId}`)
    },
    paymentBudgetAllocation: {
      type: new GraphQLList(PaymentBudgetAllocationType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budget, args, {loaders}) => loaders.ofbizArray.load(`paymentBudgetAllocations/find?budgetId=${budget.budgetId}`)
    },
    budgetStatus: {
      type: new GraphQLList(BudgetStatusType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budget, args, {loaders}) => loaders.ofbizArray.load(`budgetStatuss/find?budgetId=${budget.budgetId}`)
    },
    budgetItem: {
      type: new GraphQLList(BudgetItemType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budget, args, {loaders}) => loaders.ofbizArray.load(`budgetItems/find?budgetId=${budget.budgetId}`)
    },
    budgetScenarioApplication: {
      type: new GraphQLList(BudgetScenarioApplicationType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budget, args, {loaders}) => loaders.ofbizArray.load(`budgetScenarioApplications/find?budgetId=${budget.budgetId}`)
    },
    budgetRole: {
      type: new GraphQLList(BudgetRoleType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budget, args, {loaders}) => loaders.ofbizArray.load(`budgetRoles/find?budgetId=${budget.budgetId}`)
    },
    budgetReview: {
      type: new GraphQLList(BudgetReviewType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budget, args, {loaders}) => loaders.ofbizArray.load(`budgetReviews/find?budgetId=${budget.budgetId}`)
    },
    budgetAttribute: {
      type: new GraphQLList(BudgetAttributeType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budget, args, {loaders}) => loaders.ofbizArray.load(`budgetAttributes/find?budgetId=${budget.budgetId}`)
    },
    budgetRevisionImpact: {
      type: new GraphQLList(BudgetRevisionImpactType),
      args : {budgetId: {type: GraphQLString}},
      resolve: (budget, args, {loaders}) => loaders.ofbizArray.load(`budgetRevisionImpacts/find?budgetId=${budget.budgetId}`)
    }
  })
});

export {BudgetType};
    