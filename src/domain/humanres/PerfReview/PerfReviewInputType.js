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

const PerfReviewInputType = new GraphQLInputObjectType({
  name: 'PerfReviewInputType',
  description: 'input type for PerfReview',

  fields: () => ({
    comments: {type: GraphQLString},
    emplPositionId: {type: GraphQLString},
    employeePartyId: {type: GraphQLString},
    employeeRoleTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    managerPartyId: {type: GraphQLString},
    managerRoleTypeId: {type: GraphQLString},
    paymentId: {type: GraphQLString},
    perfReviewId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PerfReviewInputType};
    