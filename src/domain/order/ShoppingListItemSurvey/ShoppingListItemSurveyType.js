
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

import {SurveyResponseType} from '../../content/SurveyResponse/SurveyResponseType.js';
import {ShoppingListItemType} from '../../order/ShoppingListItem/ShoppingListItemType.js';


const ShoppingListItemSurveyType = new GraphQLObjectType({
  name: 'ShoppingListItemSurveyType',
  description: 'Type for ShoppingListItemSurvey in order',

  fields: () => ({
    shoppingList: {
      type: ShoppingListItemType,
      args : {shoppingListId: {type: GraphQLString}},
      resolve: (shoppingListItemSurvey, args, {loaders}) => loaders.ofbiz.load(`order/shoppingList/shoppingListItems/find?shoppingListId=${shoppingListItemSurvey.shoppingListId}`)
    },
    shoppingListItemSeqId: {type: GraphQLString},
    surveyResponse: {
      type: SurveyResponseType,
      args : {surveyResponseId: {type: GraphQLString}},
      resolve: (shoppingListItemSurvey, args, {loaders}) => loaders.ofbiz.load(`content/survey/surveyResponses/find?surveyResponseId=${shoppingListItemSurvey.surveyResponseId}`)
    }
  })
});

export {ShoppingListItemSurveyType};
    