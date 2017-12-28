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
import {SurveyTriggerResponseType} from '../../content/SurveyTrigger/SurveyTriggerResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSurveyTrigger = {
  type: SurveyTriggerResponseType,
  description: 'mutation for ofbiz createSurveyTrigger method',
  args:{surveyTriggerToBeAdded: {type: SurveyTriggerInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/survey/surveyTriggers/add?`, args.surveyTriggerToBeAdded, req);
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
