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
import {SurveyPageInputType} from '../../content/SurveyPage/SurveyPageInputType.js';
import {SurveyPageResponseType} from '../../content/SurveyPage/SurveyPageResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSurveyPage = {
  type: SurveyPageResponseType,
  description: 'mutation for ofbiz createSurveyPage method',
  args:{surveyPageToBeAdded: {type: SurveyPageInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/survey/surveyPages/add?`, args.surveyPageToBeAdded, req);
  }
};
export {createSurveyPage};


const deleteSurveyPageByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSurveyPageByIdUpdated method',
  args:{surveyPageId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/survey/surveyPages/${args.surveyPageId}?`, null, req);
  }
};
export {deleteSurveyPageByIdUpdated};


const updateSurveyPage = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSurveyPage method',
  args:{surveyPageToBeUpdated: {type: SurveyPageInputType},surveyPageSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/survey/surveyPages/${args.surveyPageSeqId}?`, args.surveyPageToBeUpdated, req);
  }
};
export {updateSurveyPage};
