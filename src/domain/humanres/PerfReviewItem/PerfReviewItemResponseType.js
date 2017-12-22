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

const PerfReviewItemResponseType = new GraphQLObjectType({
  name: 'PerfReviewItemResponseType',
  description: 'response type for PerfReviewItem',

  fields: () => ({
    comments: {type: GraphQLString},
    employeePartyId: {type: GraphQLString},
    employeeRoleTypeId: {type: GraphQLString},
    perfRatingTypeId: {type: GraphQLString},
    perfReviewId: {type: GraphQLString},
    perfReviewItemSeqId: {type: GraphQLString},
    perfReviewItemTypeId: {type: GraphQLString}
  })
});

export {PerfReviewItemResponseType};
    