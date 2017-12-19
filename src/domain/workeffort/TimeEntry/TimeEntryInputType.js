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

const TimeEntryInputType = new GraphQLInputObjectType({
  name: 'TimeEntryInputType',
  description: 'input type for TimeEntry',

  fields: () => ({
    comments: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    hours: {type: GraphQLFloat},
    invoiceId: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    rateTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    timeEntryId: {type: GraphQLString},
    timesheetId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {TimeEntryInputType};
    