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

const BudgetRevisionImpactInputType = new GraphQLInputObjectType({
  name: 'BudgetRevisionImpactInputType',
  description: 'input type for BudgetRevisionImpact',

  fields: () => ({
    addDeleteFlag: {type: GraphQLBoolean},
    budgetId: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    revisedAmount: {type: GraphQLFloat},
    revisionReason: {type: GraphQLString},
    revisionSeqId: {type: GraphQLString}
  })
});

export {BudgetRevisionImpactInputType};
    