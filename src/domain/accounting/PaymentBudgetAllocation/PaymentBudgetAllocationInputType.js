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

const PaymentBudgetAllocationInputType = new GraphQLInputObjectType({
  name: 'PaymentBudgetAllocationInputType',
  description: 'input type for PaymentBudgetAllocation',

  fields: () => ({
    amount: {type: GraphQLFloat},
    budgetId: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    paymentId: {type: GraphQLString}
  })
});

export {PaymentBudgetAllocationInputType};
    