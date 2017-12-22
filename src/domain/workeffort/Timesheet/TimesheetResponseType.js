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

const TimesheetResponseType = new GraphQLObjectType({
  name: 'TimesheetResponseType',
  description: 'response type for Timesheet',

  fields: () => ({
    approvedByUserLoginId: {type: GraphQLString},
    clientPartyId: {type: GraphQLString},
    comments: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    timesheetId: {type: GraphQLString}
  })
});

export {TimesheetResponseType};
    