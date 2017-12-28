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
import {WorkEffortEventReminderInputType} from '../../workeffort/WorkEffortEventReminder/WorkEffortEventReminderInputType.js';
import {WorkEffortEventReminderResponseType} from '../../workeffort/WorkEffortEventReminder/WorkEffortEventReminderResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortEventReminder = {
  type: WorkEffortEventReminderResponseType,
  description: 'mutation for ofbiz createWorkEffortEventReminder method',
  args:{workEffortEventReminderToBeAdded: {type: WorkEffortEventReminderInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortEventReminders/add?`, args.workEffortEventReminderToBeAdded, req);
  }
};
export {createWorkEffortEventReminder};


const updateWorkEffortEventReminder = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortEventReminder method',
  args:{workEffortEventReminderToBeUpdated: {type: WorkEffortEventReminderInputType},sequenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortEventReminders/${args.sequenceId}?`, args.workEffortEventReminderToBeUpdated, req);
  }
};
export {updateWorkEffortEventReminder};


const deleteWorkEffortEventReminderByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortEventReminderByIdUpdated method',
  args:{workEffortEventReminderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortEventReminders/${args.workEffortEventReminderId}?`, null, req);
  }
};
export {deleteWorkEffortEventReminderByIdUpdated};
