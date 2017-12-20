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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortEventReminder = {
  type: ResopnseType,
  description: 'mutation for ofbiz createWorkEffortEventReminder method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortEventReminders/add?`, null, req);
  }
};
export {createWorkEffortEventReminder};


const updateWorkEffortEventReminder = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateWorkEffortEventReminder method',
  args:{workEffortEventReminderToBeUpdated: {type: WorkEffortEventReminderInputType},sequenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortEventReminders/${args.sequenceId}?`, args.workEffortEventReminderToBeUpdated, req);
  }
};
export {updateWorkEffortEventReminder};


const deleteWorkEffortEventReminderByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteWorkEffortEventReminderByIdUpdated method',
  args:{workEffortEventReminderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortEventReminders/${args.workEffortEventReminderId}?`, null, req);
  }
};
export {deleteWorkEffortEventReminderByIdUpdated};
