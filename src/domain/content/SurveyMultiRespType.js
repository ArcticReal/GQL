
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
import {SurveyMultiRespColumnType} from '../content/SurveyMultiRespColumnType.js';


const SurveyMultiRespType = new GraphQLObjectType({
  name: 'SurveyMultiRespType',
  description: 'Type for SurveyMultiResp in content',

  fields: () => ({
    survey: {
      type: SurveyType,
      args : {surveyId: {type: GraphQLString}},
      resolve: (surveyMultiResp, args, {loaders}) => loaders.ofbiz.load(`surveys/find?surveyId=${surveyMultiResp.surveyId}`)
    },
    surveyMultiRespId: {type: GraphQLString},
    multiRespTitle: {type: GraphQLString},
    surveyMultiRespColumn: {
      type: new GraphQLList(SurveyMultiRespColumnType),
      args : {surveyId: {type: GraphQLString}},
      resolve: (surveyMultiResp, args, {loaders}) => loaders.ofbizArray.load(`surveyMultiRespColumns/find?surveyId=${surveyMultiResp.surveyId}`)
    }
  })
});

export {SurveyMultiRespType};
    