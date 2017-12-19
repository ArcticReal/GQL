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
import {TimesheetInputType} from '../../workeffort/Timesheet/TimesheetInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createTimesheet = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTimesheet method',
  args:{timesheetToBeAdded: {type: TimesheetInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/timesheets/add?`, args.timesheetToBeAdded, req);
  }
};
export {createTimesheet};


const updateTimesheet = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTimesheet method',
  args:{timesheetToBeUpdated: {type: TimesheetInputType},timesheetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/timesheets/${args.timesheetId}?`, args.timesheetToBeUpdated, req);
  }
};
export {updateTimesheet};


const deleteTimesheetByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTimesheetByIdUpdated method',
  args:{timesheetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/timesheets/${args.timesheetId}?`, null, req);
  }
};
export {deleteTimesheetByIdUpdated};
