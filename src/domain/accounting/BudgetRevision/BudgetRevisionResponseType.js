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

const BudgetRevisionResponseType = new GraphQLObjectType({
  name: 'BudgetRevisionResponseType',
  description: 'response type for BudgetRevision',

  fields: () => ({
    budgetId: {type: GraphQLString},
    dateRevised: {type: GraphQLString},
    revisionSeqId: {type: GraphQLString}
  })
});

export {BudgetRevisionResponseType};
    