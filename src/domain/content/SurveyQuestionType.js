
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

import {SurveyQuestionType} from '../content/SurveyQuestion.js';


const SurveyQuestionTypeType = new GraphQLObjectType({
  name: 'SurveyQuestionTypeType',
  description: 'Type for SurveyQuestionType in content',

  fields: () => ({
    surveyQuestionTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    surveyQuestions: {
      type: new GraphQLList(SurveyQuestionType),
      args : {},
      resolve: (surveyQuestionType, args, {loaders}) => loaders.ofbizArray.load(`content/survey/surveyQuestions/find?surveyQuestionTypeId=${surveyQuestionType.surveyQuestionTypeId}`)
    }
  })
});

export {SurveyQuestionTypeType};
    




const SurveyQuestionTypeInputType = new GraphQLInputObjectType({
  name: 'SurveyQuestionTypeInputType',
  description: 'input type for SurveyQuestionType',

  fields: () => ({
    description: {type: GraphQLString},
    surveyQuestionTypeId: {type: GraphQLString}
  })
});

export {SurveyQuestionTypeInputType};
    