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

const PaymentBudgetAllocationResponseType = new GraphQLObjectType({
  name: 'PaymentBudgetAllocationResponseType',
  description: 'response type for PaymentBudgetAllocation',

  fields: () => ({
    amount: {type: GraphQLFloat},
    budgetId: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    paymentId: {type: GraphQLString}
  })
});

export {PaymentBudgetAllocationResponseType};
    