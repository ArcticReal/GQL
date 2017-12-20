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
import {ShoppingListItemSurveyInputType} from '../../order/ShoppingListItemSurvey/ShoppingListItemSurveyInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShoppingListItemSurvey = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShoppingListItemSurvey method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/shoppingList/shoppingListItemSurveys/add?`, null, req);
  }
};
export {createShoppingListItemSurvey};


const updateShoppingListItemSurvey = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShoppingListItemSurvey method',
  args:{shoppingListItemSurveyToBeUpdated: {type: ShoppingListItemSurveyInputType},shoppingListItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/shoppingList/shoppingListItemSurveys/${args.shoppingListItemSeqId}?`, args.shoppingListItemSurveyToBeUpdated, req);
  }
};
export {updateShoppingListItemSurvey};


const deleteShoppingListItemSurveyByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShoppingListItemSurveyByIdUpdated method',
  args:{shoppingListItemSurveyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/shoppingList/shoppingListItemSurveys/${args.shoppingListItemSurveyId}?`, null, req);
  }
};
export {deleteShoppingListItemSurveyByIdUpdated};
