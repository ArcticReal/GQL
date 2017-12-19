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

const BudgetAttributeInputType = new GraphQLInputObjectType({
  name: 'BudgetAttributeInputType',
  description: 'input type for BudgetAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    budgetId: {type: GraphQLString}
  })
});

export {BudgetAttributeInputType};
    