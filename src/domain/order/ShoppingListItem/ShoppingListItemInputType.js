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

const ShoppingListItemInputType = new GraphQLInputObjectType({
  name: 'ShoppingListItemInputType',
  description: 'input type for ShoppingListItem',

  fields: () => ({
    configId: {type: GraphQLString},
    modifiedPrice: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    quantityPurchased: {type: GraphQLFloat},
    reservLength: {type: GraphQLFloat},
    reservPersons: {type: GraphQLFloat},
    reservStart: {type: GraphQLString},
    shoppingListId: {type: GraphQLString},
    shoppingListItemSeqId: {type: GraphQLString}
  })
});

export {ShoppingListItemInputType};
    