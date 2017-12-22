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
import {SurveyMultiRespResponseType} from '../../content/SurveyMultiResp/SurveyMultiRespResponseType.js';
import {SurveyMultiRespInputType} from '../../content/SurveyMultiResp/SurveyMultiRespInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSurveyMultiResp = {
  type: SurveyMultiRespResponseType,
  description: 'mutation for ofbiz createSurveyMultiResp method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/survey/surveyMultiResps/add?`, null, req);
  }
};
export {createSurveyMultiResp};


const updateSurveyMultiResp = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSurveyMultiResp method',
  args:{surveyMultiRespToBeUpdated: {type: SurveyMultiRespInputType},surveyMultiRespId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/survey/surveyMultiResps/${args.surveyMultiRespId}?`, args.surveyMultiRespToBeUpdated, req);
  }
};
export {updateSurveyMultiResp};


const deleteSurveyMultiRespByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSurveyMultiRespByIdUpdated method',
  args:{surveyMultiRespId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/survey/surveyMultiResps/${args.surveyMultiRespId}?`, null, req);
  }
};
export {deleteSurveyMultiRespByIdUpdated};
