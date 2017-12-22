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
import {WorkEffortNoteInputType} from '../../workeffort/WorkEffortNote/WorkEffortNoteInputType.js';
import {WorkEffortNoteResponseType} from '../../workeffort/WorkEffortNote/WorkEffortNoteResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortNote = {
  type: WorkEffortNoteResponseType,
  description: 'mutation for ofbiz createWorkEffortNote method',
  args:{workEffortNoteToBeAdded: {type: WorkEffortNoteInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortNotes/add?`, args.workEffortNoteToBeAdded, req);
  }
};
export {createWorkEffortNote};


const updateWorkEffortNote = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortNote method',
  args:{workEffortNoteToBeUpdated: {type: WorkEffortNoteInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortNotes/${args.nullVal}?`, args.workEffortNoteToBeUpdated, req);
  }
};
export {updateWorkEffortNote};


const deleteWorkEffortNoteByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortNoteByIdUpdated method',
  args:{workEffortNoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortNotes/${args.workEffortNoteId}?`, null, req);
  }
};
export {deleteWorkEffortNoteByIdUpdated};
