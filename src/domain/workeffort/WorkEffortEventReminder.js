
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

import {WorkEffortType} from '../workeffort/WorkEffort.js';
import {PartyType} from '../party/Party.js';
import {ContactMechType} from '../party/ContactMech.js';


const WorkEffortEventReminderType = new GraphQLObjectType({
  name: 'WorkEffortEventReminderType',
  description: 'Type for WorkEffortEventReminder in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortEventReminder, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffortEventReminder.workEffortId}`)
    },
    timeZoneId: {type: GraphQLString},
    currentCount: {type: GraphQLInt},
    reminderDateTime: {type: GraphQLString},
    repeatInterval: {type: GraphQLInt},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (workEffortEventReminder, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${workEffortEventReminder.partyId}`)
    },
    reminderOffset: {type: GraphQLInt},
    sequenceId: {type: GraphQLString},
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (workEffortEventReminder, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${workEffortEventReminder.contactMechId}`)
    },
    localeId: {type: GraphQLString},
    repeatCount: {type: GraphQLInt}
  })
});

export {WorkEffortEventReminderType};
    




const WorkEffortEventReminderInputType = new GraphQLInputObjectType({
  name: 'WorkEffortEventReminderInputType',
  description: 'input type for WorkEffortEventReminder in workeffort',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    timeZoneId: {type: GraphQLString},
    currentCount: {type: GraphQLInt},
    reminderDateTime: {type: GraphQLString},
    repeatInterval: {type: GraphQLInt},
    partyId: {type: GraphQLString},
    reminderOffset: {type: GraphQLInt},
    sequenceId: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    localeId: {type: GraphQLString},
    repeatCount: {type: GraphQLInt}
  })
});

export {WorkEffortEventReminderInputType};
    