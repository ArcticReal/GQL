
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

import {SurveyMultiRespType} from '../content/SurveyMultiResp.js';
import {SurveyResponseType} from '../content/SurveyResponse.js';
import {SurveyTriggerType} from '../content/SurveyTrigger.js';
import {ProductStoreSurveyApplType} from '../product/ProductStoreSurveyAppl.js';
import {DataResourceType} from '../content/DataResource.js';
import {SurveyPageType} from '../content/SurveyPage.js';
import {WorkEffortSurveyApplType} from '../workeffort/WorkEffortSurveyAppl.js';
import {SurveyQuestionApplType} from '../content/SurveyQuestionAppl.js';


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
    surveyMultiResps: {
      type: new GraphQLList(SurveyMultiRespType),
      args : {surveyId: {type: GraphQLString}},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`surveyMultiResps/find?surveyId=${survey.surveyId}`)
    },
    productStoreSurveyAppls: {
      type: new GraphQLList(ProductStoreSurveyApplType),
      args : {surveyId: {type: GraphQLString}},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`productStoreSurveyAppls/find?surveyId=${survey.surveyId}`)
    },
    workEffortSurveyAppls: {
      type: new GraphQLList(WorkEffortSurveyApplType),
      args : {surveyId: {type: GraphQLString}},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`workEffortSurveyAppls/find?surveyId=${survey.surveyId}`)
    },
    surveyPages: {
      type: new GraphQLList(SurveyPageType),
      args : {surveyId: {type: GraphQLString}},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`surveyPages/find?surveyId=${survey.surveyId}`)
    },
    surveyResponses: {
      type: new GraphQLList(SurveyResponseType),
      args : {surveyId: {type: GraphQLString}},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`surveyResponses/find?surveyId=${survey.surveyId}`)
    },
    surveyQuestionAppls: {
      type: new GraphQLList(SurveyQuestionApplType),
      args : {surveyId: {type: GraphQLString}},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`surveyQuestionAppls/find?surveyId=${survey.surveyId}`)
    },
    dataResources: {
      type: new GraphQLList(DataResourceType),
      args : {surveyId: {type: GraphQLString}},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`dataResources/find?surveyId=${survey.surveyId}`)
    },
    surveyTriggers: {
      type: new GraphQLList(SurveyTriggerType),
      args : {surveyId: {type: GraphQLString}},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`surveyTriggers/find?surveyId=${survey.surveyId}`)
    }
  })
});

export {SurveyType};
    




const SurveyInputType = new GraphQLInputObjectType({
  name: 'SurveyInputType',
  description: 'input type for Survey in content',

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
    submitCaption: {type: GraphQLString}
  })
});

export {SurveyInputType};
    