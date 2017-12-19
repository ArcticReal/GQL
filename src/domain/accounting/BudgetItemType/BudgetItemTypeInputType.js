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

const BudgetItemTypeInputType = new GraphQLInputObjectType({
  name: 'BudgetItemTypeInputType',
  description: 'input type for BudgetItemType',

  fields: () => ({
    budgetItemTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {BudgetItemTypeInputType};
    