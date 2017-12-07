
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SurveyResponseType} from '../content/SurveyResponseType.js';
import {ShoppingListItemType} from '../order/ShoppingListItemType.js';


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
    