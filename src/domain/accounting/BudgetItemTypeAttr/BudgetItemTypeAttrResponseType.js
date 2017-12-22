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

const BudgetItemTypeAttrResponseType = new GraphQLObjectType({
  name: 'BudgetItemTypeAttrResponseType',
  description: 'response type for BudgetItemTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    budgetItemTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {BudgetItemTypeAttrResponseType};
    