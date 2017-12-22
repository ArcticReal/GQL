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

const BudgetAttributeResponseType = new GraphQLObjectType({
  name: 'BudgetAttributeResponseType',
  description: 'response type for BudgetAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    budgetId: {type: GraphQLString}
  })
});

export {BudgetAttributeResponseType};
    