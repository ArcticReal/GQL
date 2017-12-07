
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRoleType} from '../party/PartyRoleType.js';
import {ApplicationSandboxType} from '../workeffort/ApplicationSandboxType.js';
import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {FacilityType} from '../product/FacilityType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const WorkEffortPartyAssignmentType = new GraphQLObjectType({
  name: 'WorkEffortPartyAssignmentType',
  description: 'Type for WorkEffortPartyAssignment in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortPartyAssignment, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workEffortPartyAssignment.workEffortId}`)
    },
    roleTypeId: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (workEffortPartyAssignment, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${workEffortPartyAssignment.facilityId}`)
    },
    comments: {type: GraphQLString},
    mustRsvp: {type: GraphQLBoolean},
    assignedByUserLogin: {
      type: UserLoginType,
      args : {assignedByUserLoginId: {type: GraphQLString}},
      resolve: (workEffortPartyAssignment, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${workEffortPartyAssignment.assignedByUserLoginId}`)
    },
    delegateReasonEnumId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    statusDateTime: {type: GraphQLString},
    expectationEnumId: {type: GraphQLString},
    availabilityStatusId: {type: GraphQLString},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (workEffortPartyAssignment, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${workEffortPartyAssignment.partyId}`)
    },
    applicationSandbox: {
      type: new GraphQLList(ApplicationSandboxType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortPartyAssignment, args, {loaders}) => loaders.ofbizArray.load(`applicationSandboxs/find?workEffortId=${workEffortPartyAssignment.workEffortId}`)
    }
  })
});

export {WorkEffortPartyAssignmentType};
    