
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

import {SurveyResponseAnswerType} from '../../content/SurveyResponseAnswer/SurveyResponseAnswerType.js';
import {SurveyQuestionApplType} from '../../content/SurveyQuestionAppl/SurveyQuestionApplType.js';
import {SurveyQuestionType} from '../../content/SurveyQuestion/SurveyQuestionType.js';


const SurveyQuestionOptionType = new GraphQLObjectType({
  name: 'SurveyQuestionOptionType',
  description: 'Type for SurveyQuestionOption in content',

  fields: () => ({
    amountBase: {type: GraphQLFloat},
    duration: {type: GraphQLInt},
    surveyQuestion: {
      type: SurveyQuestionType,
      args : {surveyQuestionId: {type: GraphQLString}},
      resolve: (surveyQuestionOption, args, {loaders}) => loaders.ofbiz.load(`content/survey/surveyQuestions/find?surveyQuestionId=${surveyQuestionOption.surveyQuestionId}`)
    },
    sequenceNum: {type: GraphQLInt},
    surveyOptionSeqId: {type: GraphQLString},
    amountBaseUomId: {type: GraphQLString},
    durationUomId: {type: GraphQLString},
    description: {type: GraphQLString},
    weightFactor: {type: GraphQLFloat},
    surveyQuestionAppls: {
      type: new GraphQLList(SurveyQuestionApplType),
      args : {},
      resolve: (surveyQuestionOption, args, {loaders}) => loaders.ofbizArray.load(`content/survey/surveyQuestionAppls/find?surveyQuestionId=${surveyQuestionOption.surveyQuestionId}`)
    },
    surveyResponseAnswers: {
      type: new GraphQLList(SurveyResponseAnswerType),
      args : {},
      resolve: (surveyQuestionOption, args, {loaders}) => loaders.ofbizArray.load(`content/survey/surveyResponseAnswers/find?surveyQuestionId=${surveyQuestionOption.surveyQuestionId}`)
    }
  })
});

export {SurveyQuestionOptionType};
    