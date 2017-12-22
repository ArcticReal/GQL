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

const ShoppingListWorkEffortResponseType = new GraphQLObjectType({
  name: 'ShoppingListWorkEffortResponseType',
  description: 'response type for ShoppingListWorkEffort',

  fields: () => ({
    shoppingListId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {ShoppingListWorkEffortResponseType};
    