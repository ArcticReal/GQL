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

const BudgetRevisionInputType = new GraphQLInputObjectType({
  name: 'BudgetRevisionInputType',
  description: 'input type for BudgetRevision',

  fields: () => ({
    budgetId: {type: GraphQLString},
    dateRevised: {type: GraphQLString},
    revisionSeqId: {type: GraphQLString}
  })
});

export {BudgetRevisionInputType};
    