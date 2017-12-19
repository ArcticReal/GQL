
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

import {SurveyType} from '../../content/Survey/SurveyType.js';


const SurveyPageType = new GraphQLObjectType({
  name: 'SurveyPageType',
  description: 'Type for SurveyPage in content',

  fields: () => ({
    survey: {
      type: SurveyType,
      args : {surveyId: {type: GraphQLString}},
      resolve: (surveyPage, args, {loaders}) => loaders.ofbiz.load(`content/surveys/find?surveyId=${surveyPage.surveyId}`)
    },
    sequenceNum: {type: GraphQLInt},
    surveyPageSeqId: {type: GraphQLString},
    pageName: {type: GraphQLString}
  })
});

export {SurveyPageType};
    