
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SurveyResponseAnswerType} from '../content/SurveyResponseAnswerType.js';
import {SurveyQuestionApplType} from '../content/SurveyQuestionApplType.js';
import {SurveyQuestionType} from '../content/SurveyQuestionType.js';


const SurveyQuestionOptionType = new GraphQLObjectType({
  name: 'SurveyQuestionOptionType',
  description: 'Type for SurveyQuestionOption in content',

  fields: () => ({
    amountBase: {type: GraphQLFloat},
    duration: {type: GraphQLInt},
    surveyQuestion: {
      type: SurveyQuestionType,
      args : {surveyQuestionId: {type: GraphQLString}},
      resolve: (surveyQuestionOption, args, {loaders}) => loaders.ofbiz.load(`surveyQuestions/find?surveyQuestionId=${surveyQuestionOption.surveyQuestionId}`)
    },
    sequenceNum: {type: GraphQLInt},
    surveyOptionSeqId: {type: GraphQLString},
    amountBaseUomId: {type: GraphQLString},
    durationUomId: {type: GraphQLString},
    description: {type: GraphQLString},
    weightFactor: {type: GraphQLFloat},
    surveyQuestionAppl: {
      type: new GraphQLList(SurveyQuestionApplType),
      args : {surveyQuestionId: {type: GraphQLString}},
      resolve: (surveyQuestionOption, args, {loaders}) => loaders.ofbizArray.load(`surveyQuestionAppls/find?surveyQuestionId=${surveyQuestionOption.surveyQuestionId}`)
    },
    surveyResponseAnswer: {
      type: new GraphQLList(SurveyResponseAnswerType),
      args : {surveyQuestionId: {type: GraphQLString}},
      resolve: (surveyQuestionOption, args, {loaders}) => loaders.ofbizArray.load(`surveyResponseAnswers/find?surveyQuestionId=${surveyQuestionOption.surveyQuestionId}`)
    }
  })
});

export {SurveyQuestionOptionType};
    