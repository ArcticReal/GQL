
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SurveyQuestionOptionType} from '../content/SurveyQuestionOptionType.js';
import {SurveyQuestionTypeType} from '../content/SurveyQuestionTypeType.js';
import {SurveyQuestionCategoryType} from '../content/SurveyQuestionCategoryType.js';
import {SurveyResponseAnswerType} from '../content/SurveyResponseAnswerType.js';
import {SurveyQuestionApplType} from '../content/SurveyQuestionApplType.js';


const SurveyQuestionType = new GraphQLObjectType({
  name: 'SurveyQuestionType',
  description: 'Type for SurveyQuestion in content',

  fields: () => ({
    surveyQuestionType: {
      type: SurveyQuestionTypeType,
      args : {surveyQuestionTypeId: {type: GraphQLString}},
      resolve: (surveyQuestion, args, {loaders}) => loaders.ofbiz.load(`surveyQuestionTypes/find?surveyQuestionTypeId=${surveyQuestion.surveyQuestionTypeId}`)
    },
    enumTypeId: {type: GraphQLString},
    formatString: {type: GraphQLInt},
    surveyQuestionId: {type: GraphQLString},
    surveyQuestionCategory: {
      type: SurveyQuestionCategoryType,
      args : {surveyQuestionCategoryId: {type: GraphQLString}},
      resolve: (surveyQuestion, args, {loaders}) => loaders.ofbiz.load(`surveyQuestionCategorys/find?surveyQuestionCategoryId=${surveyQuestion.surveyQuestionCategoryId}`)
    },
    question: {type: GraphQLString},
    hint: {type: GraphQLString},
    geoId: {type: GraphQLString},
    description: {type: GraphQLString},
    surveyResponseAnswer: {
      type: new GraphQLList(SurveyResponseAnswerType),
      args : {surveyQuestionId: {type: GraphQLString}},
      resolve: (surveyQuestion, args, {loaders}) => loaders.ofbizArray.load(`surveyResponseAnswers/find?surveyQuestionId=${surveyQuestion.surveyQuestionId}`)
    },
    surveyQuestionAppl: {
      type: new GraphQLList(SurveyQuestionApplType),
      args : {surveyQuestionId: {type: GraphQLString}},
      resolve: (surveyQuestion, args, {loaders}) => loaders.ofbizArray.load(`surveyQuestionAppls/find?surveyQuestionId=${surveyQuestion.surveyQuestionId}`)
    },
    surveyQuestionOption: {
      type: new GraphQLList(SurveyQuestionOptionType),
      args : {surveyQuestionId: {type: GraphQLString}},
      resolve: (surveyQuestion, args, {loaders}) => loaders.ofbizArray.load(`surveyQuestionOptions/find?surveyQuestionId=${surveyQuestion.surveyQuestionId}`)
    }
  })
});

export {SurveyQuestionType};
    