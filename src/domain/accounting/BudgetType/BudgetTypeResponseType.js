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

const BudgetTypeResponseType = new GraphQLObjectType({
  name: 'BudgetTypeResponseType',
  description: 'response type for BudgetType',

  fields: () => ({
    budgetTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {BudgetTypeResponseType};
    