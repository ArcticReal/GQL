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
import {SurveyApplTypeInputType} from '../../content/SurveyApplType/SurveyApplTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createSurveyApplType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSurveyApplType method',
  args:{surveyApplTypeToBeAdded: {type: SurveyApplTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/survey/surveyApplTypes/add?`, args.surveyApplTypeToBeAdded, req);
  }
};
export {createSurveyApplType};


const updateSurveyApplType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSurveyApplType method',
  args:{surveyApplTypeToBeUpdated: {type: SurveyApplTypeInputType},surveyApplTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/survey/surveyApplTypes/${args.surveyApplTypeId}?`, args.surveyApplTypeToBeUpdated, req);
  }
};
export {updateSurveyApplType};


const deleteSurveyApplTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSurveyApplTypeByIdUpdated method',
  args:{surveyApplTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/survey/surveyApplTypes/${args.surveyApplTypeId}?`, null, req);
  }
};
export {deleteSurveyApplTypeByIdUpdated};
