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

const BudgetItemTypeResponseType = new GraphQLObjectType({
  name: 'BudgetItemTypeResponseType',
  description: 'response type for BudgetItemType',

  fields: () => ({
    budgetItemTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {BudgetItemTypeResponseType};
    