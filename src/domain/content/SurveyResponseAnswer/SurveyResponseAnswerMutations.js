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
import {SurveyResponseAnswerInputType} from '../../content/SurveyResponseAnswer/SurveyResponseAnswerInputType.js';
import {SurveyResponseAnswerResponseType} from '../../content/SurveyResponseAnswer/SurveyResponseAnswerResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSurveyResponseAnswer = {
  type: SurveyResponseAnswerResponseType,
  description: 'mutation for ofbiz createSurveyResponseAnswer method',
  args:{surveyResponseAnswerToBeAdded: {type: SurveyResponseAnswerInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/survey/surveyResponseAnswers/add?`, args.surveyResponseAnswerToBeAdded, req);
  }
};
export {createSurveyResponseAnswer};


const updateSurveyResponseAnswer = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSurveyResponseAnswer method',
  args:{surveyResponseAnswerToBeUpdated: {type: SurveyResponseAnswerInputType},surveyMultiRespColId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/survey/surveyResponseAnswers/${args.surveyMultiRespColId}?`, args.surveyResponseAnswerToBeUpdated, req);
  }
};
export {updateSurveyResponseAnswer};


const deleteSurveyResponseAnswerByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSurveyResponseAnswerByIdUpdated method',
  args:{surveyResponseAnswerId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/survey/surveyResponseAnswers/${args.surveyResponseAnswerId}?`, null, req);
  }
};
export {deleteSurveyResponseAnswerByIdUpdated};
