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

const RequirementBudgetAllocationResponseType = new GraphQLObjectType({
  name: 'RequirementBudgetAllocationResponseType',
  description: 'response type for RequirementBudgetAllocation',

  fields: () => ({
    amount: {type: GraphQLFloat},
    budgetId: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    requirementId: {type: GraphQLString}
  })
});

export {RequirementBudgetAllocationResponseType};
    