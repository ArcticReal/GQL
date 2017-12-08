
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

import {SurveyType} from '../content/Survey.js';
import {ShoppingListItemSurveyType} from '../order/ShoppingListItemSurvey.js';
import {SurveyResponseAnswerType} from '../content/SurveyResponseAnswer.js';
import {DataResourceType} from '../content/DataResource.js';
import {GiftCardFulfillmentType} from '../accounting/GiftCardFulfillment.js';


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
    giftCardFulfillments: {
      type: new GraphQLList(GiftCardFulfillmentType),
      args : {surveyResponseId: {type: GraphQLString}},
      resolve: (surveyResponse, args, {loaders}) => loaders.ofbizArray.load(`giftCardFulfillments/find?surveyResponseId=${surveyResponse.surveyResponseId}`)
    },
    surveyResponseAnswers: {
      type: new GraphQLList(SurveyResponseAnswerType),
      args : {surveyResponseId: {type: GraphQLString}},
      resolve: (surveyResponse, args, {loaders}) => loaders.ofbizArray.load(`surveyResponseAnswers/find?surveyResponseId=${surveyResponse.surveyResponseId}`)
    },
    dataResources: {
      type: new GraphQLList(DataResourceType),
      args : {surveyResponseId: {type: GraphQLString}},
      resolve: (surveyResponse, args, {loaders}) => loaders.ofbizArray.load(`dataResources/find?surveyResponseId=${surveyResponse.surveyResponseId}`)
    },
    shoppingListItemSurveies: {
      type: new GraphQLList(ShoppingListItemSurveyType),
      args : {surveyResponseId: {type: GraphQLString}},
      resolve: (surveyResponse, args, {loaders}) => loaders.ofbizArray.load(`shoppingListItemSurveys/find?surveyResponseId=${surveyResponse.surveyResponseId}`)
    }
  })
});

export {SurveyResponseType};
    




const SurveyResponseInputType = new GraphQLInputObjectType({
  name: 'SurveyResponseInputType',
  description: 'input type for SurveyResponse in content',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    surveyId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    orderId: {type: GraphQLString},
    generalFeedback: {type: GraphQLString},
    surveyResponseId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    responseDate: {type: GraphQLString},
    referenceId: {type: GraphQLString}
  })
});

export {SurveyResponseInputType};
    