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

const BudgetItemTypeAttrInputType = new GraphQLInputObjectType({
  name: 'BudgetItemTypeAttrInputType',
  description: 'input type for BudgetItemTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    budgetItemTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {BudgetItemTypeAttrInputType};
    