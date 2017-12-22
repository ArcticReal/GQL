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
import {TimesheetRoleResponseType} from '../../workeffort/TimesheetRole/TimesheetRoleResponseType.js';
import {TimesheetRoleInputType} from '../../workeffort/TimesheetRole/TimesheetRoleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTimesheetRole = {
  type: TimesheetRoleResponseType,
  description: 'mutation for ofbiz createTimesheetRole method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/timesheet/timesheetRoles/add?`, null, req);
  }
};
export {createTimesheetRole};


const updateTimesheetRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTimesheetRole method',
  args:{timesheetRoleToBeUpdated: {type: TimesheetRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/timesheet/timesheetRoles/${args.roleTypeId}?`, args.timesheetRoleToBeUpdated, req);
  }
};
export {updateTimesheetRole};


const deleteTimesheetRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTimesheetRoleByIdUpdated method',
  args:{timesheetRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/timesheet/timesheetRoles/${args.timesheetRoleId}?`, null, req);
  }
};
export {deleteTimesheetRoleByIdUpdated};
