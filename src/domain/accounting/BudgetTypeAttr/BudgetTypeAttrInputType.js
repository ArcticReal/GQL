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

const BudgetTypeAttrInputType = new GraphQLInputObjectType({
  name: 'BudgetTypeAttrInputType',
  description: 'input type for BudgetTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    budgetTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {BudgetTypeAttrInputType};
    