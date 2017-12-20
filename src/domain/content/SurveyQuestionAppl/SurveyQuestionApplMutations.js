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
import {SurveyQuestionApplInputType} from '../../content/SurveyQuestionAppl/SurveyQuestionApplInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSurveyQuestionAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSurveyQuestionAppl method',
  args:{surveyQuestionApplToBeAdded: {type: SurveyQuestionApplInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/survey/surveyQuestionAppls/add?`, args.surveyQuestionApplToBeAdded, req);
  }
};
export {createSurveyQuestionAppl};


const updateSurveyQuestionAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSurveyQuestionAppl method',
  args:{surveyQuestionApplToBeUpdated: {type: SurveyQuestionApplInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/survey/surveyQuestionAppls/${args.nullVal}?`, args.surveyQuestionApplToBeUpdated, req);
  }
};
export {updateSurveyQuestionAppl};


const deleteSurveyQuestionApplByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSurveyQuestionApplByIdUpdated method',
  args:{surveyQuestionApplId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/survey/surveyQuestionAppls/${args.surveyQuestionApplId}?`, null, req);
  }
};
export {deleteSurveyQuestionApplByIdUpdated};
