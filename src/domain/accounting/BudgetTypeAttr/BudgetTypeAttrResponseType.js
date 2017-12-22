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

const BudgetTypeAttrResponseType = new GraphQLObjectType({
  name: 'BudgetTypeAttrResponseType',
  description: 'response type for BudgetTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    budgetTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {BudgetTypeAttrResponseType};
    