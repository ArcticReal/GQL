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

const EmplLeaveInputType = new GraphQLInputObjectType({
  name: 'EmplLeaveInputType',
  description: 'input type for EmplLeave',

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

export {EmplLeaveInputType};
    