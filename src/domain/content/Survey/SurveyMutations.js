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
import {SurveyInputType} from '../../content/Survey/SurveyInputType.js';
import {SurveyResponseType} from '../../content/SurveyResponse/SurveyResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSurvey = {
  type: SurveyResponseType,
  description: 'mutation for ofbiz createSurvey method',
  args:{surveyToBeAdded: {type: SurveyInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/surveys/add?`, args.surveyToBeAdded, req);
  }
};
export {createSurvey};


const updateSurvey = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSurvey method',
  args:{surveyToBeUpdated: {type: SurveyInputType},surveyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/surveys/${args.surveyId}?`, args.surveyToBeUpdated, req);
  }
};
export {updateSurvey};


const deleteSurveyByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSurveyByIdUpdated method',
  args:{surveyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/surveys/${args.surveyId}?`, null, req);
  }
};
export {deleteSurveyByIdUpdated};
