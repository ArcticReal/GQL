
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

import {PartyType} from '../party/Party.js';
import {EmplLeaveTypeType} from '../humanres/EmplLeaveType.js';
import {EmplLeaveReasonTypeType} from '../humanres/EmplLeaveReasonType.js';


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
    




const EmplLeaveInputType = new GraphQLInputObjectType({
  name: 'EmplLeaveInputType',
  description: 'input type for EmplLeave in humanres',

  fields: () => ({
    fromDate: {type: GraphQLString},
    approverPartyId: {type: GraphQLString},
    emplLeaveReasonTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    leaveTypeId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    leaveStatus: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {EmplLeaveInputType};
    