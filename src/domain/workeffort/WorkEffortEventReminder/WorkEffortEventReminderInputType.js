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

const WorkEffortEventReminderInputType = new GraphQLInputObjectType({
  name: 'WorkEffortEventReminderInputType',
  description: 'input type for WorkEffortEventReminder',

  fields: () => ({
    contactMechId: {type: GraphQLString},
    currentCount: {type: GraphQLInt},
    localeId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    reminderDateTime: {type: GraphQLString},
    reminderOffset: {type: GraphQLInt},
    repeatCount: {type: GraphQLInt},
    repeatInterval: {type: GraphQLInt},
    sequenceId: {type: GraphQLString},
    timeZoneId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortEventReminderInputType};
    