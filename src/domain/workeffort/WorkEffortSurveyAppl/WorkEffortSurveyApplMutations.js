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
import {WorkEffortSurveyApplResponseType} from '../../workeffort/WorkEffortSurveyAppl/WorkEffortSurveyApplResponseType.js';
import {WorkEffortSurveyApplInputType} from '../../workeffort/WorkEffortSurveyAppl/WorkEffortSurveyApplInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortSurveyAppl = {
  type: WorkEffortSurveyApplResponseType,
  description: 'mutation for ofbiz createWorkEffortSurveyAppl method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortSurveyAppls/add?`, null, req);
  }
};
export {createWorkEffortSurveyAppl};


const updateWorkEffortSurveyAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortSurveyAppl method',
  args:{workEffortSurveyApplToBeUpdated: {type: WorkEffortSurveyApplInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortSurveyAppls/${args.nullVal}?`, args.workEffortSurveyApplToBeUpdated, req);
  }
};
export {updateWorkEffortSurveyAppl};


const deleteWorkEffortSurveyApplByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortSurveyApplByIdUpdated method',
  args:{workEffortSurveyApplId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortSurveyAppls/${args.workEffortSurveyApplId}?`, null, req);
  }
};
export {deleteWorkEffortSurveyApplByIdUpdated};
