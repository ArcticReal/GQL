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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createShoppingListItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShoppingListItem method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/shoppingList/shoppingListItems/add?`, null, req);
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
