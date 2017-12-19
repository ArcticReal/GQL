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

const BudgetRoleInputType = new GraphQLInputObjectType({
  name: 'BudgetRoleInputType',
  description: 'input type for BudgetRole',

  fields: () => ({
    budgetId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {BudgetRoleInputType};
    