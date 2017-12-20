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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortPartyAssignment = {
  type: ResopnseType,
  description: 'mutation for ofbiz createWorkEffortPartyAssignment method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortPartyAssignments/add?`, null, req);
  }
};
export {createWorkEffortPartyAssignment};


const updateWorkEffortPartyAssignment = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateWorkEffortPartyAssignment method',
  args:{workEffortPartyAssignmentToBeUpdated: {type: WorkEffortPartyAssignmentInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortPartyAssignments/${args.roleTypeId}?`, args.workEffortPartyAssignmentToBeUpdated, req);
  }
};
export {updateWorkEffortPartyAssignment};


const deleteWorkEffortPartyAssignmentByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteWorkEffortPartyAssignmentByIdUpdated method',
  args:{workEffortPartyAssignmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortPartyAssignments/${args.workEffortPartyAssignmentId}?`, null, req);
  }
};
export {deleteWorkEffortPartyAssignmentByIdUpdated};
