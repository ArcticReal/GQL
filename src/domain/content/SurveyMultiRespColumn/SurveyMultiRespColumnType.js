
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

import {SurveyMultiRespType} from '../../content/SurveyMultiResp/SurveyMultiRespType.js';


const SurveyMultiRespColumnType = new GraphQLObjectType({
  name: 'SurveyMultiRespColumnType',
  description: 'Type for SurveyMultiRespColumn in content',

  fields: () => ({
    survey: {
      type: SurveyMultiRespType,
      args : {surveyId: {type: GraphQLString}},
      resolve: (surveyMultiRespColumn, args, {loaders}) => loaders.ofbiz.load(`content/survey/surveyMultiResps/find?surveyId=${surveyMultiRespColumn.surveyId}`)
    },
    sequenceNum: {type: GraphQLInt},
    columnTitle: {type: GraphQLString},
    surveyMultiRespId: {type: GraphQLString},
    surveyMultiRespColId: {type: GraphQLString}
  })
});

export {SurveyMultiRespColumnType};
    