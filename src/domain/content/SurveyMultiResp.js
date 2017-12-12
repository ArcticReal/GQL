
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

import {SurveyType} from '../content/Survey.js';
import {SurveyMultiRespColumnType} from '../content/SurveyMultiRespColumn.js';


const SurveyMultiRespType = new GraphQLObjectType({
  name: 'SurveyMultiRespType',
  description: 'Type for SurveyMultiResp in content',

  fields: () => ({
    survey: {
      type: SurveyType,
      args : {surveyId: {type: GraphQLString}},
      resolve: (surveyMultiResp, args, {loaders}) => loaders.ofbiz.load(`content/surveys/find?surveyId=${surveyMultiResp.surveyId}`)
    },
    surveyMultiRespId: {type: GraphQLString},
    multiRespTitle: {type: GraphQLString},
    surveyMultiRespColumns: {
      type: new GraphQLList(SurveyMultiRespColumnType),
      args : {},
      resolve: (surveyMultiResp, args, {loaders}) => loaders.ofbizArray.load(`content/survey/surveyMultiRespColumns/find?surveyId=${surveyMultiResp.surveyId}`)
    }
  })
});

export {SurveyMultiRespType};
    




const SurveyMultiRespInputType = new GraphQLInputObjectType({
  name: 'SurveyMultiRespInputType',
  description: 'input type for SurveyMultiResp in content',

  fields: () => ({
    surveyId: {type: GraphQLString},
    surveyMultiRespId: {type: GraphQLString},
    multiRespTitle: {type: GraphQLString}
  })
});

export {SurveyMultiRespInputType};
    