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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createSurveyResponseAnswer = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSurveyResponseAnswer method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/survey/surveyResponseAnswers/add?`, null, req);
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
