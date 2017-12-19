
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
import {TimesheetType} from '../../workeffort/Timesheet/TimesheetType.js';


const TimesheetRoleType = new GraphQLObjectType({
  name: 'TimesheetRoleType',
  description: 'Type for TimesheetRole in workeffort',

  fields: () => ({
    timesheet: {
      type: TimesheetType,
      args : {timesheetId: {type: GraphQLString}},
      resolve: (timesheetRole, args, {loaders}) => loaders.ofbiz.load(`workeffort/timesheets/find?timesheetId=${timesheetRole.timesheetId}`)
    },
    roleTypeId: {type: GraphQLString},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (timesheetRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${timesheetRole.partyId}`)
    }
  })
});

export {TimesheetRoleType};
    