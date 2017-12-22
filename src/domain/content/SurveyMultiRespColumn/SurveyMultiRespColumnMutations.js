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
import {SurveyMultiRespColumnResponseType} from '../../content/SurveyMultiRespColumn/SurveyMultiRespColumnResponseType.js';
import {SurveyMultiRespColumnInputType} from '../../content/SurveyMultiRespColumn/SurveyMultiRespColumnInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSurveyMultiRespColumn = {
  type: SurveyMultiRespColumnResponseType,
  description: 'mutation for ofbiz createSurveyMultiRespColumn method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/survey/surveyMultiRespColumns/add?`, null, req);
  }
};
export {createSurveyMultiRespColumn};


const updateSurveyMultiRespColumn = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSurveyMultiRespColumn method',
  args:{surveyMultiRespColumnToBeUpdated: {type: SurveyMultiRespColumnInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/survey/surveyMultiRespColumns/${args.nullVal}?`, args.surveyMultiRespColumnToBeUpdated, req);
  }
};
export {updateSurveyMultiRespColumn};


const deleteSurveyMultiRespColumnByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSurveyMultiRespColumnByIdUpdated method',
  args:{surveyMultiRespColumnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/survey/surveyMultiRespColumns/${args.surveyMultiRespColumnId}?`, null, req);
  }
};
export {deleteSurveyMultiRespColumnByIdUpdated};
