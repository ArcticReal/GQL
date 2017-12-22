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

const BudgetItemResponseType = new GraphQLObjectType({
  name: 'BudgetItemResponseType',
  description: 'response type for BudgetItem',

  fields: () => ({
    amount: {type: GraphQLFloat},
    budgetId: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    budgetItemTypeId: {type: GraphQLString},
    justification: {type: GraphQLString},
    purpose: {type: GraphQLString}
  })
});

export {BudgetItemResponseType};
    