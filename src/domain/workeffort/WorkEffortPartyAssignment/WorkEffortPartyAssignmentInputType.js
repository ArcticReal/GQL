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

const WorkEffortPartyAssignmentInputType = new GraphQLInputObjectType({
  name: 'WorkEffortPartyAssignmentInputType',
  description: 'input type for WorkEffortPartyAssignment',

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

export {WorkEffortPartyAssignmentInputType};
    