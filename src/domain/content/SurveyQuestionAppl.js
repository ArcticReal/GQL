
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
import {SurveyType} from '../content/Survey.js';
import {SurveyQuestionType} from '../content/SurveyQuestion.js';


const SurveyQuestionApplType = new GraphQLObjectType({
  name: 'SurveyQuestionApplType',
  description: 'Type for SurveyQuestionAppl in content',

  fields: () => ({
    fromDate: {type: GraphQLString},
    withSurveyOptionSeqId: {type: GraphQLString},
    surveyQuestion: {
      type: SurveyQuestionType,
      args : {surveyQuestionId: {type: GraphQLString}},
      resolve: (surveyQuestionAppl, args, {loaders}) => loaders.ofbiz.load(`content/survey/surveyQuestions/find?surveyQuestionId=${surveyQuestionAppl.surveyQuestionId}`)
    },
    externalFieldRef: {type: GraphQLString},
    survey: {
      type: SurveyType,
      args : {surveyId: {type: GraphQLString}},
      resolve: (surveyQuestionAppl, args, {loaders}) => loaders.ofbiz.load(`content/surveys/find?surveyId=${surveyQuestionAppl.surveyId}`)
    },
    requiredField: {type: GraphQLBoolean},
    sequenceNum: {type: GraphQLInt},
    withSurveyQuestion: {
      type: SurveyQuestionOptionType,
      args : {withSurveyQuestionId: {type: GraphQLString}},
      resolve: (surveyQuestionAppl, args, {loaders}) => loaders.ofbiz.load(`content/survey/surveyQuestionOptions/find?surveyQuestionId=${surveyQuestionAppl.withSurveyQuestionId}`)
    },
    surveyPageSeqId: {type: GraphQLString},
    surveyMultiRespId: {type: GraphQLString},
    surveyMultiRespColId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {SurveyQuestionApplType};
    




const SurveyQuestionApplInputType = new GraphQLInputObjectType({
  name: 'SurveyQuestionApplInputType',
  description: 'input type for SurveyQuestionAppl in content',

  fields: () => ({
    fromDate: {type: GraphQLString},
    withSurveyOptionSeqId: {type: GraphQLString},
    surveyQuestionId: {type: GraphQLString},
    externalFieldRef: {type: GraphQLString},
    surveyId: {type: GraphQLString},
    requiredField: {type: GraphQLBoolean},
    sequenceNum: {type: GraphQLInt},
    withSurveyQuestionId: {type: GraphQLString},
    surveyPageSeqId: {type: GraphQLString},
    surveyMultiRespId: {type: GraphQLString},
    surveyMultiRespColId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {SurveyQuestionApplInputType};
    