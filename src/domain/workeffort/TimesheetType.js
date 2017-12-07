
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
import {TimeEntryType} from '../workeffort/TimeEntryType.js';
import {TimesheetRoleType} from '../workeffort/TimesheetRoleType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const TimesheetType = new GraphQLObjectType({
  name: 'TimesheetType',
  description: 'Type for Timesheet in workeffort',

  fields: () => ({
    timesheetId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    statusId: {type: GraphQLString},
    approvedByUserLogin: {
      type: UserLoginType,
      args : {approvedByUserLoginId: {type: GraphQLString}},
      resolve: (timesheet, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${timesheet.approvedByUserLoginId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (timesheet, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${timesheet.partyId}`)
    },
    clientParty: {
      type: PartyType,
      args : {clientPartyId: {type: GraphQLString}},
      resolve: (timesheet, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${timesheet.clientPartyId}`)
    },
    thruDate: {type: GraphQLString},
    timeEntry: {
      type: new GraphQLList(TimeEntryType),
      args : {timesheetId: {type: GraphQLString}},
      resolve: (timesheet, args, {loaders}) => loaders.ofbizArray.load(`timeEntrys/find?timesheetId=${timesheet.timesheetId}`)
    },
    timesheetRole: {
      type: new GraphQLList(TimesheetRoleType),
      args : {timesheetId: {type: GraphQLString}},
      resolve: (timesheet, args, {loaders}) => loaders.ofbizArray.load(`timesheetRoles/find?timesheetId=${timesheet.timesheetId}`)
    }
  })
});

export {TimesheetType};
    