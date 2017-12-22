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

const BudgetRoleResponseType = new GraphQLObjectType({
  name: 'BudgetRoleResponseType',
  description: 'response type for BudgetRole',

  fields: () => ({
    budgetId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {BudgetRoleResponseType};
    