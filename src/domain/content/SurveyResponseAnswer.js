
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

import {SurveyQuestionOptionType} from '../content/SurveyQuestionOption.js';
import {ContentType} from '../content/Content.js';
import {SurveyResponseType} from '../content/SurveyResponse.js';


const SurveyResponseAnswerType = new GraphQLObjectType({
  name: 'SurveyResponseAnswerType',
  description: 'Type for SurveyResponseAnswer in content',

  fields: () => ({
    amountBase: {type: GraphQLFloat},
    surveyQuestion: {
      type: SurveyQuestionOptionType,
      args : {surveyQuestionId: {type: GraphQLString}},
      resolve: (surveyResponseAnswer, args, {loaders}) => loaders.ofbiz.load(`content/survey/surveyQuestionOptions/find?surveyQuestionId=${surveyResponseAnswer.surveyQuestionId}`)
    },
    sequenceNum: {type: GraphQLInt},
    surveyOptionSeqId: {type: GraphQLString},
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (surveyResponseAnswer, args, {loaders}) => loaders.ofbiz.load(`/contents/find?contentId=${surveyResponseAnswer.contentId}`)
    },
    durationUomId: {type: GraphQLString},
    currencyResponse: {type: GraphQLFloat},
    floatResponse: {type: GraphQLFloat},
    numericResponse: {type: GraphQLInt},
    surveyResponse: {
      type: SurveyResponseType,
      args : {surveyResponseId: {type: GraphQLString}},
      resolve: (surveyResponseAnswer, args, {loaders}) => loaders.ofbiz.load(`content/survey/surveyResponses/find?surveyResponseId=${surveyResponseAnswer.surveyResponseId}`)
    },
    duration: {type: GraphQLInt},
    answeredDate: {type: GraphQLString},
    textResponse: {type: GraphQLString},
    amountBaseUomId: {type: GraphQLString},
    booleanResponse: {type: GraphQLBoolean},
    weightFactor: {type: GraphQLFloat},
    surveyMultiRespColId: {type: GraphQLString},
    surveyMultiRespId: {type: GraphQLString}
  })
});

export {SurveyResponseAnswerType};
    




const SurveyResponseAnswerInputType = new GraphQLInputObjectType({
  name: 'SurveyResponseAnswerInputType',
  description: 'input type for SurveyResponseAnswer',

  fields: () => ({
    amountBase: {type: GraphQLFloat},
    amountBaseUomId: {type: GraphQLString},
    answeredDate: {type: GraphQLString},
    booleanResponse: {type: GraphQLBoolean},
    contentId: {type: GraphQLString},
    currencyResponse: {type: GraphQLFloat},
    duration: {type: GraphQLInt},
    durationUomId: {type: GraphQLString},
    floatResponse: {type: GraphQLFloat},
    numericResponse: {type: GraphQLInt},
    sequenceNum: {type: GraphQLInt},
    surveyMultiRespColId: {type: GraphQLString},
    surveyMultiRespId: {type: GraphQLString},
    surveyOptionSeqId: {type: GraphQLString},
    surveyQuestionId: {type: GraphQLString},
    surveyResponseId: {type: GraphQLString},
    textResponse: {type: GraphQLString},
    weightFactor: {type: GraphQLFloat}
  })
});

export {SurveyResponseAnswerInputType};
    