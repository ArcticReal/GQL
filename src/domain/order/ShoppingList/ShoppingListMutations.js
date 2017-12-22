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
import {ShoppingListInputType} from '../../order/ShoppingList/ShoppingListInputType.js';
import {ShoppingListResponseType} from '../../order/ShoppingList/ShoppingListResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShoppingList = {
  type: ShoppingListResponseType,
  description: 'mutation for ofbiz createShoppingList method',
  args:{shoppingListToBeAdded: {type: ShoppingListInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/shoppingLists/add?`, args.shoppingListToBeAdded, req);
  }
};
export {createShoppingList};


const updateShoppingList = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShoppingList method',
  args:{shoppingListToBeUpdated: {type: ShoppingListInputType},shoppingListId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/shoppingLists/${args.shoppingListId}?`, args.shoppingListToBeUpdated, req);
  }
};
export {updateShoppingList};


const deleteShoppingListByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShoppingListByIdUpdated method',
  args:{shoppingListId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/shoppingLists/${args.shoppingListId}?`, null, req);
  }
};
export {deleteShoppingListByIdUpdated};
