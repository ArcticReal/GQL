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
import {SurveyResponseInputType} from '../../content/SurveyResponse/SurveyResponseInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createSurveyResponse = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSurveyResponse method',
  args:{surveyResponseToBeAdded: {type: SurveyResponseInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/survey/surveyResponses/add?`, args.surveyResponseToBeAdded, req);
  }
};
export {createSurveyResponse};


const updateSurveyResponse = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSurveyResponse method',
  args:{surveyResponseToBeUpdated: {type: SurveyResponseInputType},surveyResponseId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/survey/surveyResponses/${args.surveyResponseId}?`, args.surveyResponseToBeUpdated, req);
  }
};
export {updateSurveyResponse};


const deleteSurveyResponseByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSurveyResponseByIdUpdated method',
  args:{surveyResponseId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/survey/surveyResponses/${args.surveyResponseId}?`, null, req);
  }
};
export {deleteSurveyResponseByIdUpdated};
