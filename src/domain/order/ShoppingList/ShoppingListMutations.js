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
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShoppingList = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShoppingList method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/shoppingLists/add?`, null, req);
  }
};
export {createShoppingList};


const updateShoppingList = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShoppingList method',
  args:{shoppingListToBeUpdated: {type: ShoppingListInputType},shoppingListId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/shoppingLists/${args.shoppingListId}?`, args.shoppingListToBeUpdated, req);
  }
};
export {updateShoppingList};


const deleteShoppingListByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShoppingListByIdUpdated method',
  args:{shoppingListId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/shoppingLists/${args.shoppingListId}?`, null, req);
  }
};
export {deleteShoppingListByIdUpdated};
