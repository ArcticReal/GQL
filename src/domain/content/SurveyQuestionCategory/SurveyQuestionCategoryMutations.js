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
import {SurveyQuestionCategoryInputType} from '../../content/SurveyQuestionCategory/SurveyQuestionCategoryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSurveyQuestionCategory = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSurveyQuestionCategory method',
  args:{surveyQuestionCategoryToBeAdded: {type: SurveyQuestionCategoryInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/survey/surveyQuestionCategorys/add?`, args.surveyQuestionCategoryToBeAdded, req);
  }
};
export {createSurveyQuestionCategory};


const updateSurveyQuestionCategory = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSurveyQuestionCategory method',
  args:{surveyQuestionCategoryToBeUpdated: {type: SurveyQuestionCategoryInputType},surveyQuestionCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/survey/surveyQuestionCategorys/${args.surveyQuestionCategoryId}?`, args.surveyQuestionCategoryToBeUpdated, req);
  }
};
export {updateSurveyQuestionCategory};


const deleteSurveyQuestionCategoryByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSurveyQuestionCategoryByIdUpdated method',
  args:{surveyQuestionCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/survey/surveyQuestionCategorys/${args.surveyQuestionCategoryId}?`, null, req);
  }
};
export {deleteSurveyQuestionCategoryByIdUpdated};
