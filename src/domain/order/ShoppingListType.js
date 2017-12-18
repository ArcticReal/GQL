
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

import {ShoppingListType} from '../order/ShoppingList.js';


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
    




const ShoppingListTypeInputType = new GraphQLInputObjectType({
  name: 'ShoppingListTypeInputType',
  description: 'input type for ShoppingListType',

  fields: () => ({
    description: {type: GraphQLString},
    shoppingListTypeId: {type: GraphQLString}
  })
});

export {ShoppingListTypeInputType};
    