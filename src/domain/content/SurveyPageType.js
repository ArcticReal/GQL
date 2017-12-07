
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SurveyType} from '../content/SurveyType.js';


const SurveyPageType = new GraphQLObjectType({
  name: 'SurveyPageType',
  description: 'Type for SurveyPage in content',

  fields: () => ({
    survey: {
      type: SurveyType,
      args : {surveyId: {type: GraphQLString}},
      resolve: (surveyPage, args, {loaders}) => loaders.ofbiz.load(`surveys/find?surveyId=${surveyPage.surveyId}`)
    },
    sequenceNum: {type: GraphQLInt},
    surveyPageSeqId: {type: GraphQLString},
    pageName: {type: GraphQLString}
  })
});

export {SurveyPageType};
    