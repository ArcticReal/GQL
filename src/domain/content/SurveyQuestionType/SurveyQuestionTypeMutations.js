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
import {SurveyQuestionTypeInputType} from '../../content/SurveyQuestionType/SurveyQuestionTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSurveyQuestionType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSurveyQuestionType method',
  args:{surveyQuestionTypeToBeAdded: {type: SurveyQuestionTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/survey/surveyQuestionTypes/add?`, args.surveyQuestionTypeToBeAdded, req);
  }
};
export {createSurveyQuestionType};


const updateSurveyQuestionType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSurveyQuestionType method',
  args:{surveyQuestionTypeToBeUpdated: {type: SurveyQuestionTypeInputType},surveyQuestionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/survey/surveyQuestionTypes/${args.surveyQuestionTypeId}?`, args.surveyQuestionTypeToBeUpdated, req);
  }
};
export {updateSurveyQuestionType};


const deleteSurveyQuestionTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSurveyQuestionTypeByIdUpdated method',
  args:{surveyQuestionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/survey/surveyQuestionTypes/${args.surveyQuestionTypeId}?`, null, req);
  }
};
export {deleteSurveyQuestionTypeByIdUpdated};
