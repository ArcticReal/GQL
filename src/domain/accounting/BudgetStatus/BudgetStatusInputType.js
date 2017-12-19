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

const BudgetStatusInputType = new GraphQLInputObjectType({
  name: 'BudgetStatusInputType',
  description: 'input type for BudgetStatus',

  fields: () => ({
    budgetId: {type: GraphQLString},
    changeByUserLoginId: {type: GraphQLString},
    comments: {type: GraphQLString},
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {BudgetStatusInputType};
    