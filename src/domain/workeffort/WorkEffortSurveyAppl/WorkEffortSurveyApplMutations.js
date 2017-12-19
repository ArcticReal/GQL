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
import {WorkEffortSurveyApplInputType} from '../../workeffort/WorkEffortSurveyAppl/WorkEffortSurveyApplInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createWorkEffortSurveyAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz createWorkEffortSurveyAppl method',
  args:{workEffortSurveyApplToBeAdded: {type: WorkEffortSurveyApplInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortSurveyAppls/add?`, args.workEffortSurveyApplToBeAdded, req);
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
