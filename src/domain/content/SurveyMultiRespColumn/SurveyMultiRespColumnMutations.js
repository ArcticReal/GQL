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
import {SurveyMultiRespColumnInputType} from '../../content/SurveyMultiRespColumn/SurveyMultiRespColumnInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createSurveyMultiRespColumn = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSurveyMultiRespColumn method',
  args:{surveyMultiRespColumnToBeAdded: {type: SurveyMultiRespColumnInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/survey/surveyMultiRespColumns/add?`, args.surveyMultiRespColumnToBeAdded, req);
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
