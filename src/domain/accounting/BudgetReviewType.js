
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyType} from '../party/PartyType.js';
import {BudgetReviewResultTypeType} from '../accounting/BudgetReviewResultTypeType.js';
import {BudgetType} from '../accounting/BudgetType.js';


const BudgetReviewType = new GraphQLObjectType({
  name: 'BudgetReviewType',
  description: 'Type for BudgetReview in accounting',

  fields: () => ({
    reviewDate: {type: GraphQLString},
    budgetReviewResultType: {
      type: BudgetReviewResultTypeType,
      args : {budgetReviewResultTypeId: {type: GraphQLString}},
      resolve: (budgetReview, args, {loaders}) => loaders.ofbiz.load(`budgetReviewResultTypes/find?budgetReviewResultTypeId=${budgetReview.budgetReviewResultTypeId}`)
    },
    budget: {
      type: BudgetType,
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetReview, args, {loaders}) => loaders.ofbiz.load(`budgets/find?budgetId=${budgetReview.budgetId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (budgetReview, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${budgetReview.partyId}`)
    },
    budgetReviewId: {type: GraphQLString}
  })
});

export {BudgetReviewType};
    