
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ShoppingListType} from '../order/ShoppingListType.js';


const ShoppingListTypeType = new GraphQLObjectType({
  name: 'ShoppingListTypeType',
  description: 'Type for ShoppingListType in order',

  fields: () => ({
    description: {type: GraphQLString},
    shoppingListTypeId: {type: GraphQLString},
    shoppingList: {
      type: new GraphQLList(ShoppingListType),
      args : {shoppingListTypeId: {type: GraphQLString}},
      resolve: (shoppingListType, args, {loaders}) => loaders.ofbizArray.load(`shoppingLists/find?shoppingListTypeId=${shoppingListType.shoppingListTypeId}`)
    }
  })
});

export {ShoppingListTypeType};
    