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

const ShoppingListTypeInputType = new GraphQLInputObjectType({
  name: 'ShoppingListTypeInputType',
  description: 'input type for ShoppingListType',

  fields: () => ({
    description: {type: GraphQLString},
    shoppingListTypeId: {type: GraphQLString}
  })
});

export {ShoppingListTypeInputType};
    