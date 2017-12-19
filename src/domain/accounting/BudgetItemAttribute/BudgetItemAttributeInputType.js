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

const BudgetItemAttributeInputType = new GraphQLInputObjectType({
  name: 'BudgetItemAttributeInputType',
  description: 'input type for BudgetItemAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    budgetId: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString}
  })
});

export {BudgetItemAttributeInputType};
    