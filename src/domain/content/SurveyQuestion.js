
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
import {SurveyQuestionTypeType} from '../content/SurveyQuestionType.js';
import {SurveyQuestionCategoryType} from '../content/SurveyQuestionCategory.js';
import {SurveyResponseAnswerType} from '../content/SurveyResponseAnswer.js';
import {SurveyQuestionApplType} from '../content/SurveyQuestionAppl.js';


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
    formatString: {type: GraphQLString},
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
    surveyResponseAnswers: {
      type: new GraphQLList(SurveyResponseAnswerType),
      args : {surveyQuestionId: {type: GraphQLString}},
      resolve: (surveyQuestion, args, {loaders}) => loaders.ofbizArray.load(`surveyResponseAnswers/find?surveyQuestionId=${surveyQuestion.surveyQuestionId}`)
    },
    surveyQuestionAppls: {
      type: new GraphQLList(SurveyQuestionApplType),
      args : {surveyQuestionId: {type: GraphQLString}},
      resolve: (surveyQuestion, args, {loaders}) => loaders.ofbizArray.load(`surveyQuestionAppls/find?surveyQuestionId=${surveyQuestion.surveyQuestionId}`)
    },
    surveyQuestionOptions: {
      type: new GraphQLList(SurveyQuestionOptionType),
      args : {surveyQuestionId: {type: GraphQLString}},
      resolve: (surveyQuestion, args, {loaders}) => loaders.ofbizArray.load(`surveyQuestionOptions/find?surveyQuestionId=${surveyQuestion.surveyQuestionId}`)
    }
  })
});

export {SurveyQuestionType};
    




const SurveyQuestionInputType = new GraphQLInputObjectType({
  name: 'SurveyQuestionInputType',
  description: 'input type for SurveyQuestion in content',

  fields: () => ({
    surveyQuestionTypeId: {type: GraphQLString},
    enumTypeId: {type: GraphQLString},
    formatString: {type: GraphQLString},
    surveyQuestionId: {type: GraphQLString},
    surveyQuestionCategoryId: {type: GraphQLString},
    question: {type: GraphQLString},
    hint: {type: GraphQLString},
    geoId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {SurveyQuestionInputType};
    