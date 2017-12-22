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

const EmplLeaveResponseType = new GraphQLObjectType({
  name: 'EmplLeaveResponseType',
  description: 'response type for EmplLeave',

  fields: () => ({
    approverPartyId: {type: GraphQLString},
    description: {type: GraphQLString},
    emplLeaveReasonTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    leaveStatus: {type: GraphQLString},
    leaveTypeId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {EmplLeaveResponseType};
    