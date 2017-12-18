
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

import {PartyRoleType} from '../party/PartyRole.js';
import {TimesheetType} from '../workeffort/Timesheet.js';


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
    




const TimesheetRoleInputType = new GraphQLInputObjectType({
  name: 'TimesheetRoleInputType',
  description: 'input type for TimesheetRole',

  fields: () => ({
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    timesheetId: {type: GraphQLString}
  })
});

export {TimesheetRoleInputType};
    