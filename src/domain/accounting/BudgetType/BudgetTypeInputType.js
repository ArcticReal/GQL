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

const BudgetTypeInputType = new GraphQLInputObjectType({
  name: 'BudgetTypeInputType',
  description: 'input type for BudgetType',

  fields: () => ({
    budgetTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {BudgetTypeInputType};
    