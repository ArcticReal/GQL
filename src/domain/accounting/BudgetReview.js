
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

import {PartyType} from '../party/Party.js';
import {BudgetReviewResultTypeType} from '../accounting/BudgetReviewResultType.js';
import {BudgetType} from '../accounting/Budget.js';


const BudgetReviewType = new GraphQLObjectType({
  name: 'BudgetReviewType',
  description: 'Type for BudgetReview in accounting',

  fields: () => ({
    reviewDate: {type: GraphQLString},
    budgetReviewResultType: {
      type: BudgetReviewResultTypeType,
      args : {budgetReviewResultTypeId: {type: GraphQLString}},
      resolve: (budgetReview, args, {loaders}) => loaders.ofbiz.load(`accounting/budget/budgetReviewResultTypes/find?budgetReviewResultTypeId=${budgetReview.budgetReviewResultTypeId}`)
    },
    budget: {
      type: BudgetType,
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetReview, args, {loaders}) => loaders.ofbiz.load(`accounting/budgets/find?budgetId=${budgetReview.budgetId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (budgetReview, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${budgetReview.partyId}`)
    },
    budgetReviewId: {type: GraphQLString}
  })
});

export {BudgetReviewType};
    




const BudgetReviewInputType = new GraphQLInputObjectType({
  name: 'BudgetReviewInputType',
  description: 'input type for BudgetReview',

  fields: () => ({
    budgetId: {type: GraphQLString},
    budgetReviewId: {type: GraphQLString},
    budgetReviewResultTypeId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    reviewDate: {type: GraphQLString}
  })
});

export {BudgetReviewInputType};
    