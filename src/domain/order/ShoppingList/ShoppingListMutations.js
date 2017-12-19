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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createShoppingList = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShoppingList method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/shoppingLists/add?`, null, req);
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
