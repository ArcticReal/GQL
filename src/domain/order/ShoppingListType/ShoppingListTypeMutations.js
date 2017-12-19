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
import {ShoppingListTypeInputType} from '../../order/ShoppingListType/ShoppingListTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createShoppingListType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShoppingListType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/shoppingList/shoppingListTypes/add?`, null, req);
  }
};
export {createShoppingListType};


const updateShoppingListType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShoppingListType method',
  args:{shoppingListTypeToBeUpdated: {type: ShoppingListTypeInputType},shoppingListTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/shoppingList/shoppingListTypes/${args.shoppingListTypeId}?`, args.shoppingListTypeToBeUpdated, req);
  }
};
export {updateShoppingListType};


const deleteShoppingListTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShoppingListTypeByIdUpdated method',
  args:{shoppingListTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/shoppingList/shoppingListTypes/${args.shoppingListTypeId}?`, null, req);
  }
};
export {deleteShoppingListTypeByIdUpdated};
