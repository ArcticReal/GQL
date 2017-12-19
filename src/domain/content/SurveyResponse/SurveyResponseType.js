
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

import {SurveyType} from '../../content/Survey/SurveyType.js';
import {ShoppingListItemSurveyType} from '../../order/ShoppingListItemSurvey/ShoppingListItemSurveyType.js';
import {SurveyResponseAnswerType} from '../../content/SurveyResponseAnswer/SurveyResponseAnswerType.js';
import {DataResourceType} from '../../content/DataResource/DataResourceType.js';
import {GiftCardFulfillmentType} from '../../accounting/GiftCardFulfillment/GiftCardFulfillmentType.js';


const SurveyResponseType = new GraphQLObjectType({
  name: 'SurveyResponseType',
  description: 'Type for SurveyResponse in content',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    survey: {
      type: SurveyType,
      args : {surveyId: {type: GraphQLString}},
      resolve: (surveyResponse, args, {loaders}) => loaders.ofbiz.load(`content/surveys/find?surveyId=${surveyResponse.surveyId}`)
    },
    statusId: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    orderId: {type: GraphQLString},
    generalFeedback: {type: GraphQLString},
    surveyResponseId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    responseDate: {type: GraphQLString},
    referenceId: {type: GraphQLString},
    giftCardFulfillments: {
      type: new GraphQLList(GiftCardFulfillmentType),
      args : {},
      resolve: (surveyResponse, args, {loaders}) => loaders.ofbizArray.load(`accounting/giftCard/giftCardFulfillments/find?surveyResponseId=${surveyResponse.surveyResponseId}`)
    },
    surveyResponseAnswers: {
      type: new GraphQLList(SurveyResponseAnswerType),
      args : {},
      resolve: (surveyResponse, args, {loaders}) => loaders.ofbizArray.load(`content/survey/surveyResponseAnswers/find?surveyResponseId=${surveyResponse.surveyResponseId}`)
    },
    dataResources: {
      type: new GraphQLList(DataResourceType),
      args : {},
      resolve: (surveyResponse, args, {loaders}) => loaders.ofbizArray.load(`content/dataResources/find?surveyResponseId=${surveyResponse.surveyResponseId}`)
    },
    shoppingListItemSurveies: {
      type: new GraphQLList(ShoppingListItemSurveyType),
      args : {},
      resolve: (surveyResponse, args, {loaders}) => loaders.ofbizArray.load(`order/shoppingList/shoppingListItemSurveys/find?surveyResponseId=${surveyResponse.surveyResponseId}`)
    }
  })
});

export {SurveyResponseType};
    