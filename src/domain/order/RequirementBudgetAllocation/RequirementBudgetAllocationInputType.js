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

const RequirementBudgetAllocationInputType = new GraphQLInputObjectType({
  name: 'RequirementBudgetAllocationInputType',
  description: 'input type for RequirementBudgetAllocation',

  fields: () => ({
    amount: {type: GraphQLFloat},
    budgetId: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    requirementId: {type: GraphQLString}
  })
});

export {RequirementBudgetAllocationInputType};
    