
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SurveyType} from '../content/SurveyType.js';
import {ShoppingListItemSurveyType} from '../order/ShoppingListItemSurveyType.js';
import {SurveyResponseAnswerType} from '../content/SurveyResponseAnswerType.js';
import {DataResourceType} from '../content/DataResourceType.js';
import {GiftCardFulfillmentType} from '../accounting/GiftCardFulfillmentType.js';


const SurveyResponseType = new GraphQLObjectType({
  name: 'SurveyResponseType',
  description: 'Type for SurveyResponse in content',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    survey: {
      type: SurveyType,
      args : {surveyId: {type: GraphQLString}},
      resolve: (surveyResponse, args, {loaders}) => loaders.ofbiz.load(`surveys/find?surveyId=${surveyResponse.surveyId}`)
    },
    statusId: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    orderId: {type: GraphQLString},
    generalFeedback: {type: GraphQLString},
    surveyResponseId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    responseDate: {type: GraphQLString},
    referenceId: {type: GraphQLString},
    giftCardFulfillment: {
      type: new GraphQLList(GiftCardFulfillmentType),
      args : {surveyResponseId: {type: GraphQLString}},
      resolve: (surveyResponse, args, {loaders}) => loaders.ofbizArray.load(`giftCardFulfillments/find?surveyResponseId=${surveyResponse.surveyResponseId}`)
    },
    surveyResponseAnswer: {
      type: new GraphQLList(SurveyResponseAnswerType),
      args : {surveyResponseId: {type: GraphQLString}},
      resolve: (surveyResponse, args, {loaders}) => loaders.ofbizArray.load(`surveyResponseAnswers/find?surveyResponseId=${surveyResponse.surveyResponseId}`)
    },
    dataResource: {
      type: new GraphQLList(DataResourceType),
      args : {surveyResponseId: {type: GraphQLString}},
      resolve: (surveyResponse, args, {loaders}) => loaders.ofbizArray.load(`dataResources/find?surveyResponseId=${surveyResponse.surveyResponseId}`)
    },
    shoppingListItemSurvey: {
      type: new GraphQLList(ShoppingListItemSurveyType),
      args : {surveyResponseId: {type: GraphQLString}},
      resolve: (surveyResponse, args, {loaders}) => loaders.ofbizArray.load(`shoppingListItemSurveys/find?surveyResponseId=${surveyResponse.surveyResponseId}`)
    }
  })
});

export {SurveyResponseType};
    