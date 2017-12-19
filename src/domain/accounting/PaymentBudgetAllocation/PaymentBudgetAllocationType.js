
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

import {PaymentType} from '../../accounting/Payment/PaymentType.js';
import {BudgetType} from '../../accounting/Budget/BudgetType.js';


const PaymentBudgetAllocationType = new GraphQLObjectType({
  name: 'PaymentBudgetAllocationType',
  description: 'Type for PaymentBudgetAllocation in accounting',

  fields: () => ({
    amount: {type: GraphQLFloat},
    payment: {
      type: PaymentType,
      args : {paymentId: {type: GraphQLString}},
      resolve: (paymentBudgetAllocation, args, {loaders}) => loaders.ofbiz.load(`accounting/payments/find?paymentId=${paymentBudgetAllocation.paymentId}`)
    },
    budgetItemSeqId: {type: GraphQLString},
    budget: {
      type: BudgetType,
      args : {budgetId: {type: GraphQLString}},
      resolve: (paymentBudgetAllocation, args, {loaders}) => loaders.ofbiz.load(`accounting/budgets/find?budgetId=${paymentBudgetAllocation.budgetId}`)
    }
  })
});

export {PaymentBudgetAllocationType};
    