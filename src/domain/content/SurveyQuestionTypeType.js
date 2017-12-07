
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


const SurveyQuestionTypeType = new GraphQLObjectType({
  name: 'SurveyQuestionTypeType',
  description: 'Type for SurveyQuestionType in content',

  fields: () => ({
    surveyQuestionTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    surveyQuestion: {
      type: new GraphQLList(SurveyQuestionType),
      args : {surveyQuestionTypeId: {type: GraphQLString}},
      resolve: (surveyQuestionType, args, {loaders}) => loaders.ofbizArray.load(`surveyQuestions/find?surveyQuestionTypeId=${surveyQuestionType.surveyQuestionTypeId}`)
    }
  })
});

export {SurveyQuestionTypeType};
    