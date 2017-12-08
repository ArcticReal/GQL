
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

import {SurveyResponseType} from '../content/SurveyResponse.js';
import {ShoppingListItemType} from '../order/ShoppingListItem.js';


const ShoppingListItemSurveyType = new GraphQLObjectType({
  name: 'ShoppingListItemSurveyType',
  description: 'Type for ShoppingListItemSurvey in order',

  fields: () => ({
    shoppingList: {
      type: ShoppingListItemType,
      args : {shoppingListId: {type: GraphQLString}},
      resolve: (shoppingListItemSurvey, args, {loaders}) => loaders.ofbiz.load(`shoppingListItems/find?shoppingListId=${shoppingListItemSurvey.shoppingListId}`)
    },
    shoppingListItemSeqId: {type: GraphQLString},
    surveyResponse: {
      type: SurveyResponseType,
      args : {surveyResponseId: {type: GraphQLString}},
      resolve: (shoppingListItemSurvey, args, {loaders}) => loaders.ofbiz.load(`surveyResponses/find?surveyResponseId=${shoppingListItemSurvey.surveyResponseId}`)
    }
  })
});

export {ShoppingListItemSurveyType};
    




const ShoppingListItemSurveyInputType = new GraphQLInputObjectType({
  name: 'ShoppingListItemSurveyInputType',
  description: 'input type for ShoppingListItemSurvey in order',

  fields: () => ({
    shoppingListId: {type: GraphQLString},
    shoppingListItemSeqId: {type: GraphQLString},
    surveyResponseId: {type: GraphQLString}
  })
});

export {ShoppingListItemSurveyInputType};
    