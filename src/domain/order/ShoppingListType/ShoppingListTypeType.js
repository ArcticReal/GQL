
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

import {ShoppingListType} from '../../order/ShoppingList/ShoppingListType.js';


const ShoppingListTypeType = new GraphQLObjectType({
  name: 'ShoppingListTypeType',
  description: 'Type for ShoppingListType in order',

  fields: () => ({
    description: {type: GraphQLString},
    shoppingListTypeId: {type: GraphQLString},
    shoppingLists: {
      type: new GraphQLList(ShoppingListType),
      args : {},
      resolve: (shoppingListType, args, {loaders}) => loaders.ofbizArray.load(`order/shoppingLists/find?shoppingListTypeId=${shoppingListType.shoppingListTypeId}`)
    }
  })
});

export {ShoppingListTypeType};
    