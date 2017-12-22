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
import {ShoppingListWorkEffortInputType} from '../../order/ShoppingListWorkEffort/ShoppingListWorkEffortInputType.js';
import {ShoppingListWorkEffortResponseType} from '../../order/ShoppingListWorkEffort/ShoppingListWorkEffortResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShoppingListWorkEffort = {
  type: ShoppingListWorkEffortResponseType,
  description: 'mutation for ofbiz createShoppingListWorkEffort method',
  args:{shoppingListWorkEffortToBeAdded: {type: ShoppingListWorkEffortInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/shoppingList/shoppingListWorkEfforts/add?`, args.shoppingListWorkEffortToBeAdded, req);
  }
};
export {createShoppingListWorkEffort};


const updateShoppingListWorkEffort = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShoppingListWorkEffort method',
  args:{shoppingListWorkEffortToBeUpdated: {type: ShoppingListWorkEffortInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/shoppingList/shoppingListWorkEfforts/${args.nullVal}?`, args.shoppingListWorkEffortToBeUpdated, req);
  }
};
export {updateShoppingListWorkEffort};


const deleteShoppingListWorkEffortByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShoppingListWorkEffortByIdUpdated method',
  args:{shoppingListWorkEffortId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/shoppingList/shoppingListWorkEfforts/${args.shoppingListWorkEffortId}?`, null, req);
  }
};
export {deleteShoppingListWorkEffortByIdUpdated};
