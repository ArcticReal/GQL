
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

import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';
import {ApplicationSandboxType} from '../../workeffort/ApplicationSandbox/ApplicationSandboxType.js';
import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';
import {FacilityType} from '../../product/Facility/FacilityType.js';
import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';


const WorkEffortPartyAssignmentType = new GraphQLObjectType({
  name: 'WorkEffortPartyAssignmentType',
  description: 'Type for WorkEffortPartyAssignment in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortPartyAssignment, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffortPartyAssignment.workEffortId}`)
    },
    roleTypeId: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (workEffortPartyAssignment, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${workEffortPartyAssignment.facilityId}`)
    },
    comments: {type: GraphQLString},
    mustRsvp: {type: GraphQLBoolean},
    assignedByUserLogin: {
      type: UserLoginType,
      args : {assignedByUserLoginId: {type: GraphQLString}},
      resolve: (workEffortPartyAssignment, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${workEffortPartyAssignment.assignedByUserLoginId}`)
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
      resolve: (workEffortPartyAssignment, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${workEffortPartyAssignment.partyId}`)
    },
    applicationSandboxes: {
      type: new GraphQLList(ApplicationSandboxType),
      args : {},
      resolve: (workEffortPartyAssignment, args, {loaders}) => loaders.ofbizArray.load(`workeffort/applicationSandboxs/find?workEffortId=${workEffortPartyAssignment.workEffortId}`)
    }
  })
});

export {WorkEffortPartyAssignmentType};
    