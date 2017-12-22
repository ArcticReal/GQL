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

const BudgetRevisionImpactResponseType = new GraphQLObjectType({
  name: 'BudgetRevisionImpactResponseType',
  description: 'response type for BudgetRevisionImpact',

  fields: () => ({
    addDeleteFlag: {type: GraphQLBoolean},
    budgetId: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    revisedAmount: {type: GraphQLFloat},
    revisionReason: {type: GraphQLString},
    revisionSeqId: {type: GraphQLString}
  })
});

export {BudgetRevisionImpactResponseType};
    