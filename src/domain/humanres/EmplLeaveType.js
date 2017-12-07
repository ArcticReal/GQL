
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyType} from '../party/PartyType.js';
import {EmplLeaveTypeType} from '../humanres/EmplLeaveTypeType.js';
import {EmplLeaveReasonTypeType} from '../humanres/EmplLeaveReasonTypeType.js';


const EmplLeaveType = new GraphQLObjectType({
  name: 'EmplLeaveType',
  description: 'Type for EmplLeave in humanres',

  fields: () => ({
    fromDate: {type: GraphQLString},
    approverParty: {
      type: PartyType,
      args : {approverPartyId: {type: GraphQLString}},
      resolve: (emplLeave, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${emplLeave.approverPartyId}`)
    },
    emplLeaveReasonType: {
      type: EmplLeaveReasonTypeType,
      args : {emplLeaveReasonTypeId: {type: GraphQLString}},
      resolve: (emplLeave, args, {loaders}) => loaders.ofbiz.load(`emplLeaveReasonTypes/find?emplLeaveReasonTypeId=${emplLeave.emplLeaveReasonTypeId}`)
    },
    description: {type: GraphQLString},
    leaveType: {
      type: EmplLeaveTypeType,
      args : {leaveTypeId: {type: GraphQLString}},
      resolve: (emplLeave, args, {loaders}) => loaders.ofbiz.load(`emplLeaveTypes/find?leaveTypeId=${emplLeave.leaveTypeId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (emplLeave, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${emplLeave.partyId}`)
    },
    leaveStatus: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {EmplLeaveType};
    