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
import {SurveyQuestionInputType} from '../../content/SurveyQuestion/SurveyQuestionInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSurveyQuestion = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSurveyQuestion method',
  args:{surveyQuestionToBeAdded: {type: SurveyQuestionInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/survey/surveyQuestions/add?`, args.surveyQuestionToBeAdded, req);
  }
};
export {createSurveyQuestion};


const updateSurveyQuestion = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSurveyQuestion method',
  args:{surveyQuestionToBeUpdated: {type: SurveyQuestionInputType},surveyQuestionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/survey/surveyQuestions/${args.surveyQuestionId}?`, args.surveyQuestionToBeUpdated, req);
  }
};
export {updateSurveyQuestion};


const deleteSurveyQuestionByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSurveyQuestionByIdUpdated method',
  args:{surveyQuestionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/survey/surveyQuestions/${args.surveyQuestionId}?`, null, req);
  }
};
export {deleteSurveyQuestionByIdUpdated};
