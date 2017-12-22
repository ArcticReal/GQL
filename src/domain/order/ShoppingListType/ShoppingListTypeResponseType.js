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

const ShoppingListTypeResponseType = new GraphQLObjectType({
  name: 'ShoppingListTypeResponseType',
  description: 'response type for ShoppingListType',

  fields: () => ({
    description: {type: GraphQLString},
    shoppingListTypeId: {type: GraphQLString}
  })
});

export {ShoppingListTypeResponseType};
    