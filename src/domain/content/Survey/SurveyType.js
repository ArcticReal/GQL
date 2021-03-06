
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
import {SurveyResponseType} from '../../content/SurveyResponse/SurveyResponseType.js';
import {SurveyTriggerType} from '../../content/SurveyTrigger/SurveyTriggerType.js';
import {ProductStoreSurveyApplType} from '../../product/ProductStoreSurveyAppl/ProductStoreSurveyApplType.js';
import {DataResourceType} from '../../content/DataResource/DataResourceType.js';
import {SurveyPageType} from '../../content/SurveyPage/SurveyPageType.js';
import {WorkEffortSurveyApplType} from '../../workeffort/WorkEffortSurveyAppl/WorkEffortSurveyApplType.js';
import {SurveyQuestionApplType} from '../../content/SurveyQuestionAppl/SurveyQuestionApplType.js';


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
      args : {},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`content/survey/surveyMultiResps/find?surveyId=${survey.surveyId}`)
    },
    productStoreSurveyAppls: {
      type: new GraphQLList(ProductStoreSurveyApplType),
      args : {},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreSurveyAppls/find?surveyId=${survey.surveyId}`)
    },
    workEffortSurveyAppls: {
      type: new GraphQLList(WorkEffortSurveyApplType),
      args : {},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortSurveyAppls/find?surveyId=${survey.surveyId}`)
    },
    surveyPages: {
      type: new GraphQLList(SurveyPageType),
      args : {},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`content/survey/surveyPages/find?surveyId=${survey.surveyId}`)
    },
    surveyResponses: {
      type: new GraphQLList(SurveyResponseType),
      args : {},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`content/survey/surveyResponses/find?surveyId=${survey.surveyId}`)
    },
    surveyQuestionAppls: {
      type: new GraphQLList(SurveyQuestionApplType),
      args : {},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`content/survey/surveyQuestionAppls/find?surveyId=${survey.surveyId}`)
    },
    dataResources: {
      type: new GraphQLList(DataResourceType),
      args : {},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`content/dataResources/find?surveyId=${survey.surveyId}`)
    },
    surveyTriggers: {
      type: new GraphQLList(SurveyTriggerType),
      args : {},
      resolve: (survey, args, {loaders}) => loaders.ofbizArray.load(`content/survey/surveyTriggers/find?surveyId=${survey.surveyId}`)
    }
  })
});

export {SurveyType};
    