
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SurveyQuestionType} from '../content/SurveyQuestionType.js';


const SurveyQuestionCategoryType = new GraphQLObjectType({
  name: 'SurveyQuestionCategoryType',
  description: 'Type for SurveyQuestionCategory in content',

  fields: () => ({
    surveyQuestionCategoryId: {type: GraphQLString},
    description: {type: GraphQLString},
    parentCategory: {
      type: SurveyQuestionCategoryType,
      args : {parentCategoryId: {type: GraphQLString}},
      resolve: (surveyQuestionCategory, args, {loaders}) => loaders.ofbiz.load(`surveyQuestionCategorys/find?surveyQuestionCategoryId=${surveyQuestionCategory.parentCategoryId}`)
    },
    surveyQuestion: {
      type: new GraphQLList(SurveyQuestionType),
      args : {surveyQuestionCategoryId: {type: GraphQLString}},
      resolve: (surveyQuestionCategory, args, {loaders}) => loaders.ofbizArray.load(`surveyQuestions/find?surveyQuestionCategoryId=${surveyQuestionCategory.surveyQuestionCategoryId}`)
    },
    surveyQuestionCategory: {
      type: new GraphQLList(SurveyQuestionCategoryType),
      args : {surveyQuestionCategoryId: {type: GraphQLString}},
      resolve: (surveyQuestionCategory, args, {loaders}) => loaders.ofbizArray.load(`surveyQuestionCategorys/find?surveyQuestionCategoryId=${surveyQuestionCategory.surveyQuestionCategoryId}`)
    }
  })
});

export {SurveyQuestionCategoryType};
    