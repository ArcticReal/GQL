
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SurveyMultiRespType} from '../content/SurveyMultiRespType.js';
import {SurveyResponseType} from '../content/SurveyResponseType.js';
import {SurveyTriggerType} from '../content/SurveyTriggerType.js';
import {ProductStoreSurveyApplType} from '../product/ProductStoreSurveyApplType.js';
import {DataResourceType} from '../content/DataResourceType.js';
import {SurveyPageType} from '../content/SurveyPageType.js';
import {WorkEffortSurveyApplType} from '../workeffort/WorkEffortSurveyApplType.js';
import {SurveyQuestionApplType} from '../content/SurveyQuestionApplType.js';


const SurveyType = new GraphQLObjectType({
  name: 'SurveyType',
  description: 'Type for Survey in content',

  fields: () => ({
    surveyId: {type: GraphQLString},
    isAnonymous: {type: GraphQLBoolean},
    comments: {type: GraphQLString},
    surveyName: {type: GraphQLString},
    allowMultiple: {type: GraphQLBoolean},
    responseService: {type: GraphQLString},
    description: {type: GraphQLString},
    acroFormContentId: {type: GraphQLString},
    allowUpdate: {type: GraphQLBoolean},
    submitCaption: {type: GraphQLString},
    surveyMultiResp: {
      type: new GraphQLList(SurveyMultiRespType),
      args : {surveyId: {type: GraphQLString}},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`surveyMultiResps/find?surveyId=${survey.surveyId}`)
    },
    productStoreSurveyAppl: {
      type: new GraphQLList(ProductStoreSurveyApplType),
      args : {surveyId: {type: GraphQLString}},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`productStoreSurveyAppls/find?surveyId=${survey.surveyId}`)
    },
    workEffortSurveyAppl: {
      type: new GraphQLList(WorkEffortSurveyApplType),
      args : {surveyId: {type: GraphQLString}},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`workEffortSurveyAppls/find?surveyId=${survey.surveyId}`)
    },
    surveyPage: {
      type: new GraphQLList(SurveyPageType),
      args : {surveyId: {type: GraphQLString}},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`surveyPages/find?surveyId=${survey.surveyId}`)
    },
    surveyResponse: {
      type: new GraphQLList(SurveyResponseType),
      args : {surveyId: {type: GraphQLString}},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`surveyResponses/find?surveyId=${survey.surveyId}`)
    },
    surveyQuestionAppl: {
      type: new GraphQLList(SurveyQuestionApplType),
      args : {surveyId: {type: GraphQLString}},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`surveyQuestionAppls/find?surveyId=${survey.surveyId}`)
    },
    dataResource: {
      type: new GraphQLList(DataResourceType),
      args : {surveyId: {type: GraphQLString}},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`dataResources/find?surveyId=${survey.surveyId}`)
    },
    surveyTrigger: {
      type: new GraphQLList(SurveyTriggerType),
      args : {surveyId: {type: GraphQLString}},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`surveyTriggers/find?surveyId=${survey.surveyId}`)
    }
  })
});

export {SurveyType};
    