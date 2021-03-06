
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

import {SurveyQuestionOptionType} from '../../content/SurveyQuestionOption/SurveyQuestionOptionType.js';
import {ContentType} from '../../content/Content/ContentType.js';
import {SurveyResponseType} from '../../content/SurveyResponse/SurveyResponseType.js';


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
      resolve: (surveyResponseAnswer, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${surveyResponseAnswer.contentId}`)
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
    