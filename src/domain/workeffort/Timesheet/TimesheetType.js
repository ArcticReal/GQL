
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

import {PartyType} from '../../party/Party/PartyType.js';
import {TimeEntryType} from '../../workeffort/TimeEntry/TimeEntryType.js';
import {TimesheetRoleType} from '../../workeffort/TimesheetRole/TimesheetRoleType.js';
import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';


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
      resolve: (timesheet, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${timesheet.approvedByUserLoginId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (timesheet, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${timesheet.partyId}`)
    },
    clientParty: {
      type: PartyType,
      args : {clientPartyId: {type: GraphQLString}},
      resolve: (timesheet, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${timesheet.clientPartyId}`)
    },
    thruDate: {type: GraphQLString},
    timeEntries: {
      type: new GraphQLList(TimeEntryType),
      args : {},
      resolve: (timesheet, args, {loaders}) => loaders.ofbizArray.load(`workeffort/timeEntrys/find?timesheetId=${timesheet.timesheetId}`)
    },
    timesheetRoles: {
      type: new GraphQLList(TimesheetRoleType),
      args : {},
      resolve: (timesheet, args, {loaders}) => loaders.ofbizArray.load(`workeffort/timesheet/timesheetRoles/find?timesheetId=${timesheet.timesheetId}`)
    }
  })
});

export {TimesheetType};
    