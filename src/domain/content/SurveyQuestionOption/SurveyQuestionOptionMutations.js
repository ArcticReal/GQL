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
import {SurveyQuestionOptionInputType} from '../../content/SurveyQuestionOption/SurveyQuestionOptionInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createSurveyQuestionOption = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSurveyQuestionOption method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/survey/surveyQuestionOptions/add?`, null, req);
  }
};
export {createSurveyQuestionOption};


const updateSurveyQuestionOption = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSurveyQuestionOption method',
  args:{surveyQuestionOptionToBeUpdated: {type: SurveyQuestionOptionInputType},surveyOptionSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/survey/surveyQuestionOptions/${args.surveyOptionSeqId}?`, args.surveyQuestionOptionToBeUpdated, req);
  }
};
export {updateSurveyQuestionOption};


const deleteSurveyQuestionOptionByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSurveyQuestionOptionByIdUpdated method',
  args:{surveyQuestionOptionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/survey/surveyQuestionOptions/${args.surveyQuestionOptionId}?`, null, req);
  }
};
export {deleteSurveyQuestionOptionByIdUpdated};
