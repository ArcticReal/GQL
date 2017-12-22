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
import {WorkEffortPartyAssignmentInputType} from '../../workeffort/WorkEffortPartyAssignment/WorkEffortPartyAssignmentInputType.js';
import {WorkEffortPartyAssignmentResponseType} from '../../workeffort/WorkEffortPartyAssignment/WorkEffortPartyAssignmentResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortPartyAssignment = {
  type: WorkEffortPartyAssignmentResponseType,
  description: 'mutation for ofbiz createWorkEffortPartyAssignment method',
  args:{workEffortPartyAssignmentToBeAdded: {type: WorkEffortPartyAssignmentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortPartyAssignments/add?`, args.workEffortPartyAssignmentToBeAdded, req);
  }
};
export {createWorkEffortPartyAssignment};


const updateWorkEffortPartyAssignment = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortPartyAssignment method',
  args:{workEffortPartyAssignmentToBeUpdated: {type: WorkEffortPartyAssignmentInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortPartyAssignments/${args.roleTypeId}?`, args.workEffortPartyAssignmentToBeUpdated, req);
  }
};
export {updateWorkEffortPartyAssignment};


const deleteWorkEffortPartyAssignmentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortPartyAssignmentByIdUpdated method',
  args:{workEffortPartyAssignmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortPartyAssignments/${args.workEffortPartyAssignmentId}?`, null, req);
  }
};
export {deleteWorkEffortPartyAssignmentByIdUpdated};
