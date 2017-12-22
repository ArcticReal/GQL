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

const WorkEffortPartyAssignmentResponseType = new GraphQLObjectType({
  name: 'WorkEffortPartyAssignmentResponseType',
  description: 'response type for WorkEffortPartyAssignment',

  fields: () => ({
    assignedByUserLoginId: {type: GraphQLString},
    availabilityStatusId: {type: GraphQLString},
    comments: {type: GraphQLString},
    delegateReasonEnumId: {type: GraphQLString},
    expectationEnumId: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    mustRsvp: {type: GraphQLBoolean},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    statusDateTime: {type: GraphQLString},
    statusId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortPartyAssignmentResponseType};
    