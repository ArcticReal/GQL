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

const ShoppingListWorkEffortInputType = new GraphQLInputObjectType({
  name: 'ShoppingListWorkEffortInputType',
  description: 'input type for ShoppingListWorkEffort',

  fields: () => ({
    shoppingListId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {ShoppingListWorkEffortInputType};
    