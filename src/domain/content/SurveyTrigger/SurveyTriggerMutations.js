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
import {SurveyTriggerInputType} from '../../content/SurveyTrigger/SurveyTriggerInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createSurveyTrigger = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSurveyTrigger method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/survey/surveyTriggers/add?`, null, req);
  }
};
export {createSurveyTrigger};


const updateSurveyTrigger = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSurveyTrigger method',
  args:{surveyTriggerToBeUpdated: {type: SurveyTriggerInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/survey/surveyTriggers/${args.nullVal}?`, args.surveyTriggerToBeUpdated, req);
  }
};
export {updateSurveyTrigger};


const deleteSurveyTriggerByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSurveyTriggerByIdUpdated method',
  args:{surveyTriggerId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/survey/surveyTriggers/${args.surveyTriggerId}?`, null, req);
  }
};
export {deleteSurveyTriggerByIdUpdated};
