
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PaymentType} from '../accounting/PaymentType.js';
import {BudgetType} from '../accounting/BudgetType.js';


const PaymentBudgetAllocationType = new GraphQLObjectType({
  name: 'PaymentBudgetAllocationType',
  description: 'Type for PaymentBudgetAllocation in accounting',

  fields: () => ({
    amount: {type: GraphQLFloat},
    payment: {
      type: PaymentType,
      args : {paymentId: {type: GraphQLString}},
      resolve: (paymentBudgetAllocation, args, {loaders}) => loaders.ofbiz.load(`payments/find?paymentId=${paymentBudgetAllocation.paymentId}`)
    },
    budgetItemSeqId: {type: GraphQLString},
    budget: {
      type: BudgetType,
      args : {budgetId: {type: GraphQLString}},
      resolve: (paymentBudgetAllocation, args, {loaders}) => loaders.ofbiz.load(`budgets/find?budgetId=${paymentBudgetAllocation.budgetId}`)
    }
  })
});

export {PaymentBudgetAllocationType};
    