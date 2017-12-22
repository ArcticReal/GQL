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
import {ShoppingListItemInputType} from '../../order/ShoppingListItem/ShoppingListItemInputType.js';
import {ShoppingListItemResponseType} from '../../order/ShoppingListItem/ShoppingListItemResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShoppingListItem = {
  type: ShoppingListItemResponseType,
  description: 'mutation for ofbiz createShoppingListItem method',
  args:{shoppingListItemToBeAdded: {type: ShoppingListItemInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/shoppingList/shoppingListItems/add?`, args.shoppingListItemToBeAdded, req);
  }
};
export {createShoppingListItem};


const deleteShoppingListItemByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShoppingListItemByIdUpdated method',
  args:{shoppingListItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/shoppingList/shoppingListItems/${args.shoppingListItemId}?`, null, req);
  }
};
export {deleteShoppingListItemByIdUpdated};


const updateShoppingListItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShoppingListItem method',
  args:{shoppingListItemToBeUpdated: {type: ShoppingListItemInputType},shoppingListItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/shoppingList/shoppingListItems/${args.shoppingListItemSeqId}?`, args.shoppingListItemToBeUpdated, req);
  }
};
export {updateShoppingListItem};
